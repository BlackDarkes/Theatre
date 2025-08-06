import { Container } from "@shared/ui";
import { PaymentInfo } from "../PaymentInfo/PaymentInfo";
import { PaymentScheme } from "../PaymentScheme/PaymentScheme";
import { useState } from "react";

export const PaymentBook = () => {
  const [time, setTime] = useState<string>("");

  const handleTime = (changeTime: string) => {
    setTime(changeTime);
  }

  return (
    <section>
      <Container>
        <PaymentInfo time={time} handleTime={handleTime} />
        <PaymentScheme />
      </Container>
    </section>
  );
};
