import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { CronModule } from './cron/cron.module';
import { CronService } from './cron/cron.service';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UserModule } from './users/user.module';

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
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [],
  providers: [CronService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly cronService: CronService) {}

  onModuleInit() {
    this.cronService.startCronJobs();
  }
}
