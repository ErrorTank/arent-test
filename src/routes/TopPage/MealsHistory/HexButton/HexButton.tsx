import styles from "./HexButton.module.css";

interface HexButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const HexButton = ({
  icon,
  label,
  isActive,
  onClick,
}: HexButtonProps) => {
  return (
    <div
      className={`${styles.hexButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
