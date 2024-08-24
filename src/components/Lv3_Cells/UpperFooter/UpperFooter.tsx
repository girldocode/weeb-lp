import { FetchUpperFooter } from "@/actions/fetchUpperFooter";
import { Logo, WText } from "@/components/Lv1_Atoms";
import { $cx } from "@/lib";
import styles from "./UpperFooter.module.scss";

const UpperFooter: React.FC = async () => {
  const data = await FetchUpperFooter();

  const classes = {
    upperFooter: $cx(styles.upperFooter),
    container: $cx(styles.upperFooter__container),
    logo: $cx(styles.upperFooter__container__logo),
    sections: $cx(styles.upperFooter__container__sections),
    section: $cx(styles.upperFooter__container__sections__section),
    title: $cx(styles.upperFooter__container__sections__section__title),
    list: $cx(styles.upperFooter__container__sections__section__list),
    item: $cx(styles.upperFooter__container__sections__section__list__item),
    text: $cx(
      styles.upperFooter__container__sections__section__list__item__text
    ),
  };

  return (
    <div className={classes.upperFooter}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo variant="footer" color="blue-gray-900" weight="bold">
            {data.logo}
          </Logo>
        </div>

        <div className={classes.sections}>
          {data.titles.map((section, index) => (
            <div key={index} className={classes.section}>
              <WText
                color="blue-gray-400"
                weight="medium"
                className={classes.title}
              >
                {section.titleName}
              </WText>
              <ul className={classes.list}>
                {section.items.map((item, idx) => (
                  <li key={idx} className={classes.item}>
                    <WText
                      color="blue-gray-900"
                      weight="normal"
                      className={classes.text}
                    >
                      {item.itemText}
                    </WText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
