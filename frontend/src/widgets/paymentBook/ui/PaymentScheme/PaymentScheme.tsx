import { COUNT_SCHEME } from "@widgets/paymentBook/constants/countsScheme";
import { GenerateScheme } from "@widgets/paymentBook/modules/GenerateScheme";
import styles from './PaymentScheme.module.scss'

export const PaymentScheme = () => {
  return (
    <div className={styles.paymentScheme}>
      <GenerateScheme scheme={COUNT_SCHEME} classScheme={styles} />
    </div>
  );
}