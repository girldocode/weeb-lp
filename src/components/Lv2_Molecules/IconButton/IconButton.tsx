import { WText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import React from "react";
import { IconButtonProps } from "./@types";
import styles from "./IconButton.module.scss";

const IconText: React.FC<IconButtonProps> = ({ text, variant }) => {
  const classes = {
    gn: $cx(styles.iconText),
    variant: $cx(styles[`iconText--${variant}`]),
  };
  return (
    <button
      className={`${classes.gn} ${classes.variant}`}
      aria-label={text}
      type="button"
    >
      <div className="display-flex gap-x-4 items-center cursor-pointer">
        <div>
          <WText
            weight="medium"
            size="base"
            className={styles["iconText__text"]}
          >
            {text}
          </WText>
        </div>
        <div className={styles.iconText__icon}>
          {variant === "purple" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2525 10.6569L12.3025 6.70692C12.1203 6.51832 12.0196 6.26571 12.0218 6.00352C12.0241 5.74132 12.1293 5.49051 12.3147 5.3051C12.5001 5.11969 12.7509 5.01452 13.0131 5.01224C13.2753 5.00997 13.5279 5.11076 13.7165 5.29292L19.3735 10.9499C19.4667 11.0426 19.5406 11.1527 19.5911 11.2741C19.6416 11.3954 19.6675 11.5255 19.6675 11.6569C19.6675 11.7883 19.6416 11.9184 19.5911 12.0398C19.5406 12.1611 19.4667 12.2713 19.3735 12.3639L13.7165 18.0209C13.6243 18.1164 13.5139 18.1926 13.3919 18.245C13.2699 18.2974 13.1387 18.325 13.0059 18.3262C12.8731 18.3273 12.7414 18.302 12.6185 18.2517C12.4957 18.2015 12.384 18.1272 12.2901 18.0333C12.1962 17.9394 12.122 17.8278 12.0717 17.7049C12.0214 17.582 11.9961 17.4503 11.9973 17.3175C11.9984 17.1847 12.026 17.0535 12.0784 16.9315C12.1308 16.8095 12.207 16.6992 12.3025 16.6069L16.2525 12.6569H6.6665C6.40129 12.6569 6.14693 12.5516 5.9594 12.364C5.77186 12.1765 5.6665 11.9221 5.6665 11.6569C5.6665 11.3917 5.77186 11.1373 5.9594 10.9498C6.14693 10.7623 6.40129 10.6569 6.6665 10.6569H16.2525Z"
                fill="#9333EA"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default IconText;
