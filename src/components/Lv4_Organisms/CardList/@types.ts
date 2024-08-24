export interface CardListProps {
  cards: {
    id: string;
    image: string;
    label: string;
    text: string;
    cardCta: string;
  }[];
}
