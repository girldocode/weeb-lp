import { FontSize } from "../WText/@types";

export type ButtonVariant = "filled" | "sm" | "outlined";
export type ButtonColor = "white" | "purple-800";
export type ButtonWeight = "medium";
export type ButtonText = FontSize;
export type textAlign = "center";

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonText;
  variant: ButtonVariant;
  className?: string;
  weight: ButtonWeight;
  color: ButtonColor;
  textAlign: textAlign;
}
