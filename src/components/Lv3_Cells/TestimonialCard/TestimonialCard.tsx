import { WText } from "@/components/Lv1_Atoms";
import { Avatar } from "@/components/Lv2_Molecules";
import { TestimonialCardProps } from "./@types";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  avatar,
  name,
  tagline,
}) => {
  return (
    <div className={styles.TestimonialCard}>
      <WText className={styles.TestimonialCard__text}>{description}</WText>
      <Avatar avatar={avatar} tagline={tagline} name={name} />{" "}
    </div>
  );
};

export default TestimonialCard;
