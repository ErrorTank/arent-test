import styles from "./Navbar.module.css";
import { Container } from "../Container/Container";
import logoImg from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.content}>
          <img src={logoImg} alt="Healthy" className={styles.logo} />
        </div>
      </Container>
    </header>
  );
};
