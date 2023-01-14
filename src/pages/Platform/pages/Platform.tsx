import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import { HeroPage } from "../Layout/Hero";
import Image from "../../../assets/diagram-02-desktop-4.svg.png";
import FosterIcon from "../../../assets/icons/foster.png";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../../Layouts/Footer";

export const PlatformPage = () => {
  return (
    <>
      <Header darkMode />

      <HeroPage />

      <Container isDarkMode className="pt-20 pb-10">
        <div className="mx-auto">
          <Typography isDarkMode variant="body" className="w-3/4 mx-auto">
            Whether the use case at hand involves computer vision, natural
            language processing, or speech recognition, Kili empowers teams of
            annotators, engineers, data scientists, business stakeholders, and
            anyone in between to build the training data that fits the needs and
            drives the results.
          </Typography>
          <div className="h-[601px] w-fit mx-auto mt-2">
            <img src={Image} className="h-full w-full object-contain hidden lg:block" />
          </div>
        </div>
      </Container>

      <Container isDarkMode className="pt-20">
        <Typography
          variant="header"
          align="center"
          isDarkMode
          className="!font-extrabold"
        >
          Training data platform for Enterprise AI
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="w-1/2 mx-auto mt-5"
        >
          Kili is the platform that accelerates the creation and deployment of
          training data for ML and AI. With Kili, build and deliver training
          data for high performing models at a fraction of the usual time and
          cost.
        </Typography>
      </Container>

      <Container isDarkMode className="pt-60 pb-52">
        <div className="mx-auto flex flex-wrap w-[80%] justify-center gap-8 gap-y-10">
          <div className="w-80 h-48 ">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 leading-[35.2px] -tracking-[0.22px]"
            >
              Foster collaboration
            </Typography>
          </div>

          <div className="w-80 h-48">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 w-60 leading-[35.2px] -tracking-[0.22px] mx-auto"
            >
              Dataset and project management
            </Typography>
          </div>

          <div className="w-80 h-48">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 w-60 leading-[35.2px] -tracking-[0.22px] mx-auto"
            >
              Secure training data hubs
            </Typography>
          </div>

          <div className="w-80 h-48">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 leading-[35.2px] -tracking-[0.22px] mx-auto"
            >
              Continous iterating workflows
            </Typography>
          </div>

          <div className="w-80 h-48">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 w-72 leading-[35.2px] -tracking-[0.22px] mx-auto"
            >
              Control the performance of your model through the quality of your
              data
            </Typography>
          </div>

          <div className="w-80 h-48">
            <div className="h-16 w-16 border border-white grid place-items-center rounded-full mx-auto">
              <img src={FosterIcon} className="h-8 w-8 object-contain" />
            </div>
            <Typography
              isDarkMode
              variant="title"
              align="center"
              className="text-[22px] mt-10 w-60 leading-[35.2px] -tracking-[0.22px] mx-auto"
            >
              Fast labeling powered by AI
            </Typography>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Button darkMode className="mt-5" variant="outline">
            Talk to an expert
          </Button>
        </div>
      </Container>

      <Container isDarkMode background noGutter className="pb-60">
        <Container
          as="div"
          isLightDarkMode
          background
          className="flex items-center gap-3 rounded-2xl h-[50rem] !px-20"
        >
          <div className="w-full">
            <Typography isDarkMode variant="caption">
              SECURITY AND COMPLIANCE
            </Typography>
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold text-[90px] mt-4 !leading-[5rem]"
            >
              Security that scales
            </Typography>
            <Typography variant="body" isDarkMode className="mt-4 w-[36rem]">
              Whatever the size of your organization, our intelligent security
              measures are built to scale. Our rigorous security program is
              informed by the needs of our customers and industry standards,
              giving you certainty that your data is in safe hands.
            </Typography>
            <Button className="flex items-center gap-3 mt-5">
              Sign Up
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <img src={SOCIcon} className="h-full w-full object-contain" />
          </div>
        </Container>
      </Container>

      <Container isLightDarkMode background className="bg-[#162427] pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto" />
          <Typography variant="subdisplay" className="capitalize !text-white">
            get started
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            Get started! Build better data, now.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button
              darkMode
              className="flex items-center gap-3 !text-white border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className={`h-6 w-6 text-white`} />
            </Button>
          </div>
        </div>
      </Container>

      <Footer darkMode />
    </>
  );
};
