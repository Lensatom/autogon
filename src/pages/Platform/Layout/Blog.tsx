import { Button, Container, Typography } from "../../../components";
import { MiniCard } from "../../../components/Cards/MiniCard";

export const Blog = () => {
  const blogs = [
    {
      title: "Manufacturing - Automating defect detection with AI",
      src: "https://a.storyblok.com/f/139616/1560x600/4161105e65/manufacturing-header.jpg/m/680x0/filters:quality(100):format(webp)",
    },
    {
      title: "Banking - Scaling up customer service with chatbot",
      src: "https://a.storyblok.com/f/139616/1560x600/6517888510/chatbot-header.jpg/m/680x0/filters:quality(100):format(webp)",
    },
    {
      title: "Banking - Increasing productivity of customer email processing",
      src: "https://a.storyblok.com/f/139616/4680x1800/028584f6e1/banking-header-1.jpg/m/680x0/filters:quality(100):format(webp)",
    },
    {
      title: "Healthcare - Accelerating retinal disease detection at low cost",
      src: "https://a.storyblok.com/f/139616/4680x1800/32ce1b52b1/header-disease.jpg/m/680x0/filters:quality(100):format(webp)",
    },
    {
      title:
        "Improving productivity and efficiency in insurance claim form processing",
      src: "https://a.storyblok.com/f/139616/4680x1800/8af51e79a6/insurance-header.jpg/m/680x0/filters:quality(100):format(webp)",
    },
  ];

  return (
    <Container isDarkMode background className="pt-5">
      <div className=" mx-auto pb-20">
        <Typography
          isDarkMode
          align="center"
          variant="header"
          className="font-semibold"
        >
          Kili at work
        </Typography>
        <Typography
          isDarkMode
          align="center"
          variant="body"
          className="lg:w-[60%] mx-auto mt-5"
        >
          Discover how Kili is helping companies in different sectors build
          responsible, effective AI on a foundation of good data.
        </Typography>
      </div>
      <div className="mt-10 lg:w-[50rem] mx-auto pb-10">
        {blogs.map((blog, index) => (
          <MiniCard key={index} {...blog} />
        ))}
        <div className="grid place-items-center mb-40 mt-10">
          <Button className="mt-6 ">View all</Button>
        </div>
      </div>
    </Container>
  );
};
