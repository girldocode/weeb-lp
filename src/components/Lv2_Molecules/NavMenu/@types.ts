export type NavColor = "white";
export type NavWeight = "medium";
export type NavText = "center";
export type TextSize = "base";

export interface NavMenuProp {
  navLinks: { name: string; href: string }[];
  children?: React.ReactNode;
  className?: string;
  weight: NavWeight;
  size: TextSize;
  color: NavColor;
  textAlign: NavText;
  src?: string;
  imageWidth?: number;
  imageHeight?: number;
}
