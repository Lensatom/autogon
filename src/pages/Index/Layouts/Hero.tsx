import { Button, Container, Typography } from "../../../components";
import Lottie from "lottie-react";
import animationData from "../../../assets/lf30_editor_22k2biyf.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

export const HeroPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container className="bg-surface pt-[12rem] lg:pt-[8rem] lg:pb-28">
      <Typography align="center" variant="display" className="mx-auto">
        Artificial Intelligence Platform for Creatives
      </Typography>
      <div className="flex flex-col-reverse lg:flex-row w-full items-center mb-10">
        <div className="flex-1 flex flex-col-reverse lg:flex-col w-full lg:w-fit lg:pl-20">
          <Typography
            variant="body"
            align="center"
            className="capitalize lg:w-[28rem] lg:text-left"
          >
            Unlock the power of advanced decision making with Autogon's
            cutting-edge AI technology, designed to enhance efficiency and drive
            results.
          </Typography>
          <div className="flex lg:gap-2 mt-5 mb-8 lg:mb-0">
            <Button>Case study</Button>
            <Button className="flex items-center gap-3" variant="outline">
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Lottie
            animationData={animationData}
            loop
            className="h-80 mx-auto w-80"
          />
        </div>
      </div>
    </Container>
  );
};
