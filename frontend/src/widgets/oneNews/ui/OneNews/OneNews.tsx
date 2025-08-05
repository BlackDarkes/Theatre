import { useNewsById } from "@features/news/api/getNewsById";
import { Container } from "@shared/ui";
import { useParams } from "react-router";
import { NewsCart } from "../NewsCart/NewsCart";
import styles from './OneNews.module.scss'

export const OneNews = () => {
  const { id } = useParams();
  const { news } = useNewsById(id);

  console.log(news)

  return (
    <section className={styles.oneNews}>
      <div style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}/${news?.img})`}} className={styles.oneNewsImage} />
      <Container>
        <NewsCart news={news} />
      </Container>
    </section>
  );
}