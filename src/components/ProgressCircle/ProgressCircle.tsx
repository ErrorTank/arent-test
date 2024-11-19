import styles from "./ProgressCircle.module.css";

interface ProgressCircleProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: string;
  backgroundColor?: string;
}

export const ProgressCircle = ({
  value,
  size = 180,
  strokeWidth = 3,
  label,
  color = "#FFFFFF",
  backgroundColor = "rgba(255, 255, 255, 0.25)",
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className={styles.backgroundCircle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={backgroundColor}
          fill="none"
        />

        <circle
          className={styles.progressCircle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.divider}></span>
        <span className={styles.value}>{value}%</span>
      </div>
    </div>
  );
};
