import { Button, Container, Typography } from "../../../components";
import Lottie from "lottie-react";
import animationData from "../../../assets/9gjZm6jqpK.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const HeroPage = () => {

  return (
    <Container className="bg-surface pt-[12rem] lg:pt-[12rem]">
      <Typography
        align="center"
        variant="display"
        className="mx-auto w-[85%] mb-8"
      >
        Artificial Intelligence Platform for Creatives
      </Typography>
      <div className="flex flex-col-reverse lg:flex-row w-full items-center">
        <div className="flex-1 flex flex-col-reverse lg:flex-col w-full lg:w-fit lg:pl-20">
          <Typography
            variant="body"
            align="center"
            className="capitalize lg:w-[30rem] lg:text-left"
          >
            Unlock the power of advanced decision making with Autogon's
            cutting-edge AI technology, designed to enhance efficiency and drive
            results.
          </Typography>
          <div className="flex lg:gap-2 mt-5 mb-8 lg:mb-0">
            <Button>Case study</Button>
            <a href="https://console.autogon.ai" target="_blank">
              <Button className="flex items-center gap-3" variant="outline">
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Lottie
            animationData={animationData}
            loop
            className="h-[3orem] mx-auto w-[3orem]"
          />
        </div>
      </div>
    </Container>
  );
};
