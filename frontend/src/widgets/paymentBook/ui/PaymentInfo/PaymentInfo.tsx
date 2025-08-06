import { Button } from "@shared/ui";
import styles from "./PaymentInfo.module.scss";

interface IPaymentInfoParams {
  time: string;
  handleTime: (changeTime: string) => void;
}

export const PaymentInfo = ({ time, handleTime }: IPaymentInfoParams) => {
  return (
    <div className={styles.paymentInfo}>
      <div className={styles.paymentInfoTime}>
        <p className={styles.paymentInfoTimeTitle}>
          Выберите дату показа премьеры
        </p>
        <div className={styles.paymentInfoTimeButtons}>
          <label
            htmlFor="time1"
            className={`${styles.paymentInfoTimeButton} ${
              time === "time1" ? styles.paymentInfoTimeButtonActive : ""
            }`}
          >
            <input
              type="radio"
              name="time"
              id="time1"
              value="time1"
              onChange={() => handleTime("time1")}
            />{" "}
            24 Мая, 18:30
          </label>
          <label
            htmlFor="time2"
            className={`${styles.paymentInfoTimeButton} ${
              time === "time2" ? styles.paymentInfoTimeButtonActive : ""
            }`}
          >
            <input
              type="radio"
              name="time"
              id="time2"
              value="time2"
              onChange={() => handleTime("time2")}
            />{" "}
            22 Июня, 18:30
          </label>
        </div>
      </div>

      <p className={styles.paymentInfoAbout}>
        Внимание! Выбранные вами билеты должны быть оплачены банковской картой в
        течение 30 минут. Обязательно распечатайте приобретенный вами
        электронный билет. Его необходимо предъявить при входе в театр.
      </p>

      <div className={styles.paymentInfoEventButtons}>
        <Button
          ariaLabel="Оплатить билет"
          className={styles.paymentInfoEventButton}
        >
          Оплатить билет
        </Button>
        <Button
          ariaLabel="Отменить"
          to="../"
          className={styles.paymentInfoEventButton}
        >
          Отменить
        </Button>
      </div>
    </div>
  );
};
