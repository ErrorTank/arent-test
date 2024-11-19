import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import styles from "./MealsHistory.module.css";
import healthServices from "../../../services/healthServices";
import { Container } from "../../../components/Container/Container";
import { HexButton } from "./HexButton/HexButton";
import { MealCard } from "./MealCard/MealCard";

const MEAL_TYPES = [
  { icon: "🍳", label: "Morning" },
  { icon: "🍱", label: "Lunch" },
  { icon: "🍽️", label: "Dinner" },
  { icon: "🥤", label: "Snack" },
] as const;

const ITEMS_PER_PAGE = 4;

interface Filters {
  page: number;
  category?: string;
}

export const MealsHistory = () => {
  const [filters, setFilters] = useState<Filters>({ page: 0 });

  const { data: mealResponse } = useApi(["meals", filters], () =>
    healthServices.getMeals(filters.page, ITEMS_PER_PAGE, filters.category)
  );

  const handleLoadMore = () => {
    setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleCategoryClick = (category: string) => {
    setFilters({ page: 0, category });
  };

  return (
    <section className={styles.meals}>
      <Container>
        <div className={styles.content}>
          <div className={styles.types}>
            {MEAL_TYPES.map(({ icon, label }) => (
              <HexButton
                key={label}
                icon={icon}
                label={label}
                isActive={filters.category === label}
                onClick={() => handleCategoryClick(label)}
              />
            ))}
          </div>

          <div className={styles.grid}>
            {mealResponse?.meals.map((meal) => (
              <MealCard
                key={meal.id}
                imageUrl={meal.imageUrl}
                label={meal.label}
              />
            ))}
          </div>

          {mealResponse?.hasMore && (
            <button className={styles.loadMore} onClick={handleLoadMore}>
              記録をもっと見る
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};
