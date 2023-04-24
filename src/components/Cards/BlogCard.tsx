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
      <div className="h-[650px] rounded-xl w-[22rem] bg-white shadow-md overflow-hidden relative ">
        <div className="h-[250px] rounded-tl-xl rounded-tr-xl overflow-hidden snap-center">
          <img src={src} className="h-full w-full object-cover" />
        </div>
        <div className="p-4 h-[400px]">
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
          <div className="overflow-hidden h-3/4">
            {children}
          </div>
        </div>
        <div className="absolute left-0 bottom-0 p-3 w-full bg-white">
          <Button
            className="flex items-center gap-3 mt-0 !bg-primary border-none"
            onClick={onClick}
          >
            {buttonText}
            {IconComponent}
          </Button>
        </div>
      </div>
    </div>
  );
};