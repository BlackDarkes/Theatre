import styles from './TheatreInfo.module.scss'

interface ITheatreInfoProps {
  className: string;
  classTitle: string;
  classText: string;
}

export const TheatreInfo = ({ className, classTitle, classText }: ITheatreInfoProps) => {
  return (
    <div className={`${styles.theatreInfo} ${className}`}>
      <div>
        <span className={classTitle}>Дата основания</span>
        <h3 className={classText}>1932 год</h3>
      </div>
      <div>
        <span className={classTitle}>2020-2021 год</span>
        <h3 className={classText}>34 спектакля</h3>
      </div>
      <div>
        <span className={classTitle}>Абсолютно для всех</span>
        <h3 className={classText}>0+</h3>
      </div>
    </div>
  );
};
