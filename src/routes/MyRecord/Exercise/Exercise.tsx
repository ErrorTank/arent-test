import { Container } from "../../../components/Container/Container";
import { useApi } from "../../../hooks/useApi";
import healthServices from "../../../services/healthServices";
import styles from "./Exercise.module.css";
import { ExerciseCard } from "./ExerciseCard/ExerciseCard";

export const Exercise = () => {
  const { data: exercises } = useApi(["exercises"], () =>
    healthServices.getExercises()
  );

  return (
    <section id="exercise" className={styles.exercise}>
      <Container>
        <div className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.title}>MY EXERCISE</h3>
            <time className={styles.date}>2021.05.21</time>
          </div>

          <div className={styles.scrollArea}>
            <div className={styles.grid}>
              {exercises?.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  name={exercise.name}
                  description={exercise.description}
                  duration={exercise.duration}
                  calories={exercise.calories}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
