import css from "./Icon.module.css";

type Props = {
  id: string;
  className?: string;
  onClick?: () => void;
};

export default function Icon({ id, className, onClick }: Props) {
  return (
    <svg
      className={`${css.icon} ${className || ""}`}
      onClick={onClick}
    >
      <use href={`/icons/sprite.svg#icon-${id}`} />
    </svg>
  );
}