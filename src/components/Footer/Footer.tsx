import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "会員登録", to: "/register" },
  { label: "運営会社", to: "/company" },
  { label: "利用規約", to: "/terms" },
  { label: "個人情報の取扱について", to: "/privacy" },
  { label: "特定商取引法に基づく表記", to: "/commercial-law" },
  { label: "お問い合わせ", to: "/contact" },
] as const;

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.nav}>
          {FOOTER_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
};
