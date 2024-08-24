import { FetchToolsSection } from "@/actions/fetchToolsSection";
import { Label } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";
import styles from "./ToolsSection.module.scss";
const ToolSection: React.FC = async () => {
  const data = await FetchToolsSection();
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
            <h1 className={classes.title}>{data.title}</h1>
            <p className={classes.description}>{data.description}</p>
          </div>
        </div>
        <div className={classes.right}>
          <Image
            src={data.image}
            alt="desktop"
            width={750}
            height={750}
            style={{ width: "100%", height: "auto", maxWidth: "750px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
