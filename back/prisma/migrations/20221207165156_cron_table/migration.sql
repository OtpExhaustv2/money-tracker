-- CreateTable
CREATE TABLE "cron_jobs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cron" TEXT NOT NULL,
    "isRunning" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cron_jobs_pkey" PRIMARY KEY ("id")
);
