"use client";

import { useEffect, useRef } from "react";
import { carsStore } from "@/lib/store/carsStore";
import Filters from "@/components/Filters/Filters";
import CarCard from "@/components/CarCard/CarCard";
import { CircleLoader } from "react-spinners";
import css from "./Catalog.module.css";

export default function CatalogPage() {
  const { cars, setFilters, loadMore, page, totalPages, isLoading } = carsStore();
  
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      await setFilters({});
    };
    init();
  }, [setFilters]);

  const handleLoadMore = async () => {
    const currentScrollY = window.scrollY;
    await loadMore();
    window.scrollTo({
      top: currentScrollY,
      behavior: "instant",
    });
  };

  return (
    <section className={`container ${css.container}`}>
      <Filters />

      {isLoading && cars.length === 0 ? (
        <div className={css.loaderWrapper}>
          <CircleLoader color="#3470ff" size={80} />
        </div>
      ) : (
        <>
          {cars.length > 0 ? (
            <div className={css.carsGrid}>
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : !isLoading && (
            <div className={css.noResultsWrapper}>
              <h3>No cars found</h3>
              <button className="btn btn-main" onClick={() => setFilters({})}>
                Reset Filters
              </button>
            </div>
          )}

          {page < totalPages && cars.length > 0 && (
            <div className={css.loadMoreContainer}>
              {isLoading ? (
                <CircleLoader color="#3470ff" size={40} />
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