import type { INews } from "@shared/types/news.interface";
import { Link } from "react-router";
import styles from './NewsCart.module.scss'

interface INewsCartProps {
  news: INews;
}
  
export const NewsCart = ({ news }: INewsCartProps) => {
  return (
    <li className={styles.news}>
      <img src={`${import.meta.env.VITE_API_URL}/${news.img}`} alt={`Новость ${news.title}`} className={styles.newsImage} loading="lazy" />

      <div>
        <div className={styles.newsTitle}>
          <h2 className={styles.newsTitleLink}><Link to={`/news/${news.id}`}>{news.title}</Link></h2>
          <time className={styles.newsTitleTime}>{news.date}</time>
        </div>

        <p className={styles.newsAbout}>{news.about}</p>
      </div>
    </li>
  );
}