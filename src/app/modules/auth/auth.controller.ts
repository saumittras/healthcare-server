import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  const { accessToken, refressToken, needPasswordChange } = result;

  res.cookie("accessToken", accessToken, {
    secure: true,
    httpOnly: true,
    sameSite: true,
    maxAge: 1000 * 3600,
  });

  res.cookie("refressToken", refressToken, {
    secure: true,
    httpOnly: true,
    sameSite: true,
    maxAge: 1000 * 3600 * 24 * 30,
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User Legged successfully!",
    data: {
      needPasswordChange,
    },
  });
});

export const AuthController = {
  login,
};
