import { Link } from "react-router";
import styles from './NavBar.module.scss';

interface INavBarProps {
  tabIndex: number;
  className?: string;
}

export const NavBar = ({ tabIndex, className }: INavBarProps) => {
  return (
    <ul className={`${styles.navigationList} ${className || ""}`}>
      <li><Link to={"/"} tabIndex={tabIndex} className={styles.navigationListLink}>Главная</Link></li>
      <li><Link to={"/"} tabIndex={tabIndex} className={styles.navigationListLink}>Афиша</Link></li>
      <li><Link to={"/news"} tabIndex={tabIndex} className={styles.navigationListLink}>Новости</Link></li>
      <li><Link to={"/about"} tabIndex={tabIndex} className={styles.navigationListLink}>О театре</Link></li>
    </ul>
  );
}