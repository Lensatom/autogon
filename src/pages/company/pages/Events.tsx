import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container, Typography } from "../../../components"
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BlogCard } from "../../../components/Cards/BlogCard";
import { Header } from "../../../Layouts/Header"
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Footer } from "../../../Layouts/Footer";
import { NavLink } from "react-router-dom";

export const Event = () => {
  const [query, setQuery] = useState("")

  let blogs = [
    {
      caption: "upcoming event",
      src: "https://a.storyblok.com/f/139616/3750x1959/f207b200cb/sap-rectangle.png/m/767x0",
      title: "How to Get Ahead with AI: Discover Automated Machine Learning for Quick and Efficient AI Models",
      content:
        "This webinar will show you how to take advantage of automated machine learning to build and deploy AI models quickly, saving you time and resources with Autogon.",
      // Icon: null,
      buttonText: "Register",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x627/7136ba8df3/1.png/m/767x0",
      title: "Boost Your Bottom Line with Autogon: See How Other Companies Saw Significant ROI",
      // Icon: null,
      content:
        "In this webinar, we'll share a real-life success story of a company that used Autogon's AI technology and saw great returns on their investment.",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x627/12826d5965/1-1.png/m/767x0",
      title: "Exploring the Exciting World of AI Trends: From Natural Language Processing to Computer Vision",
      // Icon: null,
      content:
        "Join us for a fascinating discussion on some of the latest and most promising trends in AI, including topics like natural language processing and computer vision with Autogon.",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x628/c20478254f/webinar-thumbnail-replay-data-labeling-solution.png/m/767x0",
      title: "Ethical AI: Ensuring Fairness and Transparency in the Age of Artificial Intelligence",
      // Icon: null,
      content:
        "This webinar will dive into the important topic of ethical considerations in AI, giving you practical advice on how to make sure your AI models are transparent and fair with Autogon.",
      buttonText: "Watch the replay",
    },
    {
      caption: "ON-DEMAND EVENT",
      src: "https://a.storyblok.com/f/139616/1200x628/0f6d2bb323/webinar-thumbnail-quality-unboxed-beta.png/m/767x0",
      title: "Revolutionizing Healthcare with Autogon's AI Technology: The Future of Precision Medicine and Predictive Analytics",
      // Icon: null,
      content:
        "Join us to learn about how Autogon is leading the way in AI innovation in the healthcare industry, with a focus on exciting topics like precision medicine and predictive analytics.",
    }
  ];

   let filteredBlog = blogs?.filter((blog) => {
     return (
       blog?.caption?.toLowerCase?.()?.indexOf?.(query?.toLowerCase?.()) != -1
     );
   });

  return (
    <>
      <Header />
      <Container noGutter className="bg-screen pt-[8rem]">
        <Container>
          <BreadCrumb />
        </Container>
        <Container className="bg-screen py-24 pl-2">
          <Typography
            variant="header"
            className="max-w-[47.625rem] text-[46px] lg:!text-[65px] leading-normal !font-normal font-warp"
          >
            Join us at the most influential AI events in the world
          </Typography>
        </Container>
      </Container>

      <Container className="bg-screen pt-16 lg:pb-72">
        <div className="flex items-center gap-3 lg:pl-28 flex-wrap">
          <Typography variant="caption">Filter Events:</Typography>
          <div className="flex gap-3 items-center flex-wrap">
            <Button
              onClick={() => setQuery("")}
              variant={query === "" ? "" : "outline"}
            >
              All Event
            </Button>
            <Button
              onClick={() => setQuery("new")}
              variant={query === "new" ? "" : "outline"}
            >
              Upcoming Event
            </Button>
            <Button
              onClick={() => setQuery("upcoming")}
              variant={query === "upcoming" ? "" : "outline"}
            >
              Past Event
            </Button>
          </div>
        </div>
        {filteredBlog.length ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 lg:w-[85%] mx-auto gap-y-6">
            {filteredBlog.map((blog) => (
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
        ) : (
          <div className="h-40 grid place-items-center">
            <Typography
              variant="body"
              align="center"
              className="lg:w-[65%] mx-auto"
            >
              There are currently no upcoming events scheduled, but check back
              soon as new events are added all the time.
            </Typography>
          </div>
        )}
      </Container>

      <PartnerCarousel />

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
              Start for free
              <ArrowTopRightOnSquareIcon className={`h-6 w-6 text-white`} />
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}