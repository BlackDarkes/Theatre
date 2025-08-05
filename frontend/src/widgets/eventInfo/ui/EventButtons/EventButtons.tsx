import styles from "./EventButtons.module.scss";

interface IEventButtonsProps {
  handleType: (selectedType: string) => void;
  type: string;
}

export const EventButtons = ({ handleType, type }: IEventButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <label
        htmlFor="performance"
        tabIndex={0}
        className={`${styles.buttonsLabel} ${
          type === "performance" ? styles.buttonsLabelActive : ""
        }`}
      >
        <input
          type="radio"
          name="performance"
          id="performance"
          value="performance"
          onChange={() => handleType("performance")}
          checked={type === "performance"}
        />
        О спектакле
      </label>
      <label
        htmlFor="group"
        tabIndex={0}
        className={`${styles.buttonsLabel} ${
          type === "group" ? styles.buttonsLabelActive : ""
        }`}
      >
        <input
          type="radio"
          name="group"
          id="group"
          value="group"
          onChange={() => handleType("group")}
          checked={type === "group"}
        />
        Коллектив
      </label>
    </div>
  );
};
