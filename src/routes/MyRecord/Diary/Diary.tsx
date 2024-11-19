import { useState } from "react";
import { Container } from "../../../components/Container/Container";
import { useApi } from "../../../hooks/useApi";
import styles from "./Diary.module.css";
import healthServices from "../../../services/healthServices";

const ITEMS_PER_PAGE = 8;

export const Diary = () => {
  const [page, setPage] = useState(0);

  const { data: diaryResponse } = useApi(["diaries", page], () =>
    healthServices.getDiaries(page, ITEMS_PER_PAGE)
  );

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section id="diary" className={styles.diary}>
      <Container>
        <h3 className={styles.title}>MY DIARY</h3>

        <div className={styles.grid}>
          {diaryResponse?.entries.map((entry) => (
            <div key={entry.id} className={styles.card}>
              <div className={styles.date}>
                {entry.date}
                <br />
                {entry.time}
              </div>
              <p className={styles.content}>{entry.content}</p>
            </div>
          ))}
        </div>

        {diaryResponse?.hasMore && (
          <button className={styles.loadMore} onClick={handleLoadMore}>
            自分の日記をもっと見る
          </button>
        )}
      </Container>
    </section>
  );
};
