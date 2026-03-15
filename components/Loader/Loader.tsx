"use client";

import { CircleLoader } from "react-spinners";
import css from "./Loader.module.css";

type Props = {
  loading?: boolean;
  size?: number;
};

const Loader = ({ loading = true, size = 60 }: Props) => {
  return (
    <div className={css.loaderWrapper}>
      <CircleLoader
        color="var(--button)" 
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;