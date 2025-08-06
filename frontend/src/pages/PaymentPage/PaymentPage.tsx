import { Header } from "@widgets/header";
import { PaymentBook } from "@widgets/paymentBook";
import { PaymentPrice } from "@widgets/paymentPrice";

export const PaymentPage = () => {
  return (
    <>
      <Header />
      <PaymentPrice />
      <PaymentBook />
    </>
  );
};
