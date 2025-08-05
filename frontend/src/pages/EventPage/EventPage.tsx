import { EventDate } from "@widgets/eventDate/ui/EventDate/EventDate";
import { EventInfo } from "@widgets/eventInfo/ui/EventInfo/EventInfo";
import { Header } from "@widgets/header";

export const EventPage = () => {
  return (
    <>
      <Header />
      <EventDate />
      <EventInfo />
    </>
  );
};
