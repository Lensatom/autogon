import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import Image from "../../../assets/diagram-02-desktop-4.svg.png";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";
import { BreadCrumb } from "../../../components/BreadCrumb";
import DataSetImage from "../../../assets/kili_product_platform_hero.png.png";
import { AugmentedIntelligence, DataEngineering, DataLabelling, DataVisualization, DecisionIntelligence, MLOPs } from "./sections";


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
      <Header />

      <Container
        background
        className="bg-screen pt-[10rem] lg:pt-[8rem] pb-28"
      >
        <BreadCrumb />
        <Typography
          align="center"
          variant="display"
          className="mx-auto mt-36 lg:w-[80%]"
        >
          The most advanced platform for enterprise AI
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="capitalize lg:w-[50rem] mx-auto mt-5"
        >
          Welcome to our AI Cloud Platform, the most advanced platform for
          enterprise AI. Our platform makes it easy for businesses of all sizes
          to benefit from the power of AI by providing a simple, scalable and
          secure solution for building, deploying and managing machine learning
          models.
        </Typography>
      </Container>

      <AugmentedIntelligence />

      <DataEngineering />

      <MLOPs />

      <DecisionIntelligence />

      <DataVisualization />

      <DataLabelling /><br /><br /><br />

      <Container
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
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
          <div className="flex mx-auto w-fit gap-2 mt-16 mb-8 lg:mb-0">
            <Button>See Demo</Button>
            <Button
              className="flex items-center gap-3 !text-white hover:!border-secondary !border-white"
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
