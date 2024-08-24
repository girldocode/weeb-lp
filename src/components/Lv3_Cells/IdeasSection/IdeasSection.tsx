import { FetchIdeasSection } from "@/actions/fetchIdeasSection";
import { Label } from "@/components/Lv1_Atoms";
import { IconButton } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import Image from "next/image";
import square from "../../../../public/assets/svgviewer-output (11).svg";
import styles from "./IdeasSection.module.scss";

const IdeasSection: React.FC = async () => {
  const data = await FetchIdeasSection();

  const classes = {
    section: $cx(styles.ideasSection),
    container: $cx(styles.ideasSection__container),
    left: $cx(styles.ideasSection__container__left),
    right: $cx(styles.ideasSection__container__right),
    content: $cx(styles.ideasSection__container__left__content),
    title: $cx(styles.ideasSection__container__left__title),
    label: $cx(styles.ideasSection__container__left__label),
    description: $cx(styles.ideasSection__container__left__description),
    text: $cx(styles.text),
    highlight: $cx(styles.highlight),
    button: $cx(styles.ideasSection__container__left__button),
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
                <Image src={square} alt="square" className={styles.square} />
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
            alt="rectangle"
            style={{ width: "100%", maxWidth: "375px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;
