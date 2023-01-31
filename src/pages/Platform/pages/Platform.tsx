import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import Image from "../../../assets/diagram-02-desktop-4.svg.png";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";
import { BreadCrumb } from "../../../components/BreadCrumb";
import DataSetImage from "../../../assets/kili_product_platform_hero.png.png";


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

      <Container
        isDarkMode
        background
        className="bg-surface pt-[10rem] lg:pt-[8rem] pb-28"
      >
        <BreadCrumb darkMode />
        <Typography
          isDarkMode
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[80rem]"
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

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 pb-40 gap-3"
        flex
        id="augmented-intelligence"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography isDarkMode variant="header" className="font-semibold">
            AUGMENTED INTELLIGENCE
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Augmented Intelligence is the future of work. Our platform provides
            organizations with the tools and capabilities to unlock the full
            potential of their data and workforce through the power of AI. From
            automating repetitive tasks to providing insights that drive
            business growth, our platform empowers your team to work smarter and
            more efficiently.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/037ba66dc0/for-all-data.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        id="data-engineering"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold"
          >
            DATA ENGINEERING
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Data Engineering is the backbone of any successful AI initiative.
            Our platform provides a complete end-to-end solution for data
            engineering, including data ingestion, data preparation, and feature
            engineering. With our platform, you can easily access, clean and
            prepare your data for machine learning, resulting in better and more
            accurate models.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="machine-learning"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            MACHINE LEARNING
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Machine Learning is the core of our platform. We provide a wide
            range of pre-built models and algorithms for a variety of use cases,
            including image and video analysis, natural language processing, and
            predictive modeling. Our platform also provides a powerful model
            builder for building custom models, making it easy for businesses to
            create models that are tailored to their specific needs.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="mlops"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [4]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            MLOPS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            MLOps (Machine Learning Operations) is the practice of managing the
            end-to-end machine learning lifecycle. Our platform provides a
            complete solution for MLOps, including model management, monitoring,
            and deployment. With our platform, you can easily manage and deploy
            models in production, ensuring that your models are always
            up-to-date and accurate.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="decision-intelligence"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [5]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            DECISION INTELLIGENCE
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Decision Intelligence is the ability to turn data into actionable
            insights. Our platform provides a complete solution for Decision
            Intelligence, including data visualization, data labeling, and
            advanced analytics. With our platform, you can easily gain insights
            from your data and make data-driven decisions that drive business
            growth.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="data-visualization"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [6]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            DATA VISUALIZATION
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Data visualization is a key component of Decision Intelligence. Our
            platform provides a wide range of visualization tools and
            capabilities to help you make sense of your data. With our platform,
            you can easily create interactive visualizations that allow you to
            explore your data and gain insights from it.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        flex
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [7]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            DATA LABELING
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Data labeling is the process of adding labels to data for use in
            machine learning models. Our platform provides a complete solution
            for data labeling, including an easy-to-use interface for creating
            and managing labels, as well as a wide range of tools for automating
            the labeling process. With our platform, you can easily create
            high-quality labeled data for use in machine learning models.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      {/* <Container isDarkMode background className="pt-20 pb-10">
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
      </Container> */}

      {/* <Container isDarkMode background className="pt-20">
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
      </Container> */}

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
