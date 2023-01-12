import { ElementType, ComponentPropsWithRef, PropsWithChildren } from "react";

export type Justify =
  | "end"
  | "center"
  | "start"
  | "between"
  | "around"
  | "evenly"

export type Align =
  | "start"
  | "end"
  | "center"
  | "baseline"
  | "stretch"

export type Row = "row" | "col" | "col-reverse" | "row-reverse";

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
};

export type ContainerProps<E extends ElementType> = PolymorphicAsProps<E> & PropsWithChildren<
  ComponentPropsWithRef<E>
>;