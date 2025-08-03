import styles from './ButtonsInfo.module.scss'

interface IButtonsInfoProps {
  handleType: (selectedType: string) => void;
  type: string;
}

export const ButtonsInfo = ({ handleType, type }: IButtonsInfoProps) => {
  return (
    <div className={styles.buttons}>
      <p className={`${styles.buttonsButton} ${type === "main" ? styles.buttonsButtonActive : ""}`}>
        <input
          type="radio"
          name="infoType"
          id="mainType"
          value="main"
          onChange={() => handleType("main")}
          checked={type === "main"}
        />{" "}
        <label htmlFor="mainType">История города</label>
      </p>
      <p className={`${styles.buttonsButton} ${type === "second" ? styles.buttonsButtonActive : ""}`}>
        <input
          type="radio"
          name="infoType"
          id="secondType"
          value="second"
          onChange={() => handleType("second")}
        />{" "}
        <label htmlFor="secondType">Экскурсии по городу</label>
      </p>
    </div>
  );
};
