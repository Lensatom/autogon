import { ElementType, forwardRef } from "react";
import { TypographyProps, Colors } from "./type";
import cn from "classnames";

const defaultElement = "p";
type AlignText = "center" | "left" | "start" | "end" | "justify" | "right";

export const Typography = forwardRef(
  (
    {
      children,
      as,
      align,
      gutterBottom,
      color = "default",
      paragraph,
      variant,
      isDarkMode,
      disableUnderline,
      ...rest
    }: TypographyProps<any>,
    ref
  ) => {
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
        " text-4xl lg:text-7xl font-montserrat font-bold",
      subdisplay:
        " text-2xl lg:text-6xl font-montserrat font-bold",
      header:
        "font-lora text-2xl lg:text-4xl font-semibold lg:!leading-[50px]",
      title: "text-xl uppercase font-montserrat md:text-2xl lg:text-3xl font-medium",
      body: "text-[18px] font-hind leading-[28.8px] -tracking-[0.18px]",
      link: "text-[16px] font-hind leading-[19.2px] -tracking-[0.16px] cursor-pointer",
      caption:
        "text-[12px] font-hind font-normal leading-[19.2px] tracking-normal",
      text: "",
    };

    const transformColorVariable = (color: Colors): string =>
      colorTransformation[color] || color;

    let alignText = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      start: "text-start",
      end: "text-end",
      justify: "text-justify",
    };

    return (
      <Component
        {...rest}
        ref={ref}
        className={cn("", rest.className, {
          "mb-[0.35em]": gutterBottom,
          "mb-[16px]": paragraph,
          "hover:underline": !disableUnderline && variant === "link",
          // [transformColorVariable(color)]: color,
          [alignText[align as AlignText]]: align,
          [fontSizeVariant[variant]]: variant,
          "text-white": isDarkMode,
          "text-white/70": isDarkMode && variant === "body",
          "text-neutral": !isDarkMode
        })}
      >
        {children}
      </Component>
    );
  }
);
