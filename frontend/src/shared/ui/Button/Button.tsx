import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  ariaLabel,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
