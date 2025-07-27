import type { INews } from "@shared/types/news.interface";
import { NewsCart } from "../ui/NewsCart/NewsCart";

interface IGenerateShortListProps {
  news: INews[];
}

export const generateShortList = ({ news }: IGenerateShortListProps) => {
  const generate = () => {
    news.map((news) => {
      if (news.id < 4) {
        return <NewsCart key={news.id} news={news} />;
      }
    });
  };
  
  return generate
};
