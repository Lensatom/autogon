import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Button, Container, Typography } from "../../../components"
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BlogCard } from "../../../components/Cards/BlogCard";
import { Header } from "../../../Layouts/Header"
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Footer } from "../../../Layouts/Footer";
import { NavLink } from "react-router-dom";

export const Event = () => {

  const [query, setQuery] = useState("all")
  const [blogs, setBlogs] = useState<any>(null)

  let allBlogs = [
    {
      caption: "upcoming",
      src: "data:image/jpeg;base64,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",
      title: "How to Get Ahead with AI: Discover Automated Machine Learning for Quick and Efficient AI Models",
      content:
        "This webinar will show you how to take advantage of automated machine learning to build and deploy AI models quickly, saving you time and resources with Autogon.",
      // Icon: null,
      buttonText: "Register",
    },
    {
      caption: "new",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QH-nqZ7_4RKw6xbck2teze276GAet3TAzQ&usqp=CAU",
      title: "Boost Your Bottom Line with Autogon: See How Other Companies Saw Significant ROI",
      // Icon: null,
      content:
        "In this webinar, we'll share a real-life success story of a company that used Autogon's AI technology and saw great returns on their investment.",
      buttonText: "Watch the replay",
    },
    {
      caption: "new",
      src: "data:image/jpeg;base64,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",
      title: "Exploring the Exciting World of AI Trends: From Natural Language Processing to Computer Vision",
      // Icon: null,
      content:
        "Join us for a fascinating discussion on some of the latest and most promising trends in AI, including topics like natural language processing and computer vision with Autogon.",
      buttonText: "Watch the replay",
    },
    {
      caption: "upcoming",
      src: "https://imageio.forbes.com/specials-images/imageserve/60e207eff769772aafaa4e5b/0x0.jpg?format=jpg&width=1200",
      title: "Ethical AI: Ensuring Fairness and Transparency in the Age of Artificial Intelligence",
      // Icon: null,
      content:
        "This webinar will dive into the important topic of ethical considerations in AI, giving you practical advice on how to make sure your AI models are transparent and fair with Autogon.",
      buttonText: "Watch the replay",
    },
    {
      caption: "new",
      src: "https://www.einfochips.com/blog/wp-content/uploads/2019/12/how-artificial-intelligence-is-transforming-the-healthcare-sector-featured.jpg",
      title: "Revolutionizing Healthcare with Autogon's AI Technology: The Future of Precision Medicine and Predictive Analytics",
      // Icon: null,
      content:
        "Join us to learn about how Autogon is leading the way in AI innovation in the healthcare industry, with a focus on exciting topics like precision medicine and predictive analytics.",
    }
  ];

  useEffect(() => {
    setBlogs(allBlogs);
  }, [])

  const change = (query:string) => {
    setQuery(query);
    if (query === "all") {
      setBlogs(allBlogs);
      return true;
    }
    const localBlogs = allBlogs.filter(blog => blog.caption === query)
    setBlogs(localBlogs);
  }

  if (blogs === null) {
  return <>Loading</>
  }
  
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

      <Container className="bg-screen pt-16 lg:pb-44">
        <div className="flex items-center gap-3 lg:pl-28 flex-wrap">
          <Typography variant="caption">Filter Events:</Typography>
          <div className="flex gap-3 items-center flex-wrap">
            <Button
              onClick={() => change("all")}
              variant={query === "all" ? "" : "outline"}
            >
              All Event
            </Button>
            <Button
              onClick={() => change("new")}
              variant={query === "new" ? "" : "outline"}
            >
              Upcoming Event
            </Button>
            <Button
              onClick={() => change("upcoming")}
              variant={query === "upcoming" ? "" : "outline"}
            >
              Past Event
            </Button>
          </div>
        </div>
        {blogs.length ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:grid-cols-2 mt-10 lg:w-[85%] mx-auto gap-y-6">
            {blogs.map((blog:any) => (
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
              <a href="https://console.autogon.ai">
                Start for free
              </a>
              <ArrowTopRightOnSquareIcon className={`h-6 w-6 text-white`} />
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}