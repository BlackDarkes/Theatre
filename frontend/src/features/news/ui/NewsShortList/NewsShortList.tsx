import { useAllNews } from "@features/news/api/getAllNews";
import styles from './NewsShortList.module.scss'
import { GenerateList } from "@features/news/module/generateList";

export const NewsShortList = () => {
  const { isLoading, error, news } = useAllNews();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!news || news.length === 0) return <p>No news found.</p>

  return (
    <ul className={styles.newsShort}>
      <GenerateList news={news} count={4} />
    </ul>
  );
}