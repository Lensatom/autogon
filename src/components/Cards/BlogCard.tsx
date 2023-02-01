import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BlogCardProps } from "../../interfaces";
import { Button } from "../Button";
import { Typography } from "../Typography";
import cn from 'classnames'

export const BlogCard = ({
  caption,
  src,
  title,
  Icon = ArrowTopRightOnSquareIcon,
  buttonText = "Read more",
  className,
  titleClass,
  children,
  onClick
}: BlogCardProps) => {
  let IconComponent = Icon ? <Icon className="h-6 w-6" /> : null;

  return (
    <div className="cursor-pointer select-none w-fit">
      <div className="h-[33rem] rounded-xl w-[22rem] bg-white shadow-md overflow-hidden relative ">
        <div className="h-[40%] rounded-tl-xl rounded-tr-xl overflow-hidden snap-center">
          <img src={src} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <Typography variant="caption" className="uppercase">
            {caption}
          </Typography>
          <Typography
            variant="title"
            className={cn(
              "capitalize mt-1",
              titleClass 
            )}
          >
            {title}
          </Typography>
          {children}
        </div>
        <Button
          className="flex items-center gap-3 !bg-primary border-none absolute bottom-5 left-4"
          onClick={onClick}
        >
          {buttonText}
          {IconComponent}
        </Button>
      </div>
    </div>
  );
};