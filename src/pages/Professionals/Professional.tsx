import { Button, Container, Typography } from "../../components";
import { Header } from "../../Layouts/Header";
// import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../Layouts/Footer";
import { BreadCrumb } from "../../components/BreadCrumb";
// import { PartnerCarousel } from "../../Layouts/PartnerCarousel";
// import { Testimonial } from "../../Layouts/Testimonial";
// import { Blog } from "../Platform/Layout/Blog";
import { BsLink45Deg } from "react-icons/bs";
import { useWindowScrollPositions } from "../../hooks/useWindowScroll";
import classNames from "classnames";
import {NavLink } from 'react-router-dom';

const ResourcePoints = ({ index, body }: { index: string; body: string }) => {
  return (
    <Container
      noGutter
      isDarkMode
      flex
      align="center"
      className="gap-5 rounded-full py-2 pl-2 lg:pr-10 mb-5 lg:mb-10 pr-5 w-fit"
    >
      <div className="h-10 w-10 rounded-full grid place-items-center bg-[#B090EF]">
        {index}
      </div>
      <Typography isDarkMode variant="body">
        {body}
      </Typography>
    </Container>
  );
};

export const ProfessionalService = () => {
  const { scrollY } = useWindowScrollPositions();

  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pt-[12rem] lg:pt-[8rem] pb-10 lg:pb-40 "
      >
        <BreadCrumb darkMode />
        <div className="lg:flex gap-12 lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Augment my team
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/x/f5eb489f54/workforce-hero.svg"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Scale your project with our expert labeling workforce, fully
              managed with tasked based metrics.
            </Typography>
            <Typography isDarkMode variant="body" className="mt-4">
              Easily ramp up your project management & ML teams at scale with
              Kili’s experts.
            </Typography>

            <div className="lg:flex mt-12">
              <Button><NavLink to='/request'>Request a demo</NavLink></Button>
            </div>
          </div>
          <div className="w-[70%] hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/x/f5eb489f54/workforce-hero.svg"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      {/* <PartnerCarousel darkMode /> */}

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 gap-10 pb-10 lg:pb-40"
        flex
        direction="row-reverse"
        id="from-design"
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
            From design to deployment
          </Typography>
          <Typography isDarkMode variant="body" className="mt-4 w-">
            Kili manages the execution, from design to deployment.
          </Typography>

          <Button className="mt-12"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/661x621/6cf4c9ecdd/fully-managed-service.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-10"
        flex
        id="trained-workforce"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            A trained workforce
          </Typography>
          <Typography isDarkMode variant="body" className="mt-4 w-">
            Our professionally trained and dedicated workforce handles the
            execution of adhoc labeling jobs.
          </Typography>

          <Button className="mt-6"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/661x601/9700f20ec3/task-based-workforce.webp"
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
        id="data-centric"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Data Centric AI & Labeling experts
          </Typography>
          <Typography isDarkMode variant="body" className="mt-4 w-">
            ML engineers, who are experts in DCAI and Labeling, to accelerate &
            transfer knowledge; Data engineers to help setup workflows, and
            Labeling project managers to ship your projects to production
            successfully.
          </Typography>

          <Button className="mt-6"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/661x601/9700f20ec3/task-based-workforce.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface pb-40 gap-3"
        // direction="row-reverse"
      >
        <div className="flex flex-col lg:flex-row lg:w-[70rem] mx-auto gap-8">
          <div>
            <Typography
              isDarkMode
              variant="title"
              className="lg:w-[40rem] font-semibold text-[75px] leading-[100%]"
            >
              The right resources at the right time
            </Typography>
            <Typography isDarkMode variant="body" className="mt-4 lg:w-[35rem]">
              Kili is designed to support companies at every stage in the
              process of building responsible AI, with expertise across data
              annotation types, labeling tasks, and specific use cases.
            </Typography>
            <Button className="flex items-center gap-3 mt-5">
              Download the whitepaper
              <BsLink45Deg className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div>
            <ResourcePoints index="1" body="The right level of expertise" />
            <ResourcePoints index="2" body="Mindful of your data sensitivity" />
            <ResourcePoints index="3" body="Uncompromising quality" />
            <ResourcePoints index="4" body="Productive and cost effective" />
            <ResourcePoints index="5" body="Responsible" />
          </div>
        </div>
      </Container>

      {/* <Testimonial isDarkMode /> */}

      {/* <Container isDarkMode background noGutter className="pb-60">
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

      <Container disableOverflowHidden isLightDarkMode background className="!bg-gray-800 pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto" />
          <Typography variant="subdisplay" align="center" className="capitalize !text-white">
            <a href="http://console.autogon.ai/">Get started</a>
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            <a href="http://console.autogon.ai/">Get started</a>! Build better data, now.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button><NavLink to='/request'>Request a demo</NavLink></Button>
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
