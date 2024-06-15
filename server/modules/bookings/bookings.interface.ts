import { Document } from "mongoose";

export interface ICourseBooking extends Document {
  name: string;
  email: string;
  phone: string;
  price: string;
  payment: string;
  course: string;
  bookingDate: Date;
}
