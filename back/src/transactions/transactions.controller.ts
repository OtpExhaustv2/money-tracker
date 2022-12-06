import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { Routes } from 'src/utils/constants';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller(Routes.TRANSACTIONS)
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.transactionsService.delete(id);
  }

  @Get('by-month/:month')
  findAllByMonth(@Param('month') month: number) {
    return this.transactionsService.findAllForAMonth(month, 2022);
  }
}
