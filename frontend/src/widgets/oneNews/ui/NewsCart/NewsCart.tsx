import type { INews } from "@shared/types";
import { GenerateInfo } from "@shared/modules";
import { INFORMATION } from "@widgets/oneNews/constants/information";
import styles from "./NewsCart.module.scss";

interface INewsCartProps {
  news: INews | undefined;
}

export const NewsCart = ({ news }: INewsCartProps) => {
  if (!news) return null;

  return (
    <div className={styles.newsCart}>
      <div className={styles.newsCartTitle}>
        <time className={styles.newsCartDate}>{news.date}</time>
        <h3 className={styles.newsCartName}>{news.title}</h3>
      </div>
      <div>
        <GenerateInfo texts={INFORMATION} classText={styles.newsCartText} />
      </div>
    </div>
  );
};
