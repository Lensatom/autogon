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
        className="w-[30rem] text-[24px] leading-[140%] -tracking-[.02em]"
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
        "Kili's customer support is best in-class. We solve issues much faster and their training data platform has a direct impact on our performance.",
      name: "Andrea Colonna",
      img: "https://a.storyblok.com/f/139616/800x800/1937b81e0c/jellysmack2.jpeg",
      positionandcompany: "Head of Data, Jellysmack",
    },
    {
      comment:
        "Great companies like Kili Technology, [...] have already adopted this data-centric AI approach.",
      name: "Andrew Ng",
      img: "https://a.storyblok.com/f/139616/398x398/e888674f6a/andrew.jpeg",
      positionandcompany: "Data-centric AI Influencer",
    },
    {
      comment:
        "Kili, the training data platform, is bringing added value in the management of our projects and this is quality.",
      name: "Gilles Henaff",
      img: "https://a.storyblok.com/f/139616/500x500/3dd69add65/thales.jpeg",
      positionandcompany: "Head of AI, Thales Las France",
    },
    {
      comment:
        "Kili enables us to improve our models’ performance and scale our AI projects as fast as our business needs.",
      name: "Andrea Colonna",
      img: "https://a.storyblok.com/f/139616/800x800/1937b81e0c/jellysmack2.jpeg",
      positionandcompany: "Head of Data, Jellysmack",
    },
    {
      comment:
        "We are very satisfied with our collaboration with Kili. We saw a performance improvement of our model of 3.5%",
      name: "Marie de Léséleuc",
      img: "https://a.storyblok.com/f/139616/460x460/5e38951100/eidos.jpeg",
      positionandcompany:
        "Director of Analytics and Data Science, Eidos-Montréal",
    },
  ];

  return (
    <Container isDarkMode={isDarkMode} background noGutter className="bg-surface pt-0 pb-5">
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides
        allowTouchMove
        initialSlide={0}
        modules={[Pagination]}
        slideActiveClass="!bg-[#b090ef]"
        pagination={{
          clickable: true,
          bulletActiveClass: "!bg-primary !opacity-100 !h-3 !w-3",
          bulletClass: "h-3 w-3 inline-block rounded-full bg-black mx-2",
        }}
        className="pt-20 mb-60 h-[28rem]"
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
            className={`!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 ${
              isDarkMode ? "bg-dark-paper" : "bg-white"
            }`}
          >
            <TestimonialCard {...testimonial} isDark={isDarkMode} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};