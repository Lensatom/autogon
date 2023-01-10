import { AvatarProps } from "./type";

export const Avatar = ({
  alt,
  className,
  src = "https://www.w3schools.com/howto/img_avatar.png",
  square,
  imgContainerClass,
  sizes = 38,
}: AvatarProps) => {
  return (
    <div
      style={{
        height: sizes,
        width: sizes,
      }}
      className={`h-[${sizes}px] w-[${sizes}px]  ${
        square ? "rounded-xl" : "rounded-full"
      }  ${imgContainerClass ?? ""}`}
    >
      <img
        src={src}
        alt={`${alt ?? ""} avatar`}
        className={`w-full h-full object-cover ${
          square ? "rounded-xl" : "rounded-full"
        } ${className ?? ""}`}
      />
    </div>
  );
};
