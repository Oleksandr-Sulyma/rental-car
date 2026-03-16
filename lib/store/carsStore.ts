import { create } from "zustand";
import { fetchCars } from "../api/clientApi";
import type { Car, CarQueryParams } from "@/types/types";
import toast from "react-hot-toast";

interface CarsState {
  cars: Car[];
  filters: CarQueryParams;
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  setFilters: (filters: CarQueryParams) => Promise<void>;
  loadMore: () => Promise<void>;
}

export const carsStore = create<CarsState>((set, get) => ({
  cars: [],
  filters: {} as CarQueryParams,
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,

  setFilters: async (filters) => {
    try {
      set({ isLoading: true, error: null, cars: [], page: 1 });

      const data = await fetchCars({ ...filters, page: "1" });

      set({
        filters,
        cars: data.cars,
        page: 1,
        totalPages: data.totalPages,
        isLoading: false,
      });
    } catch (error) {
      const message = "Failed to load cars. Please try again later.";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  loadMore: async () => {
    const { page, filters, cars, totalPages, isLoading } = get();

    if (isLoading || page >= totalPages) return;

    try {
      set({ isLoading: true, error: null });
      const nextPage = page + 1;

      const data = await fetchCars({ ...filters, page: String(nextPage) });

      set({
        cars: [...cars, ...data.cars],
        page: nextPage,
        isLoading: false,
      });
    } catch (error) {
      const message = "Could not load more cars.";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },
}));