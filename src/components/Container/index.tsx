import { ElementType, forwardRef } from "react";
import cn from "classnames";
import { ContainerProps, Justify, Align, Row, Columns, Rows } from "./type";

const defaultElement = "section";


export const Container = forwardRef<any, ContainerProps<any>>((props, ref) => {
  const {
    as,
    className,
    fullWidth,
    fullHeight,
    flex,
    grid,
    justify,
    align,
    columns,
    rows,
    direction,
    noGutter,
    isDarkMode,
    background,
    isLightDarkMode,
    disableOverflowHidden,
    smallGutter,
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

  let gridColumn = {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  };

  let gridRow = {
    none: "grid-cols-none",
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6",
    7: "grid-rows-7",
    8: "grid-rows-8",
    9: "grid-rows-9",
    10: "grid-rows-10",
    11: "grid-rows-11",
    12: "grid-rows-12",
  };

  return (
    <Component
      ref={ref}
      className={cn("", className, {
        flex: flex,
        grid,
        [gridColumn[columns as Columns]]: columns,
        [gridRow[rows as Rows]]: rows,
        "w-screen": fullWidth,
        "h-screen": fullHeight,
        // "px-4 lg:px-28": !noGutter && !smallGutter,
        "px-4 lg:px-12": !noGutter,
        [justifyItems[justify as Justify]]: justify,
        [alignItems[align as Align]]: align,
        [flexDirection[direction as Row]]: direction,
        "!bg-dark-paper": isDarkMode && !background,
        "!bg-dark-surface": isDarkMode && background,
        "!bg-light-dark-surface": isLightDarkMode && background,
        "overflow-hidden": !disableOverflowHidden,
      })}
      {...rest}
    />
  );
});
