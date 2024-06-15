import type { NextApiRequest, NextApiResponse } from "next";
import ApiError from "@/server/middleware/error/ApiError";
import httpStatus from "http-status";
import {
  createCourseBooking,
  deleteCourseBooking,
  getAllCourseBookings,
  getCourseBookingById,
  updateCourseBooking,
} from "@/server/modules/bookings/booking.service";
import sendResponse from "@/server/middleware/sendResponse/sendResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        if (id) {
          const booking = await getCourseBookingById(id as string);
          sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            data: booking,
          });
        } else {
          const bookings = await getAllCourseBookings();
          sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            data: bookings,
          });
        }
      } catch (error) {
        sendResponse(res, {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          success: false,
        });
      }
      break;

    case "POST":
      try {
        const newBooking = await createCourseBooking(req.body);
        sendResponse(res, {
          statusCode: httpStatus.CREATED,
          success: true,
          data: newBooking,
        });
      } catch (error) {
        sendResponse(res, {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          success: false,
        });
      }
      break;

    case "PUT":
      try {
        const updatedBooking = await updateCourseBooking(
          id as string,
          req.body
        );
        if (updatedBooking) {
          sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            data: updatedBooking,
          });
        } else {
          throw new ApiError(httpStatus.NOT_FOUND, "Booking not found");
        }
      } catch (error) {
        sendResponse(res, {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          success: false,
        });
      }
      break;

    case "DELETE":
      try {
        const deleted = await deleteCourseBooking(id as string);
        if (deleted) {
          res.status(httpStatus.NO_CONTENT).end();
        } else {
          throw new ApiError(httpStatus.NOT_FOUND, "Booking not found");
        }
      } catch (error) {
        sendResponse(res, {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          success: false,
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
      res
        .status(httpStatus.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
  }
}
