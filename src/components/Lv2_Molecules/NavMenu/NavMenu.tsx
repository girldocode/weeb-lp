import { WText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import React from "react";
import { NavColor, NavMenuProp, NavText, NavWeight, TextSize } from "./@types";
import styles from "./NavMenu.module.scss";

const NavMenu: React.FC<NavMenuProp> = ({
  navLinks,
  textAlign,
  size,
  color,
  weight,
  className,
  ...props
}) => {
  const colorVariants: Record<NavColor, string> = {
    white: "font-white",
    // Add other color variants if needed
  };

  const weightVariants: Record<NavWeight, string> = {
    medium: "font-medium",
    // Add other weight variants if needed
  };

  const textAlignVariants: Record<NavText, string> = {
    center: "text-center",
    // Add other text align variants if needed
  };

  const textSizeVariants: Record<TextSize, string> = {
    base: "text-base",
    // Add other text size variants if needed
  };

  const generalStyling = "display-flex gap-x-6";

  const classes = $cx(
    generalStyling,
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign],
    textSizeVariants[size],
    className
  );

  return (
    <div className={classes} {...props}>
      {navLinks.map((item, index) => (
        <a href={item.href} key={index} className={styles["nav-a"]}>
          <div className="display-flex items-center justify-center">
            <WText
              size="base"
              textAlign={textAlign}
              color={color}
              weight={weight}
            >
              {item.name}
            </WText>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NavMenu;
