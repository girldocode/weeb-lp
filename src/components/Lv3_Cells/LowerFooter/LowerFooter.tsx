import { LowerFooterData } from "@/app/data/app.data";
import { WText } from "@/components/Lv1_Atoms";
import Image from "next/image";
import React from "react";
import styles from "./LowerFooter.module.scss";
import { FetchLowerFooter } from "@/actions/fetchLowerFooter";

const LowerFooter: React.FC = async() => {

  const data = await FetchLowerFooter();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <WText as="span" className={styles.text}>
       {data.text}
        </WText>

        <div className={styles.socialIcons}>
          {data.icons.map(({ id, icon, alt, href }) => (
            <div key={id}>
              <a href={href}>
                <Image src={icon} alt={alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LowerFooter;
