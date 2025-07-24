import styles from "./BurgerButton.module.scss";

interface IBurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const BurgerButton = ({
  isOpen,
  onClick,
  className,
}: IBurgerButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Бургер кнопка"
      className={`${styles.burgerButton} ${
        isOpen ? styles.burgerButtonActive : ""
      } ${className || ""}`}
      onClick={onClick}
    >
      <span
        className={`${styles.burgerButtonLine} ${
          isOpen ? styles.burgerButtonActiveLine : ""
        }`}
      />
    </button>
  );
};
