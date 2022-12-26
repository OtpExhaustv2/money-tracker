import { Injectable } from '@nestjs/common';
import { CronExpression } from '@nestjs/schedule';
import { BankAccountService } from 'src/bank-account/bank-account.service';
import { CronService } from 'src/cron/cron.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bankAccountService: BankAccountService,
    private readonly cronService: CronService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          ...createTransactionDto,
        },
      });

      if (createTransactionDto.isScheduled) {
        this.cronService.createCronJob(
          {
            cron: CronExpression.EVERY_5_SECONDS,
            description: `Scheculed transaction ${transaction.id}`,
            name: `transaction-${transaction.id}`,
          },
          async () => {
            this.create({ ...createTransactionDto, isScheduled: false });
          },
        );
      }

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

  async findAll(userId: number) {
    return await this.prisma.transaction.findMany({
      where: {
        bankAccount: {
          userId,
        },
      },
    });
  }

  async findAllByBankAccount(bankAccountId: number) {
    return await this.prisma.transaction.findMany({
      where: {
        bankAccountId,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findAllForAMonth(month: number, year: number) {
    return await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: new Date(year, month - 1, 1),
          lte: new Date(year, month, 0),
        },
      },
    });
  }
}
