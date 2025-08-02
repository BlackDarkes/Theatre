import { useWindowSize } from "@shared/modules/useWindowSize";
import type { IPremieres } from "@shared/types/premieres.interface";
import { ListItemPremier } from "../ui/ListItemPremier/ListItemPremier";
import type { ReactNode } from "react";
import { Button } from "@shared/ui/Button/Button";

interface IGeneratePremiersProps {
  premieres: IPremieres[];
  classButton: string;
}

export const GeneratePremiers = ({ premieres, classButton }: IGeneratePremiersProps): ReactNode => {
  const { width } = useWindowSize();
  if (!Array.isArray(premieres)) return <p>No news found.</p>;

  const filterPremieres =  width < 768
    ? premieres
        .filter((premierItem) => premierItem.id < 4)
    : premieres;

  const mobileButton = width < 768 ? <Button ariaLabel="Ещё" to="/events" className={classButton}>Еще &gt;</Button> : "";

  return (
    <>
      {filterPremieres.map((premierItem) => (
        <ListItemPremier key={premierItem.id} premier={premierItem} />
      ))}
      {mobileButton}
    </>
  )
};
