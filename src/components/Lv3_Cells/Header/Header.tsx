import { FetchHeader } from "@/actions/fetchHeader";
import { Logo, WButton, WText } from "@/components/Lv1_Atoms";
import { NavMenu } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import React from "react";
import styles from "./Header.module.scss";
import Wrapper from "./Wrapper/Wrapper";

const Header: React.FC = async () => {
  const data = await FetchHeader();

  const classes = {
    header: $cx(styles.header),
    container: $cx(styles.header__container),
    logo: $cx(styles.header__container__logo),
    nav: $cx(styles.header__container__navMenu),
    buttons: $cx(styles.header__container__buttons),
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className="display-flex justify-between items-center">
          <div className={classes.logo}>
            <Logo variant="header" color="white" weight="bold">
              {data.logo}
            </Logo>
            <NavMenu
              navLinks={data.navLinks}
              textAlign="center"
              size="base"
              color="white"
              weight="medium"
              className={classes.nav}
            />
          </div>
          <div className={classes.buttons}>
            <WText color="white" weight="medium" size="base">
              {data.cta1}
            </WText>
            <WButton
              weight="medium"
              variant="sm"
              color="white"
              textAlign="center"
            >
              {data.cta2}
            </WButton>
          </div>
          <Wrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
