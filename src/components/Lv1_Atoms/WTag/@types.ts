export type TagColor = "purple-100" | "purple-800";
export type TagWeight = "normal";
export type TagText = "sm";
export type TagtextAlign = "left" | "center";

export interface TagProps {
  children: React.ReactNode;
  size?: TagText;
  className?: string;
  weight: TagWeight;
  color: TagColor;
  textAlign?: TagtextAlign;
}
