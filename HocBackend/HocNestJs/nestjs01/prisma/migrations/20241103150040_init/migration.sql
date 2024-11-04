-- CreateTable
CREATE TABLE "Member" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" JSONB NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassMember" (
    "id" BIGSERIAL NOT NULL,
    "classId" BIGINT NOT NULL,
    "memberId" BIGINT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ClassMember_pkey" PRIMARY KEY ("id")
);
