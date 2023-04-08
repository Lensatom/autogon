import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Testimonial } from "../../../Layouts/Testimonial";
import { Blog } from "../Layout/Blog";
import {NavLink } from 'react-router-dom';

export const IntegrateAutomate = () => {

  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pb-10 lg:pb-40 pt-[12rem] lg:pt-[8rem]"
      >
        <BreadCrumb darkMode />
        <div className="lg:flex gap-10 lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Simplify your LabelingOps
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/68c38b951d/dataops-1.webp"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Integrate labeling operations with your existing ML stack, easily
              import and export data, create and manage labeling projects, and
              manage the entire training data lifecycle of your ML project on
              Kili. Use the CLI & our SDK to upload and download vast amounts of
              data quickly.
            </Typography>

            <div className="lg:flex mt-9 gap-2">
              <Button><NavLink to='/request'>Request a demo</NavLink></Button>
              <Button
                darkMode
                className="flex items-center mt-2 lg:mt-0 gap-3 mb-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/68c38b951d/dataops-1.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel darkMode />

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse lg:pt-20 gap-10 pb-10 lg:pb-40"
        flex
        direction="row-reverse"
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
            Import & export data effortlessly
          </Typography>
          <Typography isDarkMode variant="body" className="mt-4 w-">
            Integrate directly Amazon, Google, and Microsoft cloud storage to
            automatically start labeling without having to move your data. Track
            all the intermediary changes in your data and export versioned data
            directly in the format of your model (YOLO, PASCAL VOC, etc).
          </Typography>

          <Button className="mt-12"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/8ccebc4de5/import-export-1.webp"
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
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Manage your team at scale
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Easily assign predefined roles (admin, manager, reviewer, labeler)
            to control users’ responsibilities in projects. Authenticate with
            specific identity providers for maximum convenience and security.
            Ensure the highest level of data governance & security.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/001cd75f17/manage-your-team-1.webp"
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
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Automate your MLOps infrastructure
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Use webhooks to take specific actions like starting a model
            training, performing active learning to generate pre-labels or
            versioning. Create a feedback loop between your model experiments
            and newly produced labels. Leverage Kili API and Python SDK to
            connect any ML stack.
          </Typography>

          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/c1a7e12ea3/automate-mlops-infra-2.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Testimonial isDarkMode />

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
