import styles from "./BurgerButton.module.scss";

interface IBurgerButtonProps {
  isOpen: boolean;
}
  
export const BurgerButton = ({ isOpen }: IBurgerButtonProps) => {
  return (
    <button type="button" aria-label="Бургер кнопка" className={`${styles.burgerButton} ${isOpen ? styles.burgerButtonActive : ""}`}>
      <span className={`${styles.burgerButtonLine} ${isOpen ? styles.burgerButtonActiveLine : ""}`} />
    </button>
  );
}