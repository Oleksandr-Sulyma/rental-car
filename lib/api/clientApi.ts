import { api } from './api';
import type { Car,CarQueryParams, CarsResponse, BrandsResponse  } from '@/types/types';

export const fetchCars= async (params: CarQueryParams): Promise<CarsResponse> => {
  const { data } = await api.get<CarsResponse>('/cars', {
    params: { 
      limit: String(12),
      ...params },
  });
  return data;
};



export const fetchBrands = async (): Promise<BrandsResponse> => {
  const {data} = await api.get<BrandsResponse>('/brands');
  return data;
}
