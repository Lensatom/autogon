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
import DataSetImage from "../../assets/annotate-fast.webp.png";
import ExploreSetImage from "../../assets/explore-and-fix-issues.webp.png";
import DevopsImage from "../../assets/dataops-2.webp.png";
import FixAndFixImage from "../../assets/fix-and-fix-issues-v2-1.webp.png";
import { IoIosArrowForward } from "react-icons/io";

import { Pagination } from "swiper";

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

const TestimonialCard = () => {
  return (
    <>
      <Typography
        variant="body"
        className="w-[30rem] text-[24px] leading-[140%] -tracking-[.02em]"
      >
        "Kili's customer support is best in-class. We solve issues much faster
        and their training data platform has a direct impact on our
        performance."
      </Typography>
      <div className="flex items-center gap-2">
        <Avatar sizes={58} />
        <div className="">
          <Typography variant="caption" className="!font-semibold !text-[12px]">
            Andrea Colonna
          </Typography>
          <Typography
            variant="caption"
            className="!text-[13px] mt-0.5 font-normal"
          >
            Head of Data, Jellysmack
          </Typography>
        </div>
      </div>
    </>
  );
};

export const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <Container flex align="center" className="bg-surface">
        <video></video>
      </Container>

      <Container className="bg-surface pt-20 pb-40" flex align="center">
        <div className="w-full">
          <Typography variant="header" className="font-semibold">
            Create training datasets fast
          </Typography>
          <Typography variant="body" className="mt-8 w-[80%]">
            Annotate all types of unstructured data rapidly and accurately with
            customizable annotation tasks & an interface optimized for
            productivity & quality. Automate labeling to save time with smart
            tools & model predictions.
          </Typography>
          <Typography variant="link" className="text-sm mt-9 !font-extrabold ">
            Learn more
            <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
          </Typography>
        </div>
        <div className="w-full">
          <img src={DataSetImage} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container
        direction="row-reverse"
        className="bg-surface pt-20 pb-40 gap-10"
        flex
        align="center"
      >
        <div className="w-full">
          <Typography variant="header" className="font-semibold">
            Find & fix issues in your ML datasets
          </Typography>
          <Typography variant="body" className="mt-8 w-[85%]">
            Supervise quality level & improvements to ensure low-error datasets.
            Simplify advanced collaboration workflows. Leverage programmatic QA.
            Explore your datasets and identify the data that matters.
          </Typography>
          <Typography variant="link" className="text-sm mt-9 !font-extrabold ">
            Learn more
            <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
          </Typography>
        </div>
        <div className="w-full">
          <img src={FixAndFixImage} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container className="bg-surface pt-10 pb-40" flex align="center">
        <div className="w-full">
          <Typography variant="header" className="font-semibold">
            Simplify your LabelingOps
          </Typography>
          <Typography variant="body" className="mt-8 w-[90%]">
            Integrate natively with your ML stack, easily orchestrate your data
            pipeline, structure projects & user management, and manage the
            entire data lifecycle of your ML project on Kili.
          </Typography>
          <Typography variant="link" className="text-sm mt-9 !font-extrabold ">
            Learn more
            <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
          </Typography>
        </div>
        <div className="w-full">
          <img src={DevopsImage} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container
        direction="row-reverse"
        className="bg-surface pt-10 pb-60 gap-10"
        flex
        align="center"
      >
        <div className="w-full">
          <Typography variant="header" className="font-semibold">
            Augment your team
          </Typography>
          <Typography variant="body" className="mt-8 w-[85%]">
            Get ahead of the game with expert labeling workforce. Strengthen
            your project management & ML teams with Kili experts.
          </Typography>
          <Button className="flex items-center gap-3 mt-9">
            Talk to sales
          </Button>
        </div>
        <div className="w-full">
          {/* <img src={DataSetImage} className="h-full w-full object-contain" /> */}
        </div>
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

      <Container noGutter className="bg-surface pt-0 pb-5">
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides
          allowTouchMove
          initialSlide={0}
          modules={[Pagination]}
          slideActiveClass="bg-[#b090ef]"
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-primary !opacity-100 !h-3 !w-3",
            bulletClass: "h-3 w-3 inline-block rounded-full bg-black mx-2",
          }}
          className="mt-20 mb-60 h-[28rem]"
          scrollbar={{
            draggable: true,
          }}
          breakpoints={{
            959: { spaceBetween: 22, initialSlide: 1 },
          }}
        >
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="!w-fit rounded-4xl max-h-[370px] shadow-[0_0_16px_rgb(8,24,25/4%)] flex flex-col justify-between py-12 px-16 bg-white">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Container noGutter className="bg-surface py-10 pt-5">
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
