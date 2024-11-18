import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Drawer.module.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div className={`${styles.container} ${isOpen ? styles.visible : ""}`}>
      <div className={styles.overlay} onClick={onClose} />
      <div
        ref={drawerRef}
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
