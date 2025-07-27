import { ListPremieres } from "@features/listPremieres/ui/ListPremieres/ListPremieres";
import { Container } from "@shared/ui/Container/Container";
import styles from "./Premier.module.scss";

export const Premier = () => {
  return (
    <section className={styles.premier}>
      <Container>
        <h1 className={styles.premierTitle}>Ближайшие премьеры</h1>
        <ListPremieres/>
      </Container>
    </section>
  );
}