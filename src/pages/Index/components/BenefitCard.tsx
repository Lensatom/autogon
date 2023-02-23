import Draggable from "react-draggable";
import { BenefitCardProps } from "../../../interfaces";
import cn from "classnames";
import { Avatar, Button, Typography } from "../../../components";

export const BenefitCard = ({
  className,
  position,
  contents,
  src,
  active,
  onClick,
  bounds,
}: BenefitCardProps) => {
  return (
    <Draggable bounds={bounds}>
      <div
        onClick={onClick}
        className={cn(
          "h-[27rem] w-[35rem] rounded-6xl bg-screen p-12 absolute shadow-4xl cursor-move select-none",
          className,
          { "bg-accent z-30": active }
        )}
      >
        <div className="h-full relative">
          <div className="flex items-start gap-5">
            <Avatar src={src} sizes={75} />
            <Typography variant="title" className="font-extrabold">
              {position}
            </Typography>
          </div>
          <div>
            <div className="mt-4">
              <ul className="">
                {contents.map((content, index) => (
                  <li key={index}>
                    <Typography className="my-2" variant="body">
                      {content}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Button className="absolute bottom-10">Request a Demo</Button>
      </div>
    </Draggable>
  );
};
