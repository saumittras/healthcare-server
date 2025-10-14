import { Request, Response } from "express";
import pick from "../../helper/pick";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IJWTPayload } from "./../../types/common";
import { ScheduleService } from "./schedule.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ScheduleService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Schedule has created successfully!",
    data: result,
  });
});

const schedulesForDoctor = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const filters = pick(req.query, ["startDateTime", "endDateTime"]);

    const user = req.user;
    const result = await ScheduleService.schedulesForDoctor(
      user as IJWTPayload,
      filters,
      options
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Schedule has created successfully!",
      data: result.data,
      meta: result.metaData,
    });
  }
);

const deleteScheduleFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ScheduleService.deleteScheduleFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Schedule has deleted successfully!",
    data: result,
  });
});

export const ScheduleController = {
  insertIntoDB,
  schedulesForDoctor,
  deleteScheduleFromDB,
};
