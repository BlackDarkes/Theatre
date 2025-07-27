import { NewsShortList } from "@features/news";
import { Container } from "@shared/ui/Container/Container";
import styles from './NewsShort.module.scss'

export const NewsShort = () => {
  return (
    <section className={styles.newsBlock}>
      <Container>
        <h1 className={styles.newsBlockTitle}>Новости театра</h1>

        <NewsShortList/>
      </Container>
    </section>
  );
}