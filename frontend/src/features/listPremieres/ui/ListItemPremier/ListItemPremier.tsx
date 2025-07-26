import type { IPremieres } from "@shared/types/premieres.interface";

interface IListItemPremierProps {
  premier: IPremieres;
}

export const ListItemPremier = ({ premier }: IListItemPremierProps) => {
  return (
    <li>
      <div
        style={{ backgroundImage: `url(${premier.img})` }}
        aria-label={`Постер премьеры ${premier.title}`}
      />

      <div>
        <div>
          <time>{premier.date}</time>
          <span>{premier.age}</span>
        </div>
        <div>
          <h3>{premier.title}</h3>
          <p>{premier.about}</p>
        </div>
      </div>
    </li>
  );
};
