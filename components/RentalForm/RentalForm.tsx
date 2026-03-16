"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale/en-GB";
import type { Car } from "@/types/types"; 

import "react-datepicker/dist/react-datepicker.css";
import css from "./RentalForm.module.css";

registerLocale("en-GB", enGB);

interface RentalFormProps {
  car: Car;
}

const rentalSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  bookingDate: z
    .any()
    .refine((val) => val instanceof Date, "Date is required"),
  comment: z.string().optional(),
});

type RentalFormData = {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment?: string;
};

export default function RentalForm({ car }: RentalFormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RentalFormData>({
    resolver: zodResolver(rentalSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<RentalFormData> = (data) => {
    console.log("Order Data:", data, "for car:", car.id);
    toast.success("Rental successful! Our manager will contact you soon.");
    reset();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.header}>
        <h3 className={`text-main ${css.title}`}>Book your car now</h3>
        <p className={`text-secondary ${css.text}`}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputsWrapper}>
          <div className={`input-group ${errors.name ? "has-error" : ""}`}>
            <input
              {...register("name")}
              type="text"
              placeholder="Name*"
              className="input text-main"
            />
            <span className="error-text">{errors.name?.message}</span>
          </div>

          <div className={`input-group ${errors.email ? "has-error" : ""}`}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email*"
              className="input text-main"
            />
            <span className="error-text">{errors.email?.message}</span>
          </div>

          <div className={`input-group ${errors.bookingDate ? "has-error" : ""}`}>
            <Controller
              control={control}
              name="bookingDate"
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date: Date | null) => field.onChange(date)}
                  placeholderText="Booking date"
                  className="input text-main"
                  dateFormat="MMMM d, yyyy"
                  locale="en-GB"
                  minDate={new Date()}
                  isClearable
                  autoComplete="off"
                />
              )}
            />
            <span className="error-text">
              {errors.bookingDate?.message ? String(errors.bookingDate.message) : ""}
            </span>
          </div>

          <div className="input-group">
            <textarea
              {...register("comment")}
              placeholder="Comment"
              className="textarea text-main"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-search">
          Send
        </button>
      </form>
    </div>
  );
}