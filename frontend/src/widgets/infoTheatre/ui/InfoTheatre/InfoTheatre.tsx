import { Container } from "@shared/ui/Container/Container";
import { TheatreInfo } from "@shared/ui/TheatreInfo/TheatreInfo";
import { Link } from "react-router";
import styles from "./InfoTheatre.module.scss";

export const InfoTheatre = () => {
  return (
    <section className={styles.infoTheatre}>
      <Container className={styles.infoTheatreContainer}>
        <TheatreInfo className="" classTitle={styles.infoTheatreTitle} classText={styles.infoTheatreText} />

        <Link to={"/about"} className={styles.infoTheatreLink}>Узнать подробнее</Link>
      </Container>
    </section>
  );
}