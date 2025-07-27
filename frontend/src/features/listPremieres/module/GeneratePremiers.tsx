import { useWindowSize } from "@shared/modules/useWindowSize";
import type { IPremieres } from "@shared/types/premieres.interface";
import { ListItemPremier } from "../ui/ListItemPremier/ListItemPremier";

interface IGeneratePremiersProps {
  premieres: IPremieres[];
}

export const GeneratePremiers = ({ premieres }: IGeneratePremiersProps) => {
  const { width } = useWindowSize();
  if (!Array.isArray(premieres)) return <p>No news found.</p>;

  const filterPremieres =  width < 768
    ? premieres
        .filter((premierItem) => premierItem.id < 4)
    : premieres;

  return (
    <>
      {filterPremieres.map((premierItem) => (
        <ListItemPremier key={premierItem.id} premier={premierItem} />
      ))}
    </>
  )
};
