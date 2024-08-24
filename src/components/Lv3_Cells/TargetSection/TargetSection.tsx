import { FetchTargetSection } from "@/actions/fetchTargetSection";
import { Label } from "@/components/Lv1_Atoms";
import { IconButton } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import Image from "next/image";
import React from "react";
import box from "../../../../public/assets/svgviewer-output (12).svg";
import styles from "./TargetSection.module.scss";
const TargetSection: React.FC = async () => {
  const data = await FetchTargetSection();

  const classes = {
    section: $cx(styles.TargetSection),
    container: $cx(styles.TargetSection__container),
    left: $cx(styles.TargetSection__container__left),
    right: $cx(styles.TargetSection__container__right),
    content: $cx(styles.TargetSection__container__left__content),
    title: $cx(styles.TargetSection__container__left__title),
    label: $cx(styles.TargetSection__container__left__label),
    description: $cx(styles.TargetSection__container__left__description),
    text: $cx(styles.text),
    highlight: $cx(styles.highlight),
    button: $cx(styles.TargetSection__container__left__button),
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Label>{data.label}</Label>
          <div className={classes.content}>
            <h1 className={classes.title}>
              {data.title}
              <span className={classes.text}>
                {data.highlight}
                <Image src={box} alt="box" className={styles.box} />
              </span>
              <span className={classes.highlight}> {data.text}</span>
            </h1>
            <p className={classes.description}>{data.description}</p>
            <p className={classes.description}>{data.content}</p>
          </div>
          <div className={classes.button}>
            <IconButton text={data.buttonText} variant="purple" />
          </div>
        </div>
        <div className={classes.right}>
          <Image
            src={data.image}
            width={375}
            height={375}
            alt="puzzle"
            // layout="responsive"
            style={{ width: "100%", maxWidth: "375px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
