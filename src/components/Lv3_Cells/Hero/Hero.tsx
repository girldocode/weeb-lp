import { FetchHero } from "@/actions/fetchHero";
import { WButton } from "@/components/Lv1_Atoms";
import Image from "next/image";
import headline from "../../../../public/assets/svgviewer-output(6).svg";
import underline from "../../../../public/assets/svgviewer-output(7).svg";
import display from "../../../../public/assets/svgviewer-output(8).svg";
import styles from "./Hero.module.scss";
const Hero: React.FC = async () => {
  const data = await FetchHero();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {data.title}
          <span className={styles.text}>
            {data.text}
            <Image
              src={underline}
              alt="underline"
              className={styles.underline}
              style={{ width: "100%", height: "auto" }}
            />
          </span>
          <span className={styles.accent}>{data.accentText}</span>
          <span className={styles.highlight}>
            <Image
              src={headline}
              alt="headline"
              className={styles.headline}
              style={{ width: "100%", height: "auto" }}
            />
            {data.highlightText}
          </span>
        </h1>
        <p className={styles.heroDescription}>{data.description}</p>
        <p className={styles.heroDescription}>{data.content}</p>
        <div className={styles.buttonGroup}>
          <WButton
            weight="medium"
            variant="filled"
            color="white"
            textAlign="center"
          >
            {data.cta1}
          </WButton>
          <WButton
            weight="medium"
            variant="outlined"
            color="white"
            textAlign="center"
          >
            {data.cta2}
          </WButton>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={display}
            alt="display"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
