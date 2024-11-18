import { ReactNode, useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownItem {
  key: string;
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  items: DropdownItem[];
  trigger: (props: { isOpen: boolean }) => ReactNode;
  position?: "left" | "right";
  className?: string;
  children?: ReactNode;
}

export const Dropdown = ({
  items,
  trigger,
  position = "right",
  className,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (onClick: () => void) => {
    setIsOpen(false);
    onClick();
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div onClick={handleTriggerClick}>{trigger({ isOpen })}</div>
      {isOpen && (
        <div
          className={`${styles.dropdown} ${styles[position]} ${
            className || ""
          }`}
        >
          {children}
          <ul className={styles.menu}>
            {items.map((item) => (
              <li key={item.key}>
                <button
                  className={styles.item}
                  onClick={() => handleItemClick(item.onClick)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
