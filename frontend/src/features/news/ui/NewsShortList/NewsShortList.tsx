import { useAllNews } from "@features/news/api/getAllNews";
import { generateShortList } from "@features/news/module/generateShortList";
import styles from './NewsShortList.module.scss'

export const NewsShortList = () => {
  const { isLoading, error, news } = useAllNews();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!news || news.length === 0) return <p>No news found.</p>

  const newsList = generateShortList({ news })

  return (
    <ul className={styles.newsShort}>
      {newsList}
    </ul>
  );
}