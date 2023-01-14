import { ElementType, forwardRef } from "react";
import cn from "classnames";
import { ContainerProps, Justify, Align, Row } from "./type";

const defaultElement = "section";


export const Container = forwardRef<any, ContainerProps<any>>((props, ref) => {
  const {
    as,
    className,
    fullWidth,
    fullHeight,
    flex,
    justify,
    align,
    direction,
    noGutter,
    isDarkMode,
    background,
    isLightDarkMode,
    ...rest
  } = props;

  const Component = as ?? defaultElement;

  let justifyItems = {
    end: "justify-end",
    center: "justify-center",
    start: "justify-start",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  let alignItems = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  };

  let flexDirection = {
    row: "flex-row",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
    "row-reverse": "flex-row-reverse",
  };

  return (
    <Component
      ref={ref}
      className={cn("", className, {
        flex: flex,
        "w-screen": fullWidth,
        "h-screen": fullHeight,
        "px-4 lg:px-12": !noGutter,
        [justifyItems[justify as Justify]]: justify,
        [alignItems[align as Align]]: align,
        [flexDirection[direction as Row]]: direction,
        "!bg-dark-paper": isDarkMode && !background,
        "!bg-dark-surface": isDarkMode && background,
        "!bg-light-dark-surface": isLightDarkMode && background,
      })}
      {...rest}
    />
  );
});
