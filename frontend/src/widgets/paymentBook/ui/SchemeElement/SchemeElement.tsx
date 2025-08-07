import { useState } from 'react';
import styles from './SchemeElement.module.scss'

interface ISchemeElementProps {
  id: string;
}
  
export const SchemeElement = ({ id }: ISchemeElementProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <label htmlFor={`scheme${id}`}  className={`${styles.schemeElement} ${isActive ? styles.schemeElementActive : ""}`}>
      <input type="checkbox" name={`scheme${id}`} id={`scheme${id}`} onChange={handleActive} />
    </label>
  );
}