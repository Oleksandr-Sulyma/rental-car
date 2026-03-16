import { nextServer } from './api';
import type { Car,CarQueryParams, CarsResponse, BrandsResponse  } from '@/types/types';

export const fetchCars= async (params: CarQueryParams): Promise<CarsResponse> => {
  const { data } = await nextServer.get<CarsResponse>('/catalog', {
    params: { 
      page: 1,
      limit: 12,
      ...params },
  });
  return data;
};



export const fetchBrands = async (): Promise<BrandsResponse> => {
  const {data} = await nextServer.get<BrandsResponse>('/brands');
  return data;
}

