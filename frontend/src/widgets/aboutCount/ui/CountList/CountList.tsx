import type { IInformation } from "@shared/types";
import styles from "./CountList.module.scss";

interface ICountListProps {
  information: IInformation[];
}

export const CountList = ({ information }: ICountListProps) => {
  return (
    <ul className={styles.list}>
      {information.map((info) => (
        <li key={info.id}>
          <h3 className={styles.listTitle}>{info.title}</h3>
          <p className={styles.listBody}>{info.body}</p>
        </li>
      ))}
    </ul>
  );
};
