namespace SanityResponseLocal {
  export interface FetchHeaderResponse {
    logo: string;
    navLinks: { name: string; href: string }[];
    cta1: string;
    cta2: string;
  }

  export interface FetchHeroResponse {
    title: string;
    text: string;
    accentText: string;
    highlightText: string;
    description: string;
    content: string;
    cta1: string;
    cta2: string;
    image: string;
    imageUrl: string;
  }

  export interface FetchJoinSectionResponse {
    iconTextList: {
      id: string;
      icon: string;
      alt: string;
      width: number;
      height: number;
      text: string;
    }[];
    title: string;
  }

  export interface FetchIdeasSectionResponse {
    label: string;
    title: string;
    highlight: string;
    text: string;
    description: string;
    content: string;
    buttonText: string;
    image: string;
    imageUrl: string;
  }
  export interface FetchTargetSectionResponse {
    label: string;
    title: string;
    highlight: string;
    text: string;
    description: string;
    content: string;
    buttonText: string;
    image: string;
    imageUrl: string;
  }

  export interface FetchToolsSectionResponse {
    label: string;
    title: string;
    description: string;
    image: string;
    imageUrl: string;
  }
  export interface FetchWorkSectionResponse {
    label: string;
    title: string;
    description: string;
    image: string;
    imageUrl: string;
  }
  export interface FetchlevelUpSectionResponse {
    nextLevelRight: {
      label: string;
      title: string;
      text: string;
      cta: string;
    };
    testimonialCard: {
      description: string;
      name: string;
      tagline: string;
      avatar: string;
    };
    image: string;
    imageUrl: string;
  }

  export interface FetchDesignEventsResponse {
    title: string;
    cta: string;
    cards: {
      id: string;
      image: string;
      label: string;
      text: string;
      cardCta: string;
    }[];
  }

  export interface FetchUpperFooterResponse {
    logo: string;
    titles: {
      id: string;
      titleName: string;
      items: {
        id: string;
        itemText: string;
      }[];
    }[];
  }

  export interface FetchLowerFooterResponse {
    text: string;
    icons: {
      id: string;
      icon: string;
      alt: string;
      href: string;
    }[];
  }
}

declare const data: SanityResponseLocal.FetchHeaderResponse;
