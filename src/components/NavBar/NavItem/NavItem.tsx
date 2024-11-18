import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: number;
  onClick?: () => void;
}

export const NavItem = ({ icon, label, to, badge, onClick }: NavItemProps) => (
  <Link to={to} className={styles.item} onClick={onClick}>
    <div className={styles.iconWrapper}>
      {icon}
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
    <span className={styles.label}>{label}</span>
  </Link>
);
