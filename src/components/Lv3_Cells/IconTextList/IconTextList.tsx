import { IconsText } from "@/components/Lv2_Molecules";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { IconTextListProps } from "./@types";
import styles from "./IconTextList.module.scss";

const IconTextList: React.FC<IconTextListProps> = ({ iconTextList }) => {
  return (
    <div className={styles.IconTextList}>
      {iconTextList.map(({ id, icon, alt, width, height, text }, index) => (
        <IconsText
          key={id}
          text={text}
          imageSrc={urlFor(icon).url()}
          width={width}
          height={height}
          alt={alt}
          className={index === iconTextList.length - 1 ? styles.lastItem : ""}
        />
      ))}
    </div>
  );
};

export default IconTextList;
