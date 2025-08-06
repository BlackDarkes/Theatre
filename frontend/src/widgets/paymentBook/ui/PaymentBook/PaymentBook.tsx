import { Container } from "@shared/ui";
import { PaymentInfo } from "../PaymentInfo/PaymentInfo";
import { PaymentScheme } from "../PaymentScheme/PaymentScheme";
import { useState } from "react";
import styles from './PaymentBook.module.scss'

export const PaymentBook = () => {
  const [time, setTime] = useState<string>("");

  const handleTime = (changeTime: string) => {
    setTime(changeTime);
  }

  return (
    <section className={styles.paymentBook}>
      <Container className={styles.paymentBookContainer}>
        <PaymentInfo time={time} handleTime={handleTime} />
        <PaymentScheme />
      </Container>
    </section>
  );
};
