import { ElementType } from "react";
import { TypographyProps, Colors } from "./type";
import cn from "classnames";

const defaultElement = "p";

export const Typography = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  align,
  gutterBottom,
  color = "default",
  paragraph,
  variant,
  ...rest
}: TypographyProps<E>) => {
  const Component = as ?? defaultElement;

  const colorTransformation = {
    primary: "!primary",
    textPrimary: "!text-primary",
    secondary: "!secondary",
    textSecondary: "!text-secondary",
    tertiary: "!tertiary",
    textTertiary: "!text-tertiary",
    default: "text-gray-400",
    error: "!text-red-400",
    white: "!text-white",
  };

  const fontSizeVariant = {
    display:
      "text-[97px] font-roboto font-medium leading-[140px] -tracking-[2.8px] text-neutral",
    header:
      "font-roboto text-[78px] font-medium leading-[100.8px] -tracking-[2.24px] text-neutral",
    title: "font-roboto text-[33px] leading-[52.8px] text-neutral font-medium",
    body: "text-[18px] font-roboto leading-[28.8px] -tracking-[0.18px] text-neutral",
    link: "text-[16px] font-roboto leading-[19.2px] -tracking-[0.16px] text-neutrals",
    caption:
      "text-[12px] font-inter font-normal leading-[19.2px] tracking-normal text-neutral",
    text: "",
  };

  const transformColorVariable = (color: Colors): string =>
    colorTransformation[color] || color;

  return (
    <Component
      {...rest}
      className={cn("", rest.className, {
        "mb-[0.35em]": gutterBottom,
        "mb-[16px]": paragraph,
        // [transformColorVariable(color)]: color,
        [`text-${align}`]: align,
        [fontSizeVariant[variant]]: variant,
      })}
    >
      {children}
    </Component>
  );
};
