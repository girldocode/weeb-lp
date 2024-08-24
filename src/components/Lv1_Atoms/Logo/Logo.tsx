import { $cx } from "@/lib";
import React from "react";
import UText from "../../Lv1_Atoms/WText/WText";
import {
  LogoColor,
  LogoProps,
  LogoText,
  LogoVariant,
  LogoWeight,
} from "./@types";
import styles from "./Logo.module.scss";
const Logo: React.FC<LogoProps> = ({
  children,
  textAlign,
  color,
  weight,
  variant,
  className,

  ...props
}) => {
  //  variant styles
  const variantStyles: Record<LogoVariant, string> = {
    header: "",
    footer: "",
  };

  // Define color styles
  const colorVariants: Record<LogoColor, string> = {
    "blue-gray-900": "font-blue-gray-900",
    white: " font-white",
  };

  // text weight
  const weightVariants: Record<LogoWeight, string> = {
    bold: "font-bold",
  };

  // text align

  const textAlignVariants: Record<LogoText, string> = {
    center: "align-center",
  };

  const generalStyling = `${styles["logo-size"]} display-flex align-center `;

  // Combine classes
  const classes = $cx(
    generalStyling,
    variantStyles[variant],
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <div className={classes} {...props}>
      <UText color={color} weight={weight}>
        {children}
      </UText>
    </div>
  );
};

export default Logo;
