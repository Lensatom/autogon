import { Button, Container, Typography } from "../../../components";
import Lottie from "lottie-react";
import animationData from "../../../assets/iRU7KxwKMP.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Animation from '../../../assets/images/anime.gif'

export const HeroPage = () => {

  return (
    <Container className="bg-screen h-screen flex flex-col justify-between pt-44 lg:pt-[10rem]">
      <Typography
        align="center"
        variant="display"
        className="z-[5] mx-auto lg:w-3/4 mb-8 text-neutral font-montserrat font-bold"
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
        <div className="flex-1 md:mt-[-100px]">
          <img src={Animation} alt='Loading...' className='w-[80%] mx-auto' />
        </div>
      </div>
    </Container>
  );
};
