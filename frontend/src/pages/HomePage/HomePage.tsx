import { InfoTheatre } from "@widgets/infoTheatre";
import { Header } from "@widgets/header";
import { Hero } from "@widgets/hero";
import { Premier } from "@widgets/premieres/ui/Premier/Premier";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <InfoTheatre />
      <Premier />
    </>
  );
};
