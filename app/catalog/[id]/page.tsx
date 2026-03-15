import { fetchCarById } from "@/lib/api/serverApi";
import RentalForm from "@/components/RentalForm/RentalForm";
import { notFound } from "next/navigation";
import css from "./CarDetails.module.css";
import Icon from "@/components/Icon/Icon";

interface CarDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CarDetailsPage({ params }: CarDetailsProps) {
  const { id } = await params;

  try {
    const car = await fetchCarById(id);
    if (!car) return notFound();

    const addressParts = car.address.split(", ");
    const city = addressParts[1];
    const country = addressParts[2];

    return (
      <section className="container">
        <div className={css.gridContainer}>
          <div className={css.imageContainer}>
            <img
              src={car.img}
              alt={`${car.brand} ${car.model}`}
              className={css.mainImage}
            />
          </div>

          <div className={css.formContainer}>
            <RentalForm />
          </div>

          <div className={css.contentWrapper}>
            <div className={css.details}>
              <div className={`${css.textWrapper} ${css.detailsHeader}`}>
                <h2>
                  {car.brand} {car.model}, {car.year}
                </h2>
                <p className="text-gray-medium">Id: {car.id.slice(0, 4)}</p>
              </div>

              <div className={`${css.textWrapper} ${css.detailsLocation}`}>
                <Icon id="location" className={`icon ${css.icon} `} />
                <p className={`text-main ${css.location}`}>
                  {" "}
                  {city}, {country}
                </p>
                <span className={css.conditionItem}>
                  Mileage:{" "}
                  <span className={css.accentText}>
                    {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
                  </span>
                </span>
              </div>
              <h2 className={`text-accent ${css.price}`}>${car.rentalPrice}</h2>
              <p className='text-main'> {car.description}</p>
            </div>
            
<div className={css.infoWrapper}>
  <div className={css.section}>
    <h3 className={css.sectionTitle}>Rental Conditions:</h3>
    <ul className={css.list}>
      {car.rentalConditions.map((condition, index) => (
        <li key={index} className={css.listItem}>
          <Icon id="check-circle" className={css.icon} />
          <span className={css.itemText}>{condition}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className={css.section}>
    <h3 className={css.sectionTitle}>Car Specifications:</h3>
    <ul className={css.list}>
      <li className={css.listItem}>
        <Icon id="calendar" className={css.icon} />
        <span className={css.itemText}>Year: {car.year}</span>
      </li>
      <li className={css.listItem}>
        <Icon id="car" className={css.icon} />
        <span className={css.itemText}>Type: {car.type}</span>
      </li>
      <li className={css.listItem}>
        <Icon id="fuel-pump" className={css.icon} />
        <span className={css.itemText}>Fuel Consumption: {car.fuelConsumption}</span>
      </li>
      <li className={css.listItem}>
        <Icon id="gear" className={css.icon} />
        <span className={css.itemText}>Engine Size: {car.engineSize}</span>
      </li>
    </ul>
  </div>

  <div className={css.section}>
    <h3 className={css.sectionTitle}>Accessories and functionalities:</h3>
    <ul className={css.list}>
      {[...car.accessories, ...car.functionalities].map((item, index) => (
        <li key={index} className={css.listItem}>
          <Icon id="check-circle" className={css.icon} />
          <span className={css.itemText}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return notFound();
  }
}
