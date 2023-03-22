import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Footer } from "../../../Layouts/Footer";
import { NavLink } from "react-router-dom";

export const Blog = () => {
  const [query, setQuery] = useState("");

  let blogs = [
    {
      // caption: "upcoming event",
      src: "//a.storyblok.com/f/139616/1200x800/d541fc2ca7/build-vs-buy-your-data-labeling-solution.png/m/767x0",
      title: "Data Labeling Platform: Build vs. Buy",
      content:
        "In this article, we'll cover the cost and time investment involved, as well as the benefits and draw...",
      Icon: null,
      buttonText: "Read",
    },
    {
      // caption: "ON-DEMAND EVENT",
      src: "//a.storyblok.com/f/139616/5000x3000/c6439a1600/v1-1.jpg/m/767x0",
      title: "Our Journey to Cleaning the Oceans with Machi...",
      Icon: null,
      content:
        "Remember the plastic continent floating in the Pacific that shocked the world 3 years ago? Research ...",
      buttonText: "Read",
    },
    {
      // caption: "ON-DEMAND EVENT",
      src: "//a.storyblok.com/f/139616/1200x628/7c485e8b33/kilixmicrosoftazuremarketplace.jpg/m/767x0",
      title: "Kili is now available on Microsoft Azure Mark...",
      Icon: null,
      content:
        "Let’s face it, though: nobody likes the constraints imposed by on-prem. Having to talk your IT  depa...",
      buttonText: "Read",
    },
    {
      // caption: "ON-DEMAND EVENT",
      src: "//a.storyblok.com/f/139616/1200x800/09e6d39032/kili-technology-x-yolo-v7/m/767x0",
      title: "Using Kili Technology to work with YOLO v7",
      Icon: null,
      content:
        "To be able to train a model using YOLO v7, you have to create a data.yaml file that indicates the im...",
      buttonText: "Read",
    },
    {
      // caption: "ON-DEMAND EVENT",
      src: "//a.storyblok.com/f/139616/1200x675/d2df291de1/v2.jpg/m/767x0",
      title: "3 steps towards data labeling excellence.",
      Icon: null,
      content: "Data-Scientists, Join The Ocean Cleanup Chall...",
    },
    {
      // caption: "PAST EVENT",
      src: "//a.storyblok.com/f/139616/1920x1080/7e52740622/automatic-error-identification-for-image-object-detection-in-kili.png/m/767x0",
      title: "Automatic error identification for image obje...",
      Icon: null,
      content:
        "At Kili, we believe the quality of the data is what differentiates a successful AI project from one ...",
      buttonText: "Read",
    },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    //   content: "",
    //   buttonText: "Watch the replay",
    // },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    //   content: "",
    // },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    //   content: "",
    // },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    // },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    //   content: "",
    // },
    // {
    //   caption: "",
    //   src: "",
    //   title: "",
    //   Icon: null,
    //   content: "",
    // },
  ];

  return (
    <>
      <Header />
      <Container noGutter className="bg-screen pt-[8rem]">
        <Container>
          <BreadCrumb />
        </Container>
        <Container className="bg-screen pt-[7.5rem] pb-[2.5rem] pl-2">
          <Typography
            variant="header"
            className="max-w-[47.625rem] text-[46px] lg:!text-[65px] leading-normal !font-normal font-warp"
          >
            We help customers to build AI that matters across industries
          </Typography>
        </Container>
      </Container>

      <Container className="bg-screen pt-16 lg:pb-40 flex flex-col items-center">
        <iframe
          src='https://widgets.sociablekit.com/medium-publication-feed/iframe/121811'
          width='90%'
          height='500'
          className='rounded-xl'
        ></iframe>
      </Container>

      <PartnerCarousel />

      <Container className="bg-surface h-40"></Container>

      <Container disableOverflowHidden isDarkMode background className="pt-5 pb-28">
        <div className="mx-auto w-fit ">
          <Typography variant="subdisplay" className="capitalize !text-white">
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
              <a href="http://console.autogon.ai/">Get started</a>
              <ArrowTopRightOnSquareIcon className={`h-6 w-6 text-white`} />
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
