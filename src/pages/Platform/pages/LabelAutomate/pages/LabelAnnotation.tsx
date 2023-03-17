import { Button, Container, Typography } from "../../../../../components";
import { Header } from "../../../../../Layouts/Header";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../../../Layouts/Footer";
import { BreadCrumb } from "../../../../../components/BreadCrumb";
import { PartnerCarousel } from "../../../../../Layouts/PartnerCarousel";
import { Testimonial } from "../../../../../Layouts/Testimonial";
import { Blog } from "../../../Layout/Blog";
import Lottie from "lottie-react";
import animationData from "../../../../../assets/iRU7KxwKMP.json";


export const LabelAnnotationPage = () => {
  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pb-10 lg:pb-40 pt-[12rem] lg:pt-[8rem]"
      >
        {/* <BreadCrumb darkMode /> */}
        <div className="lg:flex lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] leading-[90%] lg:!text-[86px]"
            >
              Create training datasets fast
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/2339x1666/0054abe91a/annotate-fast.webp"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Annotate all types of unstructured data rapidly and accurately
              with customizable annotation tasks & an interface optimized for
              productivity & quality.
            </Typography>
            <Typography isDarkMode variant="body" className="mt-3">
              Automate labeling to save time with smart tools & model
              predictions.
            </Typography>
            <div className="lg:flex mt-9 gap-2">
              <Button><NavLink to='/request'>Request a demo</NavLink></Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 mt-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/2339x1666/0054abe91a/annotate-fast.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel darkMode />

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 pb-40 gap-3"
        flex
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Customizable interfaces for all your data
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Kili natively supports image, video, text, PDF documents, satellite
            imagery, and conversations. Leverage advanced UX that speeds up
            labeling and prevents tagging errors. Customize interfaces and
            validation rules based on your use case, and labeling process.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
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
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            Powerful workflows for fast & accurate annotation
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Control your labeling queue to prioritize assets, assign assets to
            specific labelers or add validation rules. Set a review pipeline to
            spot inconsistencies and send assets back to the labelers.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
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
            Automation tools to speed-up labeling
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Apply interactive segmentation and tracking to accelerate labeling
            without compromising quality. Leverage your own-model predictions to
            pre-label. Use active learning to focus on human labeling and review
            where it will have the most impact.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
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
            Analytics & Reporting
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Monitor your collaborative data labeling projects to ensure project
            progress and label accuracy at scale. Diagnose productivity and
            quality problems, and take corrective action.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Testimonial isDarkMode />

      <Container isDarkMode background noGutter className="pb-10 lg:pb-60">
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
            <Lottie
              animationData={animationData}
              loop
              className="h-80 mx-auto w-80"
            />
          </div>
        </Container>
      </Container>

      <Blog />

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
