import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BlogCard } from "../../../components/Cards/BlogCard";
import { Header } from "../../../Layouts/Header";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import Smilesvg from "../../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../../Layouts/Footer";

export const Whitepapers = () => {

  let blogs = [
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/3750x1959/f207b200cb/sap-rectangle.png/m/767x0",
      title: "European AI Act",
      content:
        "European AI Act goes live in Fiscal Year 2023. Is your AI-app ready, yet?",
      // Icon: null,
      buttonText: "Download",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/339x240/03d38e4390/ai-regulations-in-the-us-thumbnail-sbk.jpg/m/767x0",
      title: "AI Regulations in the US",
      // Icon: null,
      content: "How to make your AI-app stay ahead of US Regulations",
      buttonText: "Download",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/339x240/3bb00738bf/ai-in-manufacturing-industry-thumbnail-ebook-directory/m/767x0",
      title: "AI in Manufacturing",
      // Icon: null,
      content: "How AI can fuel you defect detection system",
      buttonText: "Download",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/4000x2670/57faf7d7c5/dcai-mock-up.png/m/767x0",
      title: "Data-Centric AI",
      // Icon: null,
      content: "The Ultimate Guide to the New AI Paradigm",
      buttonText: "Download",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1017x720/8ec58ad76e/data.png/m/767x0",
      title: "Training Data for Machine Learning",
      // Icon: null,
      content:
        "Early Release from O'Reilly | Human Supervision from Annotation to Data Science",
      buttonText: "Download",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1017x720/3f2ba0b287/ebook-ai-transformation-in-banking.png/m/767x0",
      title: "Fueling AI transformation in Banking",
      Icon: null,
      content: "with Intelligent Document Processing",
      buttonText: "Download",
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
      <Container noGutter className="bg-surface pt-[8rem]">
        <Container>
          <BreadCrumb />
        </Container>
        <Container className="bg-[#eaeee2] pt-[7.5rem] pb-[2.5rem] pl-2">
          <Typography
            variant="header"
            className="max-w-[47.625rem] text-[46px] lg:!text-[65px] !leading-[98%] font-semibold"
          >
            Join the data-centric AI movement
          </Typography>
        </Container>
      </Container>

      <Container className="bg-surface pt-16 lg:pb-72">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 lg:w-[85%] mx-auto gap-y-6">
          {blogs.map((blog) => (
            <BlogCard
              {...blog}
              titleClass="!text-[28px] !leading-[30px] font-semibold"
              children={
                <Typography
                  variant="body"
                  className="mt-2 !leading-6 !text-[16px] "
                >
                  {blog.content}
                </Typography>
              }
            />
          ))}
        </div>
      </Container>

      <PartnerCarousel />
      
      <Container className="bg-surface h-40"></Container>

      <Container disableOverflowHidden isDarkMode background className="pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto z-[1999]" />
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

      <Footer />
    </>
  );
};
