import { Module } from '@nestjs/common';
import { BankAccountService } from 'src/bank-account/bank-account.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, BankAccountService],
})
export class TransactionsModule {}
