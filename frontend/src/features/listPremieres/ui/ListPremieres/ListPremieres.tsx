import { useAllPremieres } from "@features/listPremieres/api/useAllPremieres";
import { ListItemPremier } from "../ListItemPremier/ListItemPremier";
import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";

interface IListPremieresProps {
  className?: string;
}

export const ListPremieres = ({ className }: IListPremieresProps) => {
  const { isLoading, error, premieres } = useAllPremieres();

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!Array.isArray(premieres)) return <Error error={{
    message: "Данные не найдены или имеют неверный формат"
  }} />;

  return (
    <ul className={`${className}`}>
      {premieres?.map((premier) => {
        return <ListItemPremier key={premier.id} premier={premier} />
      })}
    </ul>
  );
};
