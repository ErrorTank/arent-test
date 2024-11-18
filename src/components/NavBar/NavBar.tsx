import { useMemo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Container } from "../Container/Container";
import { NavItem } from "./NavItem/NavItem";
import { Dropdown } from "../Dropdown/Dropdown";
import { Drawer } from "../Drawer/Drawer";
import { useAuth } from "../../hooks/useAuth";

import logoImg from "../../assets/logo.png";
import menuIcon from "../../assets/icon_menu.png";
import closeIcon from "../../assets/icon_close.png";
import memoIcon from "../../assets/icon_memo.png";
import challengeIcon from "../../assets/icon_challenge.png";
import infoIcon from "../../assets/icon_info.png";
import useNotifications from "../../hooks/useNotifications";

const NAV_ITEMS = [
  {
    icon: memoIcon,
    label: "自分の記録",
    to: "/",
    requireAuth: true,
    hideIfAuth: false,
  },
  {
    icon: challengeIcon,
    label: "チャレンジ",
    to: "/my-record",
    requireAuth: true,
    hideIfAuth: false,
  },
  {
    icon: infoIcon,
    label: "コラム一覧",
    to: "/column",
    requireAuth: false,
    hideIfAuth: false,
  },
  {
    icon: "",
    label: "ログイン",
    to: "/login",
    requireAuth: false,
    hideIfAuth: true,
  },
] as const;

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, logout } = useAuth();
  const unreadCount = useNotifications();

  const handleLogout = useCallback(() => {
    setIsDrawerOpen(false);
    logout();
  }, [logout]);

  const dropdownItems = useMemo(
    () => [
      {
        key: "logout",
        label: "ログアウト",
        onClick: handleLogout,
      },
    ],
    [handleLogout]
  );

  const navItems = useMemo(
    () =>
      NAV_ITEMS.map(
        (item) =>
          (!item.requireAuth || user) &&
          (!item.hideIfAuth || !user) && (
            <NavItem
              key={item.to}
              icon={
                <div className={styles.iconWrapper}>
                  <img src={item.icon} alt="" />
                  {item.to === "/column" && unreadCount > 0 && (
                    <span className={styles.badge}>{unreadCount}</span>
                  )}
                </div>
              }
              label={item.label}
              to={item.to}
              onClick={() => setIsDrawerOpen(false)}
            />
          )
      ),
    [user, unreadCount, setIsDrawerOpen]
  );

  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logoLink}>
            <img src={logoImg} alt="Healthy" className={styles.logo} />
          </Link>

          <div className={styles.rightContent}>
            <nav className={styles.desktopNav}>{navItems}</nav>

            <div className={styles.menuControls}>
              <button
                className={styles.drawerButton}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <img
                  src={isDrawerOpen ? closeIcon : menuIcon}
                  alt={isDrawerOpen ? "Close menu" : "Open menu"}
                  className={styles.menuIcon}
                />
              </button>

              {user && (
                <div className={styles.desktopDropdown}>
                  <Dropdown
                    items={dropdownItems}
                    trigger={({ isOpen }) => (
                      <button className={styles.dropdownButton}>
                        <img
                          src={isOpen ? closeIcon : menuIcon}
                          alt={isOpen ? "Close menu" : "Open menu"}
                          className={styles.menuIcon}
                        />
                      </button>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <nav className={styles.drawerNav}>
          {navItems}
          {user && (
            <button className={styles.logoutButton} onClick={handleLogout}>
              ログアウト
            </button>
          )}
        </nav>
      </Drawer>
    </header>
  );
};
