import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBankAccountDto, UpdateBankAccountDto } from './dtos';

@Injectable()
export class BankAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBankAccountDto: CreateBankAccountDto, userId: number) {
    try {
      const bankAccounts = await this.prisma.bankAccount.count({
        where: {
          userId: userId,
        },
      });
      if (bankAccounts === 0) {
        createBankAccountDto.isFavorite = true;
      }
      return await this.prisma.bankAccount.create({
        data: {
          ...createBankAccountDto,
          userId: userId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(bankAccountId: number, userId: number) {
    try {
      const bankAccount = await this.prisma.bankAccount.findUnique({
        where: {
          id: bankAccountId,
        },
      });
      if (bankAccount.userId !== userId) {
        throw new ForbiddenException(
          'You are not the owner of this bank account',
        );
      }
      await this.prisma.bankAccount.delete({
        where: {
          id: bankAccountId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    bankAccount: UpdateBankAccountDto,
    bankAccountId: number,
    userId: number,
  ) {
    try {
      const bankAccountToUpdate = await this.prisma.bankAccount.findUnique({
        where: {
          id: bankAccountId,
        },
      });
      if (bankAccountToUpdate.userId !== userId) {
        throw new ForbiddenException(
          'You are not the owner of this bank account',
        );
      }
      return await this.prisma.bankAccount.update({
        where: {
          id: bankAccountId,
        },
        data: {
          ...bankAccount,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getMines(userId: number) {
    try {
      return await this.prisma.bankAccount.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          isFavorite: 'desc',
        },
        include: {
          transactions: {
            orderBy: {
              date: 'desc',
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateBalance(bankAccountId: number, amount: number) {
    try {
      return await this.prisma.bankAccount.update({
        where: {
          id: bankAccountId,
        },
        data: {
          balance: {
            increment: amount,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
