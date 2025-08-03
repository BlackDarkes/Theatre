import { NewsAllList } from "@features/news";
import { Container } from "@shared/ui";
import styles from './AllNews.module.scss'

export const AllNews = () => {
  return (
    <section className={styles.allNews}>
      <Container>
        <h2 className={styles.allNewsTitle}>Новости театра</h2>
        <NewsAllList />
      </Container>
    </section>
  );
}