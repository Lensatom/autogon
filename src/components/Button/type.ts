import { ReactNode } from "react";

export type ButtonProps = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * @ignore
   */
  type?: "button" | "reset" | "submit";
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: "contained" | "outlined" | "text" | string;
  /**
   * trigger button click
   */
  onClick?: () => void,
  darkMode?: boolean,
  color?: "secondary" | "primary"
};