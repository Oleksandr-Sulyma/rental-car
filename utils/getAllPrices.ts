import { fetchCars } from "@/lib/api/clientApi";
import type { CarQueryParams } from "@/types/types";

export const getAllPrices = async (): Promise<string[]> => {
  const data = await fetchCars({});
  const pricesSet = new Set<number>();

  data.cars.forEach((car) => {
    pricesSet.add(Number(car.rentalPrice));
  });

  const pricesArray = Array.from(pricesSet).sort((a, b) => a - b);
  return pricesArray.map(String);
};