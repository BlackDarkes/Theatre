import { Container } from "../../../../shared/ui/Container/Container";
import ImageLogo from "../../assets/logo.svg?react";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <header>
      <Container>
        <ImageLogo />

        <NavBar />
      </Container>
    </header>
  );
};
