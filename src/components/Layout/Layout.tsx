import { ReactNode } from "react";
import { Container } from "../Container/Container";
import styles from "./Layout.module.css";
import { Navbar } from "../NavBar/NavBar";

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
    </div>
  );
};
