import { FetchDesignEvents } from "@/actions/fetchDesignEvents";
import { WText } from "@/components/Lv1_Atoms";
import { IconButton } from "@/components/Lv2_Molecules";
import { CardList } from "@/components/Lv4_Organisms";
import { $cx } from "@/lib";
import styles from "./DesignEvents.module.scss";
const DesignEvents: React.FC = async () => {
  const data = await FetchDesignEvents();

  const classes = {
    section: $cx(styles.section),
    container: $cx(styles.section__container),
    upper: $cx(styles.section__container__upper),
    title: $cx(styles.section__container__upper__title),
    lower: $cx(styles.section__container__lower),
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.upper}>
          <WText
            color="blue-gray-900"
            weight="extrabold"
            className={classes.title}
          >
            {data.title}
          </WText>
          <IconButton text={data.cta} variant="white" />
        </div>
        <div className={classes.lower}>
          <CardList cards={data.cards} />
        </div>
      </div>
    </section>
  );
};

export default DesignEvents;
