import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Testimonial } from "../../../Layouts/Testimonial";
import { Blog } from '../Layout/Blog';


export const KeyCapabilities = () => {
  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pt-[10rem] lg:pt-[8rem] pb-32"
      >
        <BreadCrumb darkMode />
        <Typography
          isDarkMode
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[70rem]"
        >
          The power of AI to transform data
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="capitalize lg:w-[60rem] mx-auto mt-5"
        >
          Welcome to Autogon, where we believe in the power of AI to transform
          data into actionable insights. We understand that data preparation is
          a critical step in the AI process, and that's why we provide
          cutting-edge data preparation tools to help you get the most out of
          your data
        </Typography>
      </Container>

      <Container
        isDarkMode
        background
        className="bg-surface pb-10 lg:pb-40 pt-10"
      >
        {/* <BreadCrumb darkMode /> */}
        <div className="lg:flex gap-10 lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Data Preparation
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/a1314fefc1/explore-and-fix-issues.webp"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Automating the end-to-end process of applying machine learning to
              real-world problems, including automating tasks such as selecting
              the appropriate algorithm, tuning the parameters, and
              preprocessing the data.
            </Typography>

            <div className="lg:flex mt-5 lg:mt-20 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 mt-2 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/a1314fefc1/explore-and-fix-issues.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel darkMode />

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 gap-10 pb-10 lg:pb-40"
        flex
        direction="row-reverse"
        id="auto-ml"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [-]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            AutoML
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            We give our users the flexibility to create and deploy artificial
            intelligence (AI) models and applications without the need for prior
            programming or coding knowledge. We designed these apps to use
            drag-and-drop interfaces, pre-built templates, and other tools to
            make it easy for non-technical users to build and deploy AI models
            and applications, making it easy for businesses and individuals to
            leverage the power of AI without the need for expensive and
            time-consuming development resources.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/94d898c2bb/focus-review.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-10"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [-]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            No-Code AI Apps
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Empowering Non-Technical Users to Create and Deploy Artificial
            Intelligence Models and Applications without the need for prior
            programming or coding knowledge. Autogon is designed to use
            drag-and-drop interfaces, pre-built templates, and other tools to
            make it easy.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/8289083871/quantify-quality.webp"
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
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [-]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Automated Time Series
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Automated time series is a powerful tool for businesses to
            understand and make predictions about their data. This technology
            uses machine learning algorithms to analyze patterns and trends in
            data over time, allowing companies to make informed decisions based
            on insights drawn from their data. One of the key benefits of
            automated time series is the ability to quickly and accurately
            identify important trends and patterns in large amounts of data.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/355881270f/programmatic-error-spotting-1.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse items-center lg:flex-row justify-center pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
      >
        <div className="w-f">
          {/* <Typography isDarkMode variant="body" className="text-[22px]">
            [-]
          </Typography> */}
          {/* <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Orchestrate all your quality strategies with automated workflows
          </Typography> */}
          <Typography isDarkMode variant="body" align="center" className="mt-2 lg:w-[80%] mx-auto">
            Artificial intelligence (AI) has the power to revolutionize the way
            we live and work. It provides us with the ability to analyze large
            amounts of data and draw meaningful insights that support decision
            making. However, the process of creating and deploying AI models and
            applications can be complex and requires technical expertise. This
            is where no-code AI apps come in.
          </Typography>
          <div className="grid place-items-center">
            <Button className="mt-9 mx-auto">Request a demo</Button>
          </div>

        </div>
        {/* <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/3000x3000/795d266d6a/kili_brand_icon_focus_dark.png"
            className="h-full w-full object-contain"
          />
        </div> */}
      </Container>

      <Testimonial isDarkMode />

      {/* <Container isDarkMode background noGutter className=" pb-10 lg:pb-60">
        <Container
          as="div"
          isLightDarkMode
          background
          className="lg:flex items-center gap-3 rounded lg:rounded-2xl lg:h-[50rem] lg:!px-20"
        >
          <div className="w-full pt-12 lg:mt-0">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold lg:text-[90px] lg:mt-4 !leading-[4rem] lg:!leading-[5rem]"
            >
              A qualified workforce for all of your labeling needs
            </Typography>
            <Typography variant="body" isDarkMode className="mt-4 lg:w-[36rem]">
              Data labeling takes time and resources that some organizations
              simply don’t have. That’s why Kili offers annotation services on
              premise or offshore, for adhoc missions or end-to-end projects.
              We’ve taken the time to source the very best so you can focus on
              the rest.
            </Typography>
            <Button className="flex items-center gap-3 mt-5">
              Learn more
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <img src={SOCIcon} className="h-full w-full object-contain" />
          </div>
        </Container>
      </Container> */}

      {/* <Blog /> */}

      <Container
        disableOverflowHidden
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
