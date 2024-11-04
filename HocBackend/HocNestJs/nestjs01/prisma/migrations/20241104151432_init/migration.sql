-- CreateTable
CREATE TABLE "Attendance" (
    "id" BIGSERIAL NOT NULL,
    "classMemberId" BIGINT NOT NULL,
    "status" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectClass" (
    "id" BIGSERIAL NOT NULL,
    "classId" BIGINT NOT NULL,
    "subjectId" BIGINT NOT NULL,
    "schedule" JSONB NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SubjectClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" BIGSERIAL NOT NULL,
    "classMemberId" BIGINT NOT NULL,
    "subjectId" BIGINT NOT NULL,
    "name" BIGINT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamResult" (
    "id" BIGSERIAL NOT NULL,
    "examId" BIGINT NOT NULL,
    "memberId" BIGINT NOT NULL,
    "score" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "deletedBy" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ExamResult_pkey" PRIMARY KEY ("id")
);
