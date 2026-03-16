"use client";

import { useEffect } from "react";
import { carsStore } from "@/lib/store/carsStore";
import Filters from "@/components/Filters/Filters";
import CarCard from "@/components/CarCard/CarCard";
import Loader from "@/components/Loader/Loader";
import css from "./Catalog.module.css";

export default function CatalogClient() {
  const cars = carsStore((s) => s.cars);
  const setFilters = carsStore((s) => s.setFilters);
  const loadMore = carsStore((s) => s.loadMore);
  const page = carsStore((s) => s.page);
  const totalPages = carsStore((s) => s.totalPages);
  const isLoading = carsStore((s) => s.isLoading);

  useEffect(() => {
    setFilters({});
  }, [setFilters]);

  const handleLoadMore = async () => {
    const currentScrollY = window.scrollY;

    await loadMore();

    window.scrollTo({
      top: currentScrollY,
      behavior: "auto",
    });
  };

  const isInitialLoading = isLoading && cars.length === 0;
  const hasCars = cars.length > 0;
  const showLoadMore = page < totalPages && hasCars;

  return (
    <section className={`container ${css.container}`}>
      <Filters />

      {isInitialLoading ? (
        <div className={css.loaderWrapper}>
          <Loader size={80} />
        </div>
      ) : (
        <>
          {hasCars ? (
            <div className={css.carsGrid}>
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className={css.noResultsWrapper}>
              <h3>No cars found</h3>

              <button className="btn btn-main" onClick={() => setFilters({})}>
                Reset Filters
              </button>
            </div>
          )}

          {showLoadMore && (
            <div className={css.loadMoreContainer}>
              {isLoading ? (
                <Loader size={40} />
              ) : (
                <button className="btn btn-loader" onClick={handleLoadMore}>
                  Load More
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}
