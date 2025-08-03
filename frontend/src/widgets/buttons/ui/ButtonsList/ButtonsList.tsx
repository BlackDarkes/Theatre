import { Button } from "@shared/ui";
import { NAME_BUTTONS } from "@widgets/buttons/constants/listNameButtons";
import styles from "./ButtonsList.module.scss";

export const ButtonsList = () => {
  return (
    <ul className={styles.list}>
      {NAME_BUTTONS.map((name, index) => {
        return <Button key={index} ariaLabel={name} to={"/about"} className={styles.listLink}>{name}</Button>
      })}
    </ul>
  );
}