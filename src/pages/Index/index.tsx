import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Container, Typography } from "../../components";
import { Header } from "../../Layouts/Header";
import { HeroPage } from "./Layouts/Hero";
import Smilesvg from "../../assets/logo/kili-smile.svg.png";
import cn from "classnames";

const BenefitCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[35rem] w-[28rem] rounded-6xl bg-[#EAEEE2] hover:bg-[#B090EF] p-12 relative shadow-4xl shadow-black/40",
        className
      )}
    >
      <Avatar sizes={70} />
      <Typography variant="title" className="mt-3">
        ML Engineers
      </Typography>
      <div className="mt-2">
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
      </div>
      <Button className="relative -bottom-4">Request a Demo</Button>
    </div>
  );
};

export const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <Container flex align="center">
        <video></video>
      </Container>

      <Container className="bg-surface py-10">
        <Typography variant="subdisplay" align="center">
          See how Kili can help you in your role
        </Typography>

        <div className="flex mt-40 gap-10  justify-center">
          <div className="">
            <BenefitCard />
            <BenefitCard className="-top-[23rem]" />
            <BenefitCard className="-top-[46rem]" />
            <BenefitCard className="-top-[69rem]" />
          </div>
          <div className="">
            <BenefitCard />
            <BenefitCard className="-top-[23rem]" />
            <BenefitCard className="-top-[46rem]" />
          </div>
        </div>
      </Container>

      <Container className="bg-[#162427] pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto" />
          <Typography variant="subdisplay" className="capitalize text-white">
            get started
          </Typography>
          <Typography variant="body" align="center" className="text-white">
            Get started! Build better data, now.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button
              className="flex items-center gap-3 text-white border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
