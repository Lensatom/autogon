import { useState } from "react";
import { Button, Container, Typography } from "../../../components"
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BlogCard } from "../../../components/Cards/BlogCard";
import { Header } from "../../../Layouts/Header"

export const Event = () => {
  const [] = useState("")

  let blogs = [
    {
      caption: "upcoming event",
      src: "https://a.storyblok.com/f/139616/3750x1959/f207b200cb/sap-rectangle.png/m/767x0",
      title: "How SAP trains ML for Document Information Ex...",
      content:
        "Principal Data Scientist shares insights on how SAP overcomes the challenges of complex ontologies.",
      // Icon: null,
      buttonText: "Register",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x627/7136ba8df3/1.png/m/767x0",
      title: "Data annotation in AgriTech: How to overcome ...",
      // Icon: null,
      content:
        "A guide on how to scale data labeling, manage the required level of expertise & identify the various...",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x627/12826d5965/1-1.png/m/767x0",
      title: "Insider tips on data annotation project manag...",
      // Icon: null,
      content:
        "85% of ALL machine learning projects NEVER reach real-world deployment – most often due to a lack of...",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x628/c20478254f/webinar-thumbnail-replay-data-labeling-solution.png/m/767x0",
      title: "Data Labeling: What are my options?",
      // Icon: null,
      content:
        "What data labeling solution should I go for? Struggling to make up your mind? We know the feeling....",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x628/0f6d2bb323/webinar-thumbnail-quality-unboxed-beta.png/m/767x0",
      title: "3 steps towards data labeling excellence.",
      Icon: null,
      content:
        "50% of the time of labeling projects is around data quality.The increasing focus on the scale, speed...",
    },
    {
      caption: "PAST EVENT",
      src: "https://a.storyblok.com/f/139616/782x322/464b9e5e5e/kili_ai_bigdata_expo.png/m/767x0",
      title: "AI and Big Data Expo",
      Icon: null,
      content:
        "TechEx North America is an enterprise technology exhibition and conference consisting of six co-loca...",
      buttonText: "Book a meeting",
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
            className="max-w-[47.625rem] !text-[65px] !leading-[98%] font-semibold"
          >
            Join us at the most influential AI events in the world
          </Typography>
        </Container>
      </Container>

      <Container className="bg-surface pt-16 lg:pb-40">
        <div className="flex items-center gap-3 pl-28">
          <Typography variant="caption">Filter Events:</Typography>

          <Button variant="outline">All Event</Button>
          <Button variant="outline">Upcoming Event</Button>
          <Button variant="outline">Past Event</Button>
        </div>
        <div className="grid grid-cols-3 mt-10 lg:w-[85%] mx-auto gap-y-6">
          {blogs.map((blog) => (
            <BlogCard
              {...blog}
              titleClass="!text-[28px] !leading-[30px] font-semibold"
              children={
                <Typography
                  variant="body"
                  className="mt-2 !leading-6 !text-[16px] "
                >
                  Principal Data Scientist shares insights on how SAP overcomes
                  the challenges of complex ontologies.
                </Typography>
              }
            />
          ))}
        </div>
      </Container>
    </>
  );
}