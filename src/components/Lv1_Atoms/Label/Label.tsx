import { $cx } from "@/lib";
import WText from "../WText/WText";
import { LabelProps } from "./@types";
import styles from "./Label.module.scss";

const Label: React.FC<LabelProps> = ({ children }) => {
  const generalStyle = `${styles.label} `;

  const classes = $cx(generalStyle, styles["label__text"], children);

  return (
    <div className={classes}>
      <WText color="white" weight="bold" className={styles.label__text}>
        {children}
      </WText>
    </div>
  );
};

export default Label;
