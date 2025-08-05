import type { IInformation } from "@shared/types";
import styles from "./ElementDate.module.scss";

interface IElementDateProps {
  date: IInformation;
}

export const ElementDate = ({ date }: IElementDateProps) => {
  return (
    <li>
      <h3 className={styles.listItemTitle}>{date.title}</h3>
      <p className={styles.listItemBody}>{date.body}</p>
    </li>
  );
};
