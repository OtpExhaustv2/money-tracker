import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BankAccountModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
