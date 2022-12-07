import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCronDto } from './dtos';

@Injectable()
export class CronService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  async startCronJobs() {
    // const jobs = await this.prisma.cronJob.findMany();
    // jobs.forEach(async (job) => {
    //   const cronJob = new CronJob(CronExpression[job.cron], () => {
    //     console.log('CronJob', job.name, 'executed');
    //   });
    //   cronJob.start();
    //   this.schedulerRegistry.addCronJob(job.name, cronJob);
    // });
  }

  async createCronJob(createCronDto: CreateCronDto, cb: () => void) {
    const job = new CronJob(
      createCronDto.cron,
      cb,
      null,
      true,
      null,
      null,
      false,
    );

    this.schedulerRegistry.addCronJob(createCronDto.name, job);

    await this.prisma.cronJob.create({
      data: {
        ...createCronDto,
      },
    });
  }
}
