import { Card } from "@/components/Lv3_Cells";
import { $cx } from "@/lib";
import { CardListProps } from "./@types";
import styles from "./CardList.module.scss";

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const classes = {
    cardList: $cx(styles.cardList),
  };
  return (
    <div className={classes.cardList}>
      {cards.map(({ id, image, label, text, cardCta }) => (
        <Card
          key={id}
          text={label}
          title={text}
          imageUrl={image}
          btnText={cardCta}
        />
      ))}
    </div>
  );
};

export default CardList;
