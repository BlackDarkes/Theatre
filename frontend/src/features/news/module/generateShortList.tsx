import type { INews } from "@shared/types/news.interface";
import { NewsCart } from "../ui/NewsCart/NewsCart";

interface IGenerateShortListProps {
  news: INews[];
}

export const generateShortList = ({ news }: IGenerateShortListProps) => {
  if (!Array.isArray(news)) return <p>No news found.</p>;

  return news
    .filter((newsItem) => newsItem.id <= 4)
    .map((newsItem) => <NewsCart key={newsItem.id} news={newsItem} />);
};
