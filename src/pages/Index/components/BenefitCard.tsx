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
          "h-[35rem] w-[28rem] rounded-6xl bg-[#EAEEE2]  p-12 absolute shadow-4xl cursor-move select-none",
          className,
          { "bg-[#B090EF] z-30": active }
        )}
      >
        <div className="h-full relative">
          <Avatar src={src} sizes={75} />
          <Typography variant="title" className="mt-3 font-extrabold">
            {position}
          </Typography>
          <div className="mt-2">
            <ul className="list-disc">
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
        <Button className="absolute bottom-10">Request a Demo</Button>
      </div>
    </Draggable>
  );
};
