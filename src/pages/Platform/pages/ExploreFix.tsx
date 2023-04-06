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
import { AutomatedTimeSeries, AutoML, DataPreparation, DragNDrop } from "./sections";
import Screenshot from '../../../assets/images/screenshot2.png';
import NoCodeAIApp from "./sections/NoCodeAIApp";
import { NavLink } from "react-router-dom";


export const KeyCapabilities = () => {
  return (
    <>
      <Header />

      <Container
        background
        className="bg-screen pt-[10rem] lg:pt-[8rem] pb-32"
      >
        <BreadCrumb />
        <Typography
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[60%] pt-24"
        >
          The power of AI to transform data
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="capitalize lg:w-[50%] mx-auto mt-5"
        >
          Welcome to Autogon, where we believe in the power of AI to transform
          data into actionable insights. We understand that data preparation is
          a critical step in the AI process, and that's why we provide
          cutting-edge data preparation tools to help you get the most out of
          your data
        </Typography>
      </Container>

      <Container
        background
        id=""
        className="bg-screen pb-10 lg:pb-40 pt-10"
      >
        {/* <BreadCrumb darkMode /> */}
        <div className="lg:flex gap-10 lg:mt-5">
          <div className="w-[95%]">
            <Typography variant="header" className="font-semibold">
              Data Preparation
            </Typography>
            <img
              src={Screenshot}
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography variant="body" className="mt-6">
              Automating the end-to-end process of applying machine learning to
              real-world problems, including automating tasks such as selecting
              the appropriate algorithm, tuning the parameters, and
              preprocessing the data.
            </Typography>

            <div className="flex mt-5 lg:mt-9 gap-2">
              <Button><NavLink to='/request'>Request a demo</NavLink></Button>
              <Button
                className="flex items-center gap-3 mb-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src={Screenshot}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel />

      <AutoML />

      <DragNDrop />

      <DataPreparation />

      <AutomatedTimeSeries />

      <NoCodeAIApp /><br />

      <Container
        disableOverflowHidden
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
        <div className="">
          <img src={Smilesvg} className="relative mx-auto h-20 w-20 mb-10" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography
            variant="body"
            align="center"
            className="!text-white mt-3"
          >
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
