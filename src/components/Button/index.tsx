import classNames from "classnames";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, className, darkMode, color = "primary", ...rest }, ref) => {

    let colors = {
      primary: {
        container: {
          light: "bg-primary",
          dark: "bg-[#eaeee2] ",
        },
        outline: {
          light:
            "hover:bg-primary hover:border-primary border-white text-white",
          dark: "hover:bg-primary hover:border-primary border-secondary text-secondary",
        },
      },
      secondary: {
        container: {
          light: "bg-primary",
          dark: ""
        },
        outline: {
          light:
            "hover:bg-primary hover:border-primary border-white text-white",
          dark: "hover:bg-primary hover:border-primary border-secondary text-secondary",
        },
      },
    };

    if (variant === "outline") {
      return (
        <button
          {...rest}
          ref={ref}
          className={`px-4 h-10 min-w-[60px] bg-transparent border  rounded text-[16px] font-inter leading-4 -tracking-[0.16px] hover:text-white hover:bg-secondary hover:border-secondary hover:shadow ${
            darkMode
              ? "border-white text-white"
              : "border-secondary text-secondary"
          } ${className}`}
        >{children}</button>
      );
    }

    return (
      <button
        {...rest}
        ref={ref}
        className={classNames(`px-4 h-10 min-w-[60px] text-neutral rounded text-[16px] font-inter leading-4 -tracking-[0.16px] group`, className, {
          [colors[color].container.dark]: darkMode,
          [colors.primary['container'].light]: !darkMode
        })}
      >{children}</button>
    );
  }
);
