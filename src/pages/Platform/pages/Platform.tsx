import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import { HeroPage } from "../Layout/Hero";
import Image from "../../../assets/diagram-02-desktop-4.svg.png";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../../Layouts/Footer";

type IconSectionTypes = {
  src: string;
  title: string;
};

const IconSection = ({ src, title }: IconSectionTypes) => {
  return (
    <div className="mb-16">
      <img
        src={src}
        className="max-w-[64px] object-contain mx-auto mb-4"
        loading="lazy"
        alt={title}
      />
      <Typography
        isDarkMode
        variant="title"
        align="center"
        className="text-[22px] leading-[35.2px] -tracking-[0.22px]"
      >
        {title}
      </Typography>
    </div>
  );
};
// TODO: carousel
export const PlatformPage = () => {
  let iconsSections = [
    {
      src: "https://a.storyblok.com/f/139616/x/215a2f39bd/foster.svg",
      title: "Foster collaboration",
    },
    {
      src: "https://a.storyblok.com/f/139616/x/67bc799aee/dataset.svg",
      title: "Dataset and project management",
    },
    {
      src: "https://a.storyblok.com/f/139616/x/37326a836d/secure.svg",
      title: "Secure training data hubs",
    },
    {
      src: "https://a.storyblok.com/f/139616/x/4b5c895fa5/workflows.svg",
      title: "Continous iterating workflows",
    },
    {
      src: "https://a.storyblok.com/f/139616/x/65f2fe8908/ai.svg",
      title:
        "Control the performance of your model through the quality of your data",
    },
    {
      src: "https://a.storyblok.com/f/139616/x/a9bf9ed871/storage.svg",
      title: "Fast labeling powered by AI",
    },
  ];

  return (
    <>
      <Header darkMode />

      <HeroPage />

      <Container isDarkMode background className="pt-20 pb-10">
        <div className="lg:mx-auto">
          <Typography isDarkMode variant="body" className="lg:w-3/4 mx-auto">
            Whether the use case at hand involves computer vision, natural
            language processing, or speech recognition, Kili empowers teams of
            annotators, engineers, data scientists, business stakeholders, and
            anyone in between to build the training data that fits the needs and
            drives the results.
          </Typography>
          <div className="h-[601px] w-fit mx-auto mt-2">
            <img
              src={Image}
              className="h-full w-full object-contain hidden lg:block"
            />
            <img
              src="https://a.storyblok.com/f/139616/x/7c4a30c66d/diagram-02-mobile-3.svg"
              className="h-full w-full object-contain lg:hidden"
            />
          </div>
        </div>
      </Container>

      <Container isDarkMode background className="pt-20">
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
          className="lg:w-1/2 mx-auto mt-5"
        >
          Kili is the platform that accelerates the creation and deployment of
          training data for ML and AI. With Kili, build and deliver training
          data for high performing models at a fraction of the usual time and
          cost.
        </Typography>
      </Container>

      <Container
        isDarkMode
        background
        className="lg:pt-40 pt-10 lg:pb-40 pb-20"
      >
        <div className="lg:mx-auto grid grid-cols-2 lg:grid-cols-3 lg:w-[80%] lg:gap-8 lg:gap-y-10">
          {iconsSections.map((item) => (
            <IconSection src={item.src} title={item.title} />
          ))}
        </div>
        <div className="lg:mt-5 flex justify-center">
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
          className="lg:flex items-center gap-3 rounded lg:rounded-2xl lg:h-[50rem] lg:!px-20"
        >
          <div className="w-full pt-12 lg:mt-0">
            <Typography isDarkMode variant="caption">
              SECURITY AND COMPLIANCE
            </Typography>
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold lg:text-[90px] lg:mt-4 !leading-[4rem] lg:!leading-[5rem]"
            >
              Security that scales
            </Typography>
            <Typography variant="body" isDarkMode className="mt-4 lg:w-[36rem]">
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

      <Container isLightDarkMode background className="bg-[#162427] pb-28 pt-28">
        <div className="">
          <img src={Smilesvg} className="relative mx-auto h-20 w-20 mb-5" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>See Demo</Button>
            <Button
              className="flex items-center gap-3 !text-white hover:!border-primary !border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </Container>

      <Footer darkMode />
    </>
  );
};
