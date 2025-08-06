import { useEventByTitle } from "@features/event/api/getEventByTitle";
import { Container } from "@shared/ui";
import { useParams } from "react-router";
import styles from './PaymentPrice.module.scss'

export const PaymentPrice = () => {
  const { title } = useParams();
  const { event } = useEventByTitle(title);

  return (
    <section>
      <div style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}${event?.img})` }} className={styles.paymentPriceImage} />

      <Container className={styles.paymentPriceContainer}>
        <h2 className={styles.paymentPriceBuy}>Покупка билета</h2>
        <p className={styles.paymentPricePrice}>650 рублей</p>
      </Container>
    </section>
  );
}