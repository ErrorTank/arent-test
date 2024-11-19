import styles from "./ExerciseCard.module.css";

interface ExerciseCardProps {
  name: string;
  description: string;
  duration: number;
  calories: number;
}

export const ExerciseCard = ({
  name,
  description,
  duration,
  calories,
}: ExerciseCardProps) => {
  return (
    <div className={styles.exerciseItem}>
      <div className={styles.name}>
        {name}（{description}）
        <span className={styles.duration}>{duration} min</span>
      </div>
      <div className={styles.calories}>{calories}kcal</div>
    </div>
  );
};
