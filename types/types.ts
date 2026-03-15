export type Car = {
  id: string;
  year: number;    
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string; 
  engineSize: string;
  accessories: string[]; 
  functionalities: string[];
  rentalPrice: string;  
  rentalCompany: string;
  address: string;  
  rentalConditions: string[];
  mileage: number;
};

export interface CarQueryParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export interface CarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export type BrandsResponse = string[];