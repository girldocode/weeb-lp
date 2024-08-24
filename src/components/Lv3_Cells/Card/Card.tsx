import { WText } from "@/components/Lv1_Atoms";
import { IconButton } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import Image from "next/image";
import { CardProps } from "./@types";
import styles from "./Card.module.scss";
const Card: React.FC<CardProps> = ({ imageUrl, text, title, btnText }) => {
  const classes = {
    card: $cx(styles.card),
    container: $cx(styles.card__container),
    image: $cx(styles.card__container__image),
    text: $cx(styles.card__container__text),
    title: $cx(styles.card__container__title),
    button: $cx(styles.card__container__button),
  };
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <Image
          src={imageUrl}
          alt="image"
          width={410}
          height={410}
          style={{ width: "100%", height: "auto" }}
          className={classes.image}
        />
        <div>
          <WText className={classes.text} weight="medium" color="blue-gray-900">
            {text}
          </WText>
          <WText className={classes.title} weight="bold" color="blue-gray-900">
            {title}
          </WText>
        </div>
        <div>
          <IconButton text={btnText} variant="white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
