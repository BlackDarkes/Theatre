import { Container, TextInfo } from "@shared/ui";
import { EventButtons } from "../EventButtons/EventButtons";
import { useState } from "react";
import { useParams } from "react-router";
import { useEventByTitle } from "@features/event/api/getEventByTitle";
import styles from './EventInfo.module.scss'

export const EventInfo = () => {
  const { title } = useParams();
  const { event } = useEventByTitle(`${title}`);

  const [type, setType] = useState("performance");

  const handleType = (selectedType: string) => {
    setType(selectedType);
  }

  return (
    <section className={styles.eventInfo}>
      <Container>
        <EventButtons handleType={handleType} type={type} />
        <TextInfo type={type} mainType="performance" texts={{ main: {id: 1, text: event?.about}, second: {id: 2, text: event?.actors} }} />
      </Container>
    </section>
  );
}