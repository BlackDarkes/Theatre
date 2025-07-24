import type { ReactNode } from "react";
import styles from './BurgerMenu.module.scss'

interface IBurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
  
export const BurgerMenu = ({ isOpen, children }: IBurgerMenuProps) => {
  return (
    <div className={`${isOpen ? styles.active : styles.burgerMenu}`}>
      {isOpen && (
        <nav className={styles.burgerMenuList}>
          {children}
        </nav>
      )}
    </div>
  );
}