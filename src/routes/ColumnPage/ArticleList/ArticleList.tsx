import { Article } from "../../../type/article";
import styles from "./ArticleList.module.css";

interface ArticleListProps {
  articles: Article[];
  hasMore: boolean;
  onLoadMore: () => void;
}

export const ArticleList = ({
  articles,
  hasMore,
  onLoadMore,
}: ArticleListProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={article.imageUrl} alt="" className={styles.image} />
              <div className={styles.date}>
                {article.date} {article.time}
              </div>
            </div>
            <p className={styles.title}>{article.title}</p>
            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button className={styles.loadMore} onClick={onLoadMore}>
          コラムをもっと見る
        </button>
      )}
    </div>
  );
};
