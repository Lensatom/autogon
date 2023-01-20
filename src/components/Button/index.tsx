import classNames from "classnames";
import { forwardRef } from "react";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, darkMode, color = "primary", ...rest }, ref) => {

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
          className={`px-6 py-5 bg-transparent border  rounded-full text-[16px] font-inter leading-4 -tracking-[0.16px] hover:text-neutral hover:bg-primary hover:border-primary hover:shadow ${
            darkMode ? "border-white text-white" : "border-secondary text-secondary"
          } ${className}`}
        />
      );
    }

    return (
      <button
        {...rest}
        ref={ref}
        className={classNames(`px-6 py-5 text-neutral rounded-full text-[16px] font-inter leading-4 -tracking-[0.16px] group`, className, {
          [colors[color].container.dark]: darkMode,
          [colors.primary['container'].light]: !darkMode
        })}
      />
    );
  }
);
