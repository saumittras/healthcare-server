import z from "zod";

const createPatientValidationSchema = z.object({
  password: z.string(),
  patient: z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().nonempty("Email is required"),
    profilePhoto: z.string().optional(),
    address: z.string().optional(),
  }),
});

const createAdminValidationSchema = z.object({
  password: z.string({
    error: "Password is required",
  }),
  admin: z.object({
    name: z.string({
      error: "Name is required!",
    }),
    email: z.string({
      error: "Email is required!",
    }),
    contactNumber: z.string({
      error: "Contact Number is required!",
    }),
  }),
});

const createDoctorValidationSchema = z.object({
  password: z.string({
    error: "Password is required",
  }),
  doctor: z.object({
    name: z.string({
      error: "Name is required!",
    }),
    email: z
      .string({
        error: "Email is required!",
      })
      .optional(),
    contactNumber: z
      .string({
        error: "Contact Number is required!",
      })
      .optional(),
    address: z.string().optional(),
    registrationNumber: z
      .string({
        error: "Reg number is required",
      })
      .optional(),
    experience: z.number().optional(),

    appointmentFee: z
      .number({
        error: "appointment fee is required",
      })
      .optional(),
    qualification: z
      .string({
        error: "quilification is required",
      })
      .optional(),
    currentWorkingPlace: z
      .string({
        error: "Current working place is required!",
      })
      .optional(),
    designation: z
      .string({
        error: "Designation is required!",
      })
      .optional(),
  }),
});

export const UserValidation = {
  createPatientValidationSchema,
  createAdminValidationSchema,
  createDoctorValidationSchema,
};
