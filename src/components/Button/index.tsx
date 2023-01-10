import { forwardRef } from "react";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    if (props.variant === "outline") {
      return (
        <button
          {...props}
          ref={ref}
          className={`px-6 py-5 bg-transparent border border-secondary text-secondary rounded-full text-[16px] font-inter leading-4 -tracking-[0.16px] ${props.className}`}
        />
      );
    }

    return (
      <button
        {...props}
        ref={ref}
        className={`px-6 py-5 bg-primary text-neutral rounded-full text-[16px] font-inter leading-4 -tracking-[0.16px] ${props.className}`}
      />
    );
  }
);
