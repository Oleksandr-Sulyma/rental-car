import { api } from './api';
import { AxiosError } from "axios";
import type { Car } from '@/types/types';

export const fetchCarById = async (id: string): Promise<Car | null> => {
  try {
    const { data } = await api.get<Car>(`/cars/${id}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) return null;
    throw error;
  }
};