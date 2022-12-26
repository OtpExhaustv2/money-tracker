import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards';
import { Routes } from 'src/utils/constants';
import { AuthUser } from 'src/utils/decorators';
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

  @Get()
  findAll(@AuthUser() user: User) {
    return this.transactionsService.findAll(user.id);
  }

  @Get('bank-account/:bankAccountId')
  findAllByBankAccount(@Param('bankAccountId') bankAccountId: number) {
    return this.transactionsService.findAllByBankAccount(bankAccountId);
  }

  @Get('by-month/:month')
  findAllByMonth(@Param('month') month: number) {
    return this.transactionsService.findAllForAMonth(month, 2022);
  }
}
