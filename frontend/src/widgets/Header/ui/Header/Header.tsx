import ImageLogo from "../../assets/logo.svg";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "@shared/ui";
import styles from "./Header.module.scss";
import { BurgerButton, BurgerMenu, useBurgerMenu } from "../../../burgerMenu";

export const Header = () => {
  const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogoBlock}>
          <img src={ImageLogo} alt="Логотип" />

          <h1 className={styles.headerLogoSlogan}>Казанский ТЮЗ</h1>
        </div>

        <nav className={styles.headerList}>
          <NavBar tabIndex={1} />
        </nav>

        <BurgerButton
          isOpen={isOpen}
          onClick={toggleMenu}
          className={styles.headerClose}
        />
        <BurgerMenu isOpen={isOpen} onClose={closeMenu}>
          <NavBar tabIndex={-1} className={styles.headerBurgerList} />
        </BurgerMenu>
      </Container>
    </header>
  );
};
