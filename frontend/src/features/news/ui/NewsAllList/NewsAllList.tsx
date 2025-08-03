import { useAllNews } from "@features/news/api/getAllNews";
import { GenerateList } from "@features/news/module/generateList";
import styles from './NewsAllList.module.scss'

export const NewsAllList = () => {
  const { isLoading, error, news } = useAllNews();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!news || news.length === 0) return <p>No news found.</p>;

  return (
    <ul className={styles.newsAll}>
      <GenerateList news={news} />
    </ul>
  );
};
