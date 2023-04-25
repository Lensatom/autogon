import { Button, Container, Typography } from "../../../components";
import Lottie from "react-lottie";
import animationData from "../../../assets/images/hero.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Animation from '../../../assets/images/Artificial intelligence.gif'

export const HeroPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container className="bg-screen h-screen flex flex-col justify-between pt-44 lg:pt-[10rem]">
      <Typography
        align="center"
        variant="display"
        className="z-[5] mx-auto lg:w-3/4 text-neutral font-montserrat font-bold"
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
          <div className="flex gap-2 mt-5 justify-center lg:justify-start mb-8 lg:mb-0">
            <a href="https://console.autogon.ai" target="_blank">
              <Button>Case study</Button>
            </a>
            <a href="https://console.autogon.ai" target="_blank">
              <Button className="flex items-center gap-3" variant="outline">
                <a href="http://console.autogon.ai/">Get started</a>
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-1 lg:mt-[-80px]">
          {/* <Lottie 
            options={defaultOptions}
            height={220}
            width={500}
          /> */}
          <img src={Animation} className="w-[80%]" />
        </div>
      </div>
    </Container>
  );
};
