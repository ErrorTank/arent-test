import { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "default" | "wide" | number;
  noPadding?: boolean;
  className?: string;
}

export const Container = ({
  children,
  maxWidth = "default",
  noPadding = false,
  className = "",
}: ContainerProps) => {
  const containerStyle = {
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : undefined,
  };

  return (
    <div
      className={`
        ${styles.container}
        ${styles[`container-${maxWidth}`]}
        ${noPadding ? styles.noPadding : ""}
        ${className}
      `.trim()}
      style={containerStyle}
    >
      {children}
    </div>
  );
};
