"use client";

import Link from "next/link";
import Image from "next/image";
import { Car } from "@/types/types";
import css from "./CarCard.module.css";
import IconHeart from "../Icon/IconHeart";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const addressParts = car.address.split(", ");
  const city = addressParts[1] ?? "";
  const country = addressParts[2] ?? "";

  return (
    <div className={css.carCard}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          width={276}
          height={268}
          className={css.image}
        />

        <div className={`${css.favoriteBtn} favorite-wrapper`}>
          <IconHeart id={car.id} />
        </div>
      </div>

      <div className={css.header}>
        <h4 className={`text-main ${css.title}`}>
          {car.brand} <span className="text-accent">{car.model}</span>,{" "}
          {car.year}
        </h4>

        <h4 className={`text-main ${css.price}`}>${car.rentalPrice}</h4>
      </div>

      <div className={css.info}>
        <p className="text-secondary">
          {city} | {country} | {car.rentalCompany}
        </p>

        <p className="text-secondary">
          {car.type} | {car.mileage.toLocaleString("en-US").replace(",", " ")}{" "}
          km
        </p>
      </div>

      <Link href={`/catalog/${car.id}`} className={`btn btn-main ${css.link}`}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
