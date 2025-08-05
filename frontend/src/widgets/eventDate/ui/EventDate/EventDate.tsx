import { useEventByTitle } from "@features/event/api/getEventByTitle";
import { Button, Container } from "@shared/ui";
import { DATE_INFORMATION } from "@widgets/eventDate/constants/dateInformation";
import { GenerateDate } from "@widgets/eventDate/modules/GenerateDate";
import { useParams } from "react-router";
import styles from "./EventDate.module.scss";

export const EventDate = () => {
  const { title } = useParams();
  const { event } = useEventByTitle(title || null);

  return (
    <section>
      <div style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}${event?.img})`}} className={styles.eventDateImage} aria-label={`Обложка ${event?.title}`} />
      <Container>
        <div className={styles.eventDateInfo}>
          <ul className={styles.eventDateList}>
            <GenerateDate date={DATE_INFORMATION} />
          </ul>
          <Button ariaLabel="Купить билет" to={"./payments"} className={styles.eventDateButton}>Купить билет</Button>
        </div>
      </Container>
    </section>
  );
};
