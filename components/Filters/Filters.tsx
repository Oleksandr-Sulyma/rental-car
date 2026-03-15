"use client";

import { useEffect, useState } from "react";
import { carsStore } from "@/lib/store/carsStore";
import { fetchBrands } from "@/lib/api/clientApi";
import { getAllPrices } from "@/utils/getAllPrices";
import Select from "@/styles/components/Select/Select";
import css from "./Filters.module.css";

export default function Filters() {
  const setFilters = carsStore((state) => state.setFilters);
  const [brands, setBrands] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const [brandsData, pricesData] = await Promise.all([
        fetchBrands(),
        getAllPrices(),
      ]);
      setBrands(brandsData);
      setPrices(pricesData);
    };
    loadData();
  }, []);

  const formatNumber = (value: string) => {
    if (!value) return "";
    const number = value.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (value: string, setter: (val: string) => void) => {
    const cleanValue = value.replace(/\D/g, "");
    setter(cleanValue);
  };

  const handleSearch = () => {
    setFilters({
      brand: brand || undefined,
      rentalPrice: price || undefined,
      minMileage: from || undefined,
      maxMileage: to || undefined,
    });
  };

  return (
    <section className={`container ${css.filtersContainer}`}>
      <div style={{ width: "100%", maxWidth: "204px" }}>
        <Select
          label="Car brand"
          placeholder="Choose a brand"
          options={[
            ...brands.map((b) => ({ value: b, label: b })),
            { value: "", label: "All brands" },
          ]}
          value={brand}
          onChange={setBrand}
          dropdownHeight="272px"
        />
      </div>

      <div style={{ width: "100%", maxWidth: "196px" }}>
        <Select
          label="Price / 1hr"
          placeholder="Choose a price"
          options={prices.map((p) => ({ value: p, label: p }))}
          value={price}
          onChange={setPrice}
          renderInputLabel={(val) => `To $${val}`}
          dropdownHeight="188px"
        />
      </div>

      <div className={css.mileageGroup}>
        <span className={`text-secondary ${css.label}`}>Car mileage / km</span>
        <div className={css.inputsWrapper}>
          <div className={css.inputWithPrefix}>
            <span className={`text-main ${css.prefix}`}>From</span>
            <input
              className={`text-main ${css.mileageInputLeft}`}
              type="text"
              value={formatNumber(from)}
              onChange={(e) => handleInputChange(e.target.value, setFrom)}
            />
          </div>
          <div className={css.inputWithPrefix}>
            <span className={`text-main ${css.prefix}`}>To</span>
            <input
              className={`text-main ${css.mileageInputRight}`}
              type="text"
              value={formatNumber(to)}
              onChange={(e) => handleInputChange(e.target.value, setTo)}
            />
          </div>
        </div>
      </div>

      <button
        className="btn btn-search"
        onClick={handleSearch}
        style={{ height: "44px" }}
      >
        Search
      </button>
    </section>
  );
}