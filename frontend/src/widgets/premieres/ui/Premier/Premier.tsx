import { ListPremieres } from "@features/listPremieres/ui/ListPremieres/ListPremieres";
import { Container } from "@shared/ui/Container/Container";

export const Premier = () => {
  return (
    <section>
      <Container>
        <h1>Ближайшие премьеры</h1>
        <ListPremieres/>
      </Container>
    </section>
  );
}