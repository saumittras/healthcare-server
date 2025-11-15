import { Gender } from "@prisma/client";

export type IDoctorUpdateInput = {
  name: string;
  contactNumber: string | null;
  address: string | null;
  registrationNumber: string | null;
  experience: number;
  gender: Gender | null;
  appointmentFee: number | null;
  qualification: string | null;
  currentWorkingPlace: string | null;
  designation: string | null;
  isDeleted: boolean;
  specialties: {
    specialtyId: string;
    isDeleted?: boolean;
  }[];
};
