import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Container, Typography } from "../components";
import { TestimonialProps } from "../interfaces";

const TestimonialCard = ({
  comment,
  img,
  name,
  positionandcompany,
  isDark
}: TestimonialProps) => {
  return (
    <>
      <Typography
        variant="body"
        isDarkMode={isDark}
        className="lg:w-[30rem] text-[24px] leading-[140%] -tracking-[.02em]"
      >
        {comment}
      </Typography>
      <div className="flex items-center gap-2">
        <Avatar sizes={58} src={img} />
        <div className="">
          <Typography
            isDarkMode={isDark}
            variant="caption"
            className="!font-semibold !text-[14px]"
          >
            {name}
          </Typography>
          <Typography
            isDarkMode={isDark}
            variant="caption"
            className="!text-[12px] mt-0.5 font-normal"
          >
            {positionandcompany}
          </Typography>
        </div>
      </div>
    </>
  );
};

interface TestimonialType {
  isDarkMode?: boolean
}

export const Testimonial = ({ isDarkMode }: TestimonialType) => {
  let testimonials = [
    {
      comment:
        '"Autogon has been a game changer for our company. Their AI/ML solutions have allowed us to automate processes and gain insights that were previously impossible. Their team of experts provided invaluable guidance throughout the entire process, and we are seeing significant improvements in efficiency and accuracy. We highly recommend Autogon to any company looking to take their business to the next level."',
      name: "John",
      img: "https://a.storyblok.com/f/139616/800x800/1937b81e0c/jellysmack2.jpeg",
      positionandcompany: "CEO of Innovatex",
    },
    {
      comment:
        "\"As a small business, we were hesitant to invest in AI/ML solutions, but Autogon has exceeded our expectations. Their platform is easy to use and their team provided all the support we needed to get up and running quickly. The results have been amazing - we're seeing significant increases in revenue and customer satisfaction. We couldn't be happier with our choice to work with Autogon.\"",
      name: "Jane",
      img: "https://a.storyblok.com/f/139616/398x398/e888674f6a/andrew.jpeg",
      positionandcompany: "Data-centric AI Influencer",
    },
    {
      comment:
        '"Autogon\'s AI/ML solutions have been a huge asset to our organization. Their platform has allowed us to gain insights that have led to new business opportunities and increased efficiency. The team at Autogon provided excellent support and guidance throughout the entire process. We highly recommend Autogon to any company looking to stay ahead of the competition."',
      name: "Michael",
      img: "https://a.storyblok.com/f/139616/500x500/3dd69add65/thales.jpeg",
      positionandcompany: "CTO of Tech Wave",
    }
  ];

  return (
    <Container isDarkMode={isDarkMode} background noGutter className="bg-screen mt-[200px] pb-5">
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides
        allowTouchMove
        initialSlide={0}
        modules={[Pagination]}
        slideActiveClass="!bg-accent"
        pagination={{
          clickable: true,
          bulletActiveClass: "!bg-primary !opacity-100 !h-3 !w-3",
          bulletClass: "h-3 w-3 inline-block rounded-full bg-black mx-2",
        }}
        className="mb-28 h-[32rem] md:h-[28rem]"
        scrollbar={{
          draggable: true,
        }}
        breakpoints={{
          959: { spaceBetween: 22, initialSlide: 1 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className={`!w-fit rounded-4xl md:max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-8 lg:px-16 ${
              isDarkMode ? "bg-dark-paper" : "bg-[#eaeee2]"
            }`}
          >
            <TestimonialCard {...testimonial} isDark={isDarkMode} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};