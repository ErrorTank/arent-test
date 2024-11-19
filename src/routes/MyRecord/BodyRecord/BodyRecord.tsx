import { useState, useMemo } from "react";
import { Container } from "../../../components/Container/Container";
import { Graph } from "../../../components/Graph/Graph";
import styles from "./BodyRecord.module.css";
import { useApi } from "../../../hooks/useApi";
import healthServices from "../../../services/healthServices";

const PERIOD_OPTIONS = ["日", "週", "月", "年"] as const;
type Period = (typeof PERIOD_OPTIONS)[number];

const GRAPH_LINES = [
  { dataKey: "weight", color: "#FFCC21" },
  { dataKey: "bodyFat", color: "#8FE9D0" },
];

export const BodyRecord = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("年");
  const { data: bodyRecords } = useApi(["bodyRecord", selectedPeriod], () =>
    healthServices.getHealthHistory()
  );

  const graphData = useMemo(() => {
    if (!bodyRecords) return null;
    return bodyRecords.map((record) => ({
      ...record,
      label: record.date,
    }));
  }, [bodyRecords]);

  const periodButtons = useMemo(
    () => (
      <div className={styles.periodButtons}>
        {PERIOD_OPTIONS.map((period) => (
          <button
            key={period}
            className={styles.periodButton}
            data-active={period === selectedPeriod}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>
    ),
    [selectedPeriod]
  );

  return (
    <section id="bodyRecord" className={styles.bodyRecord}>
      <Container>
        <div className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.title}>BODY RECORD</h3>
            <time className={styles.date}>2021.05.21</time>
          </div>

          <div className={styles.graph}>
            {graphData && (
              <Graph data={graphData} lines={GRAPH_LINES} xAxisDataKey="date" />
            )}
          </div>

          {periodButtons}
        </div>
      </Container>
    </section>
  );
};
