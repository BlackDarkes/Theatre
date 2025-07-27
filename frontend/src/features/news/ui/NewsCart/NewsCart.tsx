import type { INews } from "@shared/types/news.interface";

interface INewsCartProps {
  news: INews;
}
  
export const NewsCart = ({ news }: INewsCartProps) => {
  return (
    <li>
      <img src={news.img} alt={`Новость ${news.title}`} loading="lazy" />

      <div>
        <div>
          <h2>{news.title}</h2>
          <time>{news.date}</time>
        </div>

        <p>{news.about}</p>
      </div>
    </li>
  );
}