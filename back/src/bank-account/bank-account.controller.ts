import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards';
import { Routes } from 'src/utils/constants';
import { AuthUser } from 'src/utils/decorators';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto, UpdateBankAccountDto } from './dtos';

@Controller(Routes.BANK_ACOUNTS)
@UseGuards(JwtAuthGuard)
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post()
  create(
    @Body() createBankAccountDto: CreateBankAccountDto,
    @AuthUser() user: User,
  ) {
    return this.bankAccountService.create(createBankAccountDto, user.id);
  }

  @Put(':bankAccountId')
  update(
    @Body() bankAccount: UpdateBankAccountDto,
    @AuthUser() user: User,
    @Param('bankAccountId') bankAccountId: number,
  ) {
    return this.bankAccountService.update(bankAccount, bankAccountId, user.id);
  }

  @Delete(':bankAccountId')
  async delete(
    @AuthUser() user: User,
    @Param('bankAccountId') bankAccountId: number,
  ) {
    await this.bankAccountService.delete(bankAccountId, user.id);
    return { message: 'Bank account deleted' };
  }

  @Get()
  getMines(@AuthUser() user: User) {
    return this.bankAccountService.getMines(user.id);
  }
}
