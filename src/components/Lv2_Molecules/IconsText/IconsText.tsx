import { WText } from "@/components/Lv1_Atoms";
import Image from "next/image";
import { IconTextProps } from "./@types";
import styles from "./IconsText.module.scss";

const IconsText: React.FC<IconTextProps> = ({
  text,
  imageSrc,
  width,
  height,
  alt,
  className,
}) => {
  return (
    <div className={`display-flex gap-2 items-center ${className}`}>
      {" "}
      <Image src={imageSrc} width={width} height={height} alt={alt} />
      <WText color="white" weight="bold" className={styles.iconText}>
        {text}
      </WText>
    </div>
  );
};

export default IconsText;
