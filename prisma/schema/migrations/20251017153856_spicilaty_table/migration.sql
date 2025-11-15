/*
  Warnings:

  - You are about to drop the column `appoinmentFee` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `grnder` on the `doctors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctor_schedules" ALTER COLUMN "isBooked" SET DEFAULT false;

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "appoinmentFee",
DROP COLUMN "grnder",
ADD COLUMN     "appointmentFee" INTEGER,
ADD COLUMN     "designation" TEXT,
ADD COLUMN     "gender" "Gender";

-- CreateTable
CREATE TABLE "specialties" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "specialties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_specialties" (
    "specialitiesId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "doctor_specialties_pkey" PRIMARY KEY ("specialitiesId","doctorId")
);

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_specialitiesId_fkey" FOREIGN KEY ("specialitiesId") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
