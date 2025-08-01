import { Container } from "@shared/ui/Container/Container";
import { ButtonsList } from "../ButtonsList/ButtonsList";
import styles from "./Buttons.module.scss";

export const Buttons = () => {
  return (
    <section className={styles.buttons}>
      <Container>
        <ButtonsList />
      </Container>
    </section>
  );
};
