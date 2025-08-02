import { useAllPremieres } from "@features/listPremieres/api/useAllPremieres";
import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";
import styles from "./ListPremieres.module.scss";
import { GeneratePremiers } from "@features/listPremieres/module/GeneratePremiers";

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
    <ul className={`${className} ${styles.list}`}>
      <GeneratePremiers premieres={premieres} classButton={styles.listButton} />
    </ul>
  );
};
