/*
  Warnings:

  - Added the required column `answer` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCorrect` to the `ExamResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamResult" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL;
