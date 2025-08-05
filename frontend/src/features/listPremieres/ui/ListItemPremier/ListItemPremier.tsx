import type { IPremieres } from "@shared/types";
import styles from "./ListItemPremier.module.scss";
import { Link } from "react-router";

interface IListItemPremierProps {
  premier: IPremieres;
}

export const ListItemPremier = ({ premier }: IListItemPremierProps) => {
  return (
    <li className={styles.listItem}>
      <Link to={`/event/${premier.title}`}>
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_URL}${
              premier.img
            })`,
          }}
          aria-label={`Постер премьеры ${premier.title}`}
          className={styles.listItemBack}
        />

        <div className={styles.listItemInfo}>
          <div className={styles.listItemDate}>
            <time className={styles.listItemDateTime}>{premier.date}</time>
            <span className={styles.listItemDateAge}>{premier.age}</span>
          </div>
          <div>
            <h3 className={styles.listItemTitle}>{premier.title}</h3>
            <p className={styles.listItemAbout}>{premier.about}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
