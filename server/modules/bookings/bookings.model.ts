import mongoose, { Schema } from "mongoose";
import { ICourseBooking } from "./bookings.interface";

const CourseBookingSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  price: { type: String, required: true },
  payment: { type: String, required: true },
  course: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.models.CourseBooking ||
  mongoose.model<ICourseBooking>("CourseBooking", CourseBookingSchema);
