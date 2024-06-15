import ApiError from "@/server/middleware/error/ApiError";
import { ICourseBooking } from "./bookings.interface";
import CourseBooking from "./bookings.model";
import httpStatus from "http-status";

export async function createCourseBooking(
  data: ICourseBooking
): Promise<ICourseBooking | null> {
  try {
    const booking: ICourseBooking = new CourseBooking(data);
    const savedBooking = await booking.save();
    return savedBooking;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
}

export async function getAllCourseBookings(): Promise<ICourseBooking[]> {
  try {
    return await CourseBooking.find({});
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
}

export async function getCourseBookingById(
  id: string
): Promise<ICourseBooking | null> {
  try {
    return await CourseBooking.findById(id);
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
}

export async function updateCourseBooking(
  id: string,
  updatedData: Partial<ICourseBooking>
): Promise<ICourseBooking | null> {
  try {
    return await CourseBooking.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
}

export async function deleteCourseBooking(id: string): Promise<boolean> {
  try {
    const result = await CourseBooking.deleteOne({ _id: id });
    return result.deletedCount === 1;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
}
