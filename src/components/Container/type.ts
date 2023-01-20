import { ElementType, ComponentPropsWithRef, PropsWithChildren } from "react";

export type Justify =
  | "end"
  | "center"
  | "start"
  | "between"
  | "around"
  | "evenly";

export type Align = "start" | "end" | "center" | "baseline" | "stretch";

export type Row = "row" | "col" | "col-reverse" | "row-reverse";
export type Columns = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
export type Rows = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
  

type PolymorphicAsProps<E extends ElementType> = {
  as?: E | keyof HTMLElementTagNameMap;
  tabIndex?: any;
  fullHeight?: boolean;
  fullWidth?: boolean;
  noGutter?: boolean;
  flex?: boolean;
  direction?: Row;
  justify?: Justify;
  align?: Align;
  isDarkMode?: boolean;
  background?: boolean;
  isLightDarkMode?: boolean;
  disableOverflowHidden?: boolean;
  grid?: boolean,
  columns?: Columns,
  rows?: Rows
};

export type ContainerProps<E extends ElementType> = PolymorphicAsProps<E> &
  PropsWithChildren<ComponentPropsWithRef<E>>;
