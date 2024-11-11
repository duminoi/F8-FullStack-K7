/*
  Warnings:

  - You are about to drop the `ExamDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExamDetails" DROP CONSTRAINT "ExamDetails_examId_fkey";

-- DropForeignKey
ALTER TABLE "ExamDetails" DROP CONSTRAINT "ExamDetails_fileId_fkey";

-- DropForeignKey
ALTER TABLE "ExamResult" DROP CONSTRAINT "ExamResult_examDetailId_fkey";

-- DropTable
DROP TABLE "ExamDetails";

-- CreateTable
CREATE TABLE "ExamDetail" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "examId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,
    "totalTime" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER,
    "modifiedAt" TIMESTAMP(3),
    "modifiedBy" INTEGER,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ExamDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExamDetail" ADD CONSTRAINT "ExamDetail_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamDetail" ADD CONSTRAINT "ExamDetail_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamResult" ADD CONSTRAINT "ExamResult_examDetailId_fkey" FOREIGN KEY ("examDetailId") REFERENCES "ExamDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
