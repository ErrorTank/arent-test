import { Container } from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import bodyRecordImg from "../../../assets/MyRecommend-1.png";
import exerciseImg from "../../../assets/MyRecommend-2.png";
import diaryImg from "../../../assets/MyRecommend-3.png";

const NAVIGATION_ITEMS = [
  {
    title: "BODY RECORD",
    subtitle: "自分のカラダの記録",
    image: bodyRecordImg,
    target: "bodyRecord",
  },
  {
    title: "MY EXERCISE",
    subtitle: "自分の運動の記録",
    image: exerciseImg,
    target: "exercise",
  },
  {
    title: "MY DIARY",
    subtitle: "自分の日記",
    image: diaryImg,
    target: "diary",
  },
] as const;

export const Navigation = () => {
  const handleClick = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.navigation}>
      <Container>
        <div className={styles.grid}>
          {NAVIGATION_ITEMS.map(({ title, subtitle, image, target }) => (
            <Link
              key={target}
              onClick={handleClick(target)}
              to={`#${target}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={image} alt="" className={styles.image} />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
