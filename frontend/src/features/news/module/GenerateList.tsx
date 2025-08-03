import type { INews } from "@shared/types/news.interface";
import { NewsCart } from "../ui/NewsCart/NewsCart";

interface IGenerateShortListProps {
  news: INews[];
  count?: number;
}

export const GenerateList = ({ news, count }: IGenerateShortListProps) => {
  if (!Array.isArray(news)) return <p>No news found.</p>;

  return count ? (
    news
      .filter((newsItem) => newsItem.id <= count)
      .map((newsItem) => <NewsCart key={newsItem.id} news={newsItem} />)
  ) : (
    news
      .map((newsItem) => <NewsCart key={newsItem.id} news={newsItem} />)
  )
};
