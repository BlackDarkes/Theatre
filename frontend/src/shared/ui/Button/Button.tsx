import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router";

interface IButtonProps {
  children: ReactNode;
  ariaLabel: string;
  to: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  ariaLabel,
  to,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`${styles.button} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
