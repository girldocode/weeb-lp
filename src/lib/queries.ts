// internal properties
const _header = `*[_type == "header"]{
      logo,
      navLinks,
      cta1,
      cta2
    }`;

const _hero = `*[_type == "hero"]{
        title,
        text,
        accentText,
        highlightText,
        description,
        content,
        cta1,
        cta2,
        "image": image.asset->url
    }`;

const _joinSection = `
*[_type == "joinSection"] {
  title,
  iconTextList[] {
    id,
    "icon": icon.asset->url, 
    alt,
    height,
    width,
    text
  }
}`;

const _ideasSection = `
*[_type == "ideasSection"] {
  label,
    title,
    highlight,
    text,
    description,
    content,
    buttonText,
    "image":image.asset->url
}`;

const _targetSection = `*[_type == "targetSection"] {
  label,
    title,
    highlight,
    text,
    description,
    content,
    buttonText,
    "image":image.asset->url
}
`;

const _toolsSection = `*[_type == "toolsSection"] {
  label,
    title,
    description,
    "image":image.asset->url
}`;

const _workSection = `*[_type == "workSection"] {
  label,
    title,
    description,
    "image":image.asset->url
}
`;

const _levelUpSection = `*[_type == "levelUpSection"] {
  nextLevelRight {
      label,
      title,
      text,
      cta,
      
    },
    "image": image.asset->url,
    testimonialCard {
      description,
      name,
      tagline,
      "avatar": avatar.asset->url
    }
}`;

const _designEvents = `*[_type == "designEvents"] {
title,
  cta,
  cards[] {
  id,
     "image": image.asset->url,
    label,
    text,
    cardCta,
    }
}
`;

const _upperFooter = `
*[_type == "upperFooter"] {
logo,
  titles[] {
    id,
    titleName,
     items[]{
    id,
    itemText,
     },
    }
}
`;

const _lowerFooter = `
*[_type == "lowerFooter"] {
text,
  icons[]{
    id,
    "icon":icon.asset->url,
    alt,
    href
  } 
}
`;

export const $queries = {
  _header,
  _hero,
  _joinSection,
  _ideasSection,
  _targetSection,
  _toolsSection,
  _workSection,
  _levelUpSection,
  _designEvents,
  _upperFooter,
  _lowerFooter,
};
