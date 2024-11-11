/*
  Warnings:

  - The primary key for the `ClassMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createAt` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `createBy` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedAt` on the `ClassMember` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedBy` on the `ClassMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClassMember" DROP CONSTRAINT "ClassMember_pkey",
DROP COLUMN "createAt",
DROP COLUMN "createBy",
DROP COLUMN "deletedAt",
DROP COLUMN "deletedBy",
DROP COLUMN "id",
DROP COLUMN "modifiedAt",
DROP COLUMN "modifiedBy",
ADD CONSTRAINT "ClassMember_pkey" PRIMARY KEY ("classId", "memberId");

-- AddForeignKey
ALTER TABLE "ClassMember" ADD CONSTRAINT "ClassMember_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassMember" ADD CONSTRAINT "ClassMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
