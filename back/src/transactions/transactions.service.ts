import { Injectable } from '@nestjs/common';
import { BankAccountService } from 'src/bank-account/bank-account.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bankAccountService: BankAccountService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          ...createTransactionDto,
        },
      });

      await this.bankAccountService.updateBalance(
        createTransactionDto.bankAccountId,
        createTransactionDto.amount,
      );

      return transaction;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: number) {
    try {
      const transaction = await this.prisma.transaction.findUnique({
        where: {
          id,
        },
      });

      await this.bankAccountService.updateBalance(
        transaction.bankAccountId,
        -transaction.amount,
      );

      return await this.prisma.transaction.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  findAllForAMonth(month: number, year: number) {
    return this.prisma.transaction.findMany({
      where: {
        date: {
          gte: new Date(year, month - 1, 1),
          lte: new Date(year, month, 0),
        },
      },
    });
  }
}
