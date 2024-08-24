import { WText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import Image from "next/image";

import { avatarProps } from "./@types";
import styles from "./Avatar.module.scss";
const Avatar: React.FC<avatarProps> = ({ avatar, name, tagline }) => {
  const generalStyling = "display-flex gap-x-4 items-center";
  const style = `${styles["avatar-flex"]}`;

  const classes = $cx(generalStyling);

  return (
    <div className={classes}>
      <Image src={avatar} width={64} height={64} alt="avatar" />
      <div className={style}>
        <WText as="strong" size="lg" weight="normal" color="white">
          {name}
        </WText>
        <WText as="strong" size="base" weight="normal" color="white">
          {tagline}
        </WText>
      </div>
    </div>
  );
};

export default Avatar;
