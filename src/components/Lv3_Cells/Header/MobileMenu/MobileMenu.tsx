import React from "react";
import styles from "./mobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.mobilemenu} ${isOpen ? styles.show : styles.hide}`}
    >
      <div className={styles.mobilemenu__closeButton}>
        <button
          onClick={onClose}
          className={styles.mobilemenu__closeButtonIcon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0,0,300,150"
          >
            <g
              fill="#0f172a"
              // fillRule="nonzero"
              // stroke="none"
              // stroke-width="1"
              // stroke-linecap="butt"
              // stroke-linejoin="miter"
              // stroke-miterlimit="10"
              // stroke-dasharray=""
              // stroke-dashoffset="0"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className={styles.mobilemenu__list}>
        <ul className={styles.mobilemenu__list__text}>
          <li>
            <a href="/" className={styles.mobilemenu__list__text__a}>
              About Us
            </a>
          </li>
          <li>
            <a href="/" className={styles.mobilemenu__list__text__a}>
              Solutions
            </a>
          </li>
          <li>
            <a href="/" className={styles.mobilemenu__list__text__a}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className={styles.mobilemenu__list__text__a}>
              Resources
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
