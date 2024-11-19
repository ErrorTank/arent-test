import { ArticleCategory } from "../../../services/articleServices";
import styles from "./Categories.module.css";

const CATEGORIES = [
  { id: "COLUMN", title: "RECOMMENDED\nCOLUMN", subtitle: "オススメ" },
  { id: "DIET", title: "RECOMMENDED\nDIET", subtitle: "ダイエット" },
  { id: "BEAUTY", title: "RECOMMENDED\nBEAUTY", subtitle: "美容" },
  { id: "HEALTH", title: "RECOMMENDED\nHEALTH", subtitle: "健康" },
] as const;

interface CategoriesProps {
  selectedCategory?: ArticleCategory;
  onCategoryClick: (category: ArticleCategory) => void;
}

export const Categories = ({
  selectedCategory,
  onCategoryClick,
}: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      {CATEGORIES.map(({ id, title, subtitle }) => (
        <button
          key={id}
          className={`${styles.category} ${
            selectedCategory === id ? styles.active : ""
          }`}
          onClick={() => onCategoryClick(id)}
        >
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </button>
      ))}
    </div>
  );
};
