/*
  Warnings:

  - You are about to drop the column `isRunning` on the `cron_jobs` table. All the data in the column will be lost.
  - You are about to drop the column `isShcheduled` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cron_jobs" DROP COLUMN "isRunning";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "isShcheduled",
ADD COLUMN     "isScheduled" BOOLEAN NOT NULL DEFAULT false;
