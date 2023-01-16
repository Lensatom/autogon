import { Button, Container, Typography } from "../../../components";
import Lottie from "react-lottie";
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
    <Container className="bg-surface pt-[8rem] pb-28">
      <Typography align="center" variant="display" className="mx-auto">
        Labeling Platform for High-Quality Training Data
      </Typography>
      <div className="flex flex-col lg:flex-row w-full items-center mt-28 mb-10">
        <div className="flex-1 flex flex-col-reverse lg:flex-col w-full lg:w-fit lg:pl-20">
          <Typography
            variant="body"
            align="center"
            className="capitalize lg:w-[28rem] lg:text-left"
          >
            One tool to label, find and fix issues, simplify DataOps, and
            dramatically accelerate the build of reliable AI.
          </Typography>
          <div className="flex lg:gap-2 mt-5 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button className="flex items-center gap-3" variant="outline">
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
        <div className="flex-1">
          {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
        </div>
      </div>
    </Container>
  );
};
