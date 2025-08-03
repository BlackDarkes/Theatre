import styles from "./ButtonsInfo.module.scss";

interface IButtonsInfoProps {
  handleType: (selectedType: string) => void;
  type: string;
}

export const ButtonsInfo = ({ handleType, type }: IButtonsInfoProps) => {
  return (
    <div className={styles.buttons}>
      <label
        htmlFor="mainType"
        className={`${styles.buttonsButton} ${
          type === "main" ? styles.buttonsButtonActive : ""
        }`}
        tabIndex={0}
      >
        <input
          type="radio"
          name="infoType"
          id="mainType"
          value="main"
          onChange={() => handleType("main")}
          checked={type === "main"}
          tabIndex={-1}
        />{" "}
        История города
      </label>
      <label
        htmlFor="secondType"
        className={`${styles.buttonsButton} ${
          type === "second" ? styles.buttonsButtonActive : ""
        }`}
        tabIndex={0}
      >
        <input
          type="radio"
          name="infoType"
          id="secondType"
          value="second"
          onChange={() => handleType("second")}
          tabIndex={-1}
        />{" "}
        Экскурсии по городу
      </label>
    </div>
  );
};
