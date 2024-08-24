import { $cx } from "@/lib";
import React from "react";
import UText from "../WText/WText";
import {
  ButtonColor,
  ButtonProps,
  ButtonText,
  ButtonVariant,
  ButtonWeight,
  textAlign,
} from "./@types";
import styles from "./WButton.module.scss";

const UButton: React.FC<ButtonProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  variant,
  className,
  ...props
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    filled: `${styles["button--filled"]}`,
    sm: `${styles["button--sm"]}`,
    outlined: `${styles["button--outlined"]}`,
  };

  const TextVariants: Record<ButtonText, string> = {
    xs: "font-xs",
    sm: "font-sm",
    base: "font-base",
    lg: "font-lg",
    xl: "font-xl",
    "2xl": "font-2xl",
    "3xl": "font-3xl",
    "4xl": "font-4xl",
    "5xl": "font-5xl",
    "6xl": "font-6xl",
    "7xl": "font-7xl",
    "8xl": "font-8xl",
    "9xl": "font-8xl",
  };

  const colorVariants: Record<ButtonColor, string> = {
    white: " font-white",
    "purple-800": "font-purple-800",
  };

  const weightVariants: Record<ButtonWeight, string> = {
    medium: "font-medium",
  };

  const textAlignVariants: Record<textAlign, string> = {
    center: "align-center",
  };

  const generalStyling = "border-lg border-none border-2  cursor-pointer";

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    variantStyles[variant],
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <button className={classes} {...props}>
      <UText color={color} weight={weight} size={size} textAlign={textAlign}>
        {children}
      </UText>
    </button>
  );
};

export default UButton;
