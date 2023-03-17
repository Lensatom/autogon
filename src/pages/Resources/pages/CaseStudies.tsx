import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BlogCard } from "../../../components/Cards/BlogCard";
import { Header } from "../../../Layouts/Header";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import Smilesvg from "../../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../../Layouts/Footer";
import { NavLink } from "react-router-dom";

export const CaseStudies = () => {

  let blogs = [
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/793x284/a625a510cb/luko-case-study-thumbnail.jpg/m/767x0",
      title: "Insurance - How Luko leverages AI to outperfo...",
      // content:
      //   "European AI Act goes live in Fiscal Year 2023. Is your AI-app ready, yet?",
      Icon: null,
      buttonText: "Read",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1560x600/4161105e65/manufacturing-header.jpg/m/767x0",
      title: "Manufacturing - Automating defect detection w...",
      Icon: null,
      // content: "How to make your AI-app stay ahead of US Regulations",
      buttonText: "Read",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1560x600/e38377a964/car-header.jpg/m/767x0",
      title: "Insurance - Transforming car damage assessmen...",
      Icon: null,
      // content: "How AI can fuel you defect detection system",
      buttonText: "Read",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/4000x2670/57faf7d7c5/dcai-mock-up.png/m/767x0",
      title: "Data-Centric AI",
      Icon: null,
      // content: "The Ultimate Guide to the New AI Paradigm",
      buttonText: "Read",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1017x720/8ec58ad76e/data.png/m/767x0",
      title: "Training Data for Machine Learning",
      Icon: null,
      // content:
      //   "Early Release from O'Reilly | Human Supervision from Annotation to Data Science",
      buttonText: "Read",
    },
    {
      caption: "Whitepaper",
      src: "https://a.storyblok.com/f/139616/1017x720/3f2ba0b287/ebook-ai-transformation-in-banking.png/m/767x0",
      title: "Fueling AI transformation in Banking",
      Icon: null,
      // content: "with Intelligent Document Processing",
      buttonText: "Read",
    },
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
            We help customers to build AI that matters across use cases
          </Typography>
        </Container>
      </Container>

      <Container className="bg-surface pt-16 lg:pb-40">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 lg:w-[85%] mx-auto gap-y-6">
          {blogs.map((blog) => (
            <BlogCard
              {...blog}
              titleClass="!text-[28px] !leading-[30px] font-semibold"
            />
          ))}
        </div>
        <div className="grid place-items-center w-full lg:mt-40 mt-10">
          <Button>Load more</Button>
        </div>
      </Container>

      <PartnerCarousel />

      <Container className="bg-surface h-40" ></Container>

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

      <Footer />
    </>
  );
};
