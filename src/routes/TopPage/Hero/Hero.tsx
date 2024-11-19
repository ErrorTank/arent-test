import { Container } from "../../../components/Container/Container";
import { Graph } from "../../../components/Graph/Graph";
import { ProgressCircle } from "../../../components/ProgressCircle/ProgressCircle";
import { useApi } from "../../../hooks/useApi";
import recordServices from "../../../services/recordServices";
import healthServices from "../../../services/healthServices";
import styles from "./Hero.module.css";
import mealImage from "../../../assets/main_photo.png";
import { useMemo } from "react";

export const Hero = () => {
  const { data: record } = useApi(
    ["dailyRecord"],
    recordServices.getDailyRecord
  );

  const { data: healthHistory } = useApi(
    ["healthHistory"],
    healthServices.getHealthHistory
  );

  const graphData = useMemo(() => {
    return (
      healthHistory?.map((item) => ({
        label: item.date.slice(5, 7) + "月",
        bodyFat: item.bodyFat,
        weight: item.weight,
      })) ?? []
    );
  }, [healthHistory]);

  const lines = [
    { dataKey: "bodyFat", color: "#8FE9D0" },
    { dataKey: "weight", color: "#FFCC21" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.mealCard}>
          <img src={mealImage} alt="" className={styles.mealImage} />
          <div className={styles.progressOverlay}>
            <ProgressCircle
              value={record?.achievement ?? 0}
              label={record?.date}
            />
          </div>
        </div>
        <div className={styles.graphCard}>
          <Graph data={graphData} lines={lines} height={"100%"} />
        </div>
      </div>
    </section>
  );
};
