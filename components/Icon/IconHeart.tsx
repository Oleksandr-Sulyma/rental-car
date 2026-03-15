import { useState, useEffect } from "react";
import css from "./Icon.module.css";
import Icon from "./Icon";

type Props = {
  id: string;
};

const STORAGE_KEY = "favoriteCars";

export default function IconHeart({ id }: Props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setIsActive(saved.includes(id));
  }, [id]);

  const handleClick = () => {
    const saved: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const isCurrentlyActive = saved.includes(id);
    
    let newSaved;
    if (isCurrentlyActive) {
      newSaved = saved.filter((item) => item !== id);
    } else {
      newSaved = [...saved, id];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSaved));
    setIsActive(!isCurrentlyActive);
  };

  const iconStateId = isActive ? "heart-filled" : "heart-outline";

  return (
    <Icon
      id={iconStateId}
      className={`${css["icon-heart"]} ${isActive ? css.active : ""}`}
      onClick={handleClick}
    />
  );
}