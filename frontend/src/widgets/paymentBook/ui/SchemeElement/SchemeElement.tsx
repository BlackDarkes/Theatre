import styles from './SchemeElement.module.scss'

interface ISchemeElementProps {
  id: string;
}
  
export const SchemeElement = ({ id }: ISchemeElementProps) => {
  return (
    <label htmlFor={`scheme${id}`}  className={styles.schemeElement}>
      <input type="checkbox" name={`scheme${id}`} id={`scheme${id}`} />
    </label>
  );
}