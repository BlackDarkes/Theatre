import { COUNT_INFO } from "@widgets/aboutCount/constants/countInfo";
import { CountList } from "../CountList/CountList";
import { Container } from "@shared/ui";
import { Link } from "react-router";
import styles from './AboutCount.module.scss'

export const AboutCount = () => {
  return (
    <section className={styles.aboutCount}>
      <Container className={styles.aboutCountContainer}>
        <CountList information={COUNT_INFO} />
        <Link to={"../"} className={styles.aboutCountLink}>Вернуться</Link>
      </Container>
    </section>
  );
}