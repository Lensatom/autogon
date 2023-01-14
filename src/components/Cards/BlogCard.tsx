import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BlogCardProps } from "../../interfaces";
import { Button } from "../Button";
import { Typography } from "../Typography";

export const BlogCard = ({ caption, src, title }: BlogCardProps) => {
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
            className="capitalize !text-[32px] mt-1 font-extrabold !leading-10"
          >
            {title}
          </Typography>
        </div>
        <Button
          className="flex items-center gap-3 !bg-[#EAEEE2] border-none absolute bottom-5 left-4"
          variant="outline"
        >
          Read more
          <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};