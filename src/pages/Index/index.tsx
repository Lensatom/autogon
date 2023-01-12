import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Container, Typography } from "../../components";
import { Header } from "../../Layouts/Header";
import { HeroPage } from "./Layouts/Hero";
import Smilesvg from "../../assets/logo/kili-smile.svg.png";
import cn from "classnames";
import { BenefitCardProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogCard } from "../../components/Cards/BlogCard";
import { Footer } from "../../Layouts/Footer";

const BenefitCard = ({ className, position }: BenefitCardProps) => {
  return (
    <div
      className={cn(
        "h-[35rem] w-[28rem] rounded-6xl bg-[#EAEEE2] hover:bg-[#B090EF] p-12 relative shadow-4xl",
        className
      )}
    >
      <Avatar sizes={75} />
      <Typography variant="title" className="mt-3 font-extrabold">
        {position}
      </Typography>
      <div className="mt-2">
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
        <Typography variant="body">
          Access to professional external data labeling workforce matching data
          security requirements.
        </Typography>
      </div>
      <Button className="relative -bottom-4">Request a Demo</Button>
    </div>
  );
};



export const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <Container flex align="center">
        <video></video>
      </Container>

      <Container className="bg-surface py-10 overflow-hidden h-[110rem]">
        <Typography
          variant="header"
          align="center"
          className="w-[80%] mx-auto font-extrabold"
        >
          See how Kili can help you in your role
        </Typography>

        <div className="flex mt-32 gap-10  justify-center">
          <div className="">
            <BenefitCard position="Ml Engineers" />
            <BenefitCard className="-top-[23rem]" position="Project Leaders" />
            <BenefitCard className="-top-[46rem]" position="IT Leaders" />
            <BenefitCard className="-top-[69rem]" position="CXOs" />
          </div>
          <div className="">
            <BenefitCard position="Project Managers" />
            <BenefitCard className="-top-[23rem]" position="AI Leaders" />
            <BenefitCard className="-top-[46rem]" position="Data Scientists" />
          </div>
        </div>
      </Container>

      <Container className="bg-surface py-10">
        <Typography
          variant="header"
          align="center"
          className="w-[80%] mx-auto font-extrabold"
        >
          Recent news
        </Typography>
       
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides
          allowTouchMove
          initialSlide={1}
          className="mt-20 mb-60"
          scrollbar={{
            draggable: true,
          }}
          breakpoints={{
            959: { spaceBetween: 22 },
            1100: { allowTouchMove: true, scrollbar: { draggable: false } },
          }}
        >
          <SwiperSlide className="!w-fit">
            <BlogCard
              caption="Blog"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="AI For compliance: What, why and how?"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-fit">
            <BlogCard
              caption="whitespaper"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="Kili's guide to the new AI paradigm"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-fit">
            <BlogCard
              caption="tutorial"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="Opinion Classification with kili & HuggingFac.."
            />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Container className="bg-[#162427] pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto" />
          <Typography variant="subdisplay" className="capitalize text-white">
            get started
          </Typography>
          <Typography variant="body" align="center" className="text-white">
            Get started! Build better data, now.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button
              className="flex items-center gap-3 text-white border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
