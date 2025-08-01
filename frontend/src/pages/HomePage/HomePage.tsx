import { InfoTheatre } from "@widgets/infoTheatre";
import { Header } from "@widgets/header";
import { Hero } from "@widgets/hero";
import { Premier } from "@widgets/premieres/ui/Premier/Premier";
import { Buttons } from "@widgets/buttons/ui/Buttons/Buttons";
import { NewsShort } from "@widgets/newsBlock/ui/NewsShort/NewsShort";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <InfoTheatre />
      <Premier />
      <Buttons />
      <NewsShort />
    </>
  );
};
