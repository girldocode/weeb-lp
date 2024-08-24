import { Label } from "@/components/Lv1_Atoms";
import { IconButton } from "@/components/Lv2_Molecules";
import Image from "next/image";
import line from "../../../../public/assets/svgviewer-output(16).svg";
import { NextLevelRightProps } from "./@types";
import styles from "./NextLevelRight.module.scss";

const NextLevelRight: React.FC<NextLevelRightProps> = ({
  label,
  title,
  text,
  cta,
}) => {
  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <div>
        <h1 className={styles.container__title}>
          <span className={styles.container__title__line}>
            {title}
            <Image
              src={line}
              alt="line"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "174px",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
              className={styles.line}
            />
          </span>{" "}
          {text}
        </h1>
      </div>
      <IconButton text={cta} variant="purple" />
    </div>
  );
};

export default NextLevelRight;
