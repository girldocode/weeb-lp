import { FetchLevelUpSection } from "@/actions/fetchLevelUpSection";
import { NextLevelRight, TestimonialCard } from "@/components/Lv3_Cells";
import { $cx } from "@/lib";
import Image from "next/image";
import styles from "./LevelUpSection.module.scss";

const LevelUpSection: React.FC = async () => {
  const data = await FetchLevelUpSection();
  const classes = {
    section: $cx(styles.LevelUpSection),
    container: $cx(styles.LevelUpSection__container),
    left: $cx(styles.LevelUpSection__container__left),
    middle: $cx(styles.LevelUpSection__container__middle),
    right: $cx(styles.LevelUpSection__container__right),
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <NextLevelRight {...data.nextLevelRight} />
        </div>
        <div
          className={classes.middle}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={data.image}
            alt="mobile"
            width={350}
            height={350}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "350px",
            }}
          />
        </div>
        <div className={classes.right}>
          <TestimonialCard {...data.testimonialCard} />
        </div>
      </div>
    </section>
  );
};

export default LevelUpSection;
