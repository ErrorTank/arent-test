import { ReactNode } from "react";
import { Container } from "../Container/Container";
import { Navbar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
