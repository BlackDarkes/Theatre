import { useRef } from "react";
import { HeroSlider } from "../../../../features/heroSlider";
import { Container } from "../../../../shared/ui/Container/Container";

export const Hero = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <HeroSlider sliderRef={sliderRef} />
      <Container>
        <h2>Казанский театр юного зрителя</h2>

        <div>
          <button type="button">&lt;</button><button type="button">&gt;</button>
        </div>
      </Container>
    </section>
  );
};
