import styles from "./MealCard.module.css";

interface MealCardProps {
  imageUrl: string;
  label: string;
}

export const MealCard = ({ imageUrl, label }: MealCardProps) => {
  return (
    <div className={styles.mealCard}>
      <img src={imageUrl} alt="" className={styles.image} />
      <div className={styles.label}>{label}</div>
    </div>
  );
};
