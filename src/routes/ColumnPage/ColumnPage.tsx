import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { useApi } from "../../hooks/useApi";
import articleServices, {
  ArticleCategory,
} from "../../services/articleServices";
import styles from "./ColumnPage.module.css";
import { Categories } from "./Categories/Categories";
import { ArticleList } from "./ArticleList/ArticleList";

const ITEMS_PER_PAGE = 8;

interface Filters {
  page: number;
  category?: ArticleCategory;
}

const ColumnPage = () => {
  const [filters, setFilters] = useState<Filters>({ page: 0 });

  const { data: articleResponse } = useApi(["articles", filters], () =>
    articleServices.getArticles(filters.page, ITEMS_PER_PAGE, filters.category)
  );

  const handleLoadMore = () => {
    setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleCategoryClick = (category: ArticleCategory) => {
    setFilters({ page: 0, category });
  };

  return (
    <main className={styles.columnPage}>
      <Container>
        <Categories
          selectedCategory={filters.category}
          onCategoryClick={handleCategoryClick}
        />
        <ArticleList
          articles={articleResponse?.articles ?? []}
          hasMore={articleResponse?.hasMore ?? false}
          onLoadMore={handleLoadMore}
        />
      </Container>
    </main>
  );
};

export default ColumnPage;
