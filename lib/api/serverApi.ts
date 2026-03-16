import { nextServer } from './api';
import { AxiosError } from "axios";
import type { Car } from '@/types/types';

export const fetchCarById = async (id: string): Promise<Car | null> => {
    const { data } = await nextServer.get<Car>(`/catalog/${id}`);
    return data;
  
};