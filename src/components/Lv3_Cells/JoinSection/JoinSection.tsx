import { FetchJoinSection } from "@/actions/fetchJoinSection";
import { WText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import IconTextList from "../IconTextList/IconTextList";
import styles from "./JoinSection.module.scss";

const JoinSection: React.FC = async () => {
  const data = await FetchJoinSection();

  const classes = {
    joinSection: $cx(styles.joinSection),
    joinContent: $cx(styles.joinSection__joinContent),
    title: $cx(styles.joinSection__joinContent__title),
    Icons: $cx(styles.joinSection__joinContent__Icons),
  };

  return (
    <section className={classes.joinSection}>
      <div className={classes.joinContent}>
        <div>
          <WText
            as="h1"
            color="white"
            weight="extrabold"
            textAlign="center"
            className={classes.title}
          >
            {data.title}
          </WText>
        </div>
        <div className={classes.Icons}>
          <IconTextList iconTextList={data.iconTextList} />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
