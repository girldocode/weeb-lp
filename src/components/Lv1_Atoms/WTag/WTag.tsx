import { $cx } from "@/lib";
import React from "react";
import UText from "../WText/WText";
import { TagColor, TagProps, TagText, TagtextAlign, TagWeight } from "./@types";
import styles from "./WTag.module.scss";
const UTag: React.FC<TagProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  className,
  ...props
}) => {
  const TextVariants: Record<TagText, string> = {
    sm: "font-sm",
  };

  const colorVariants: Record<TagColor, string> = {
    "purple-100": "font-purple-100",
    "purple-800": "font-purple-800",
  };

  const weightVariants: Record<TagWeight, string> = {
    normal: "font-normal",
  };

  const textAlignVariants: Record<TagtextAlign, string> = {
    left: "align-left",
    center: "align-center",
  };

  const generalStyling = ` ${styles["tag-w-purple"]} bg-purple-100 cursor-pointer  border-rounded`;

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    colorVariants[color as keyof typeof colorVariants],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <div className={classes} {...props}>
      <UText color={color} weight={weight} size={size} textAlign={textAlign}>
        {children}
      </UText>
    </div>
  );
};

export default UTag;
