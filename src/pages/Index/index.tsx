import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Container, Typography } from "../../components";
import { Header } from "../../Layouts/Header";
import { HeroPage } from "./Layouts/Hero";
import Smilesvg from "../../assets/logo/Autogon-logo-light.png";
import cn from "classnames";
import { BenefitCardProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogCard } from "../../components/Cards/BlogCard";
import { Footer } from "../../Layouts/Footer";
import DataSetImage from "../../assets/annotate-fast.webp.png";
import DevopsImage from "../../assets/dataops-2.webp.png";
import FixAndFixImage from "../../assets/fix-and-fix-issues-v2-1.webp.png";
import { IoIosArrowForward } from "react-icons/io";

import Lottie from "lottie-react";
import animationData from "../../assets/lf30_editor_22k2biyf.json";
import { Testimonial } from "../../Layouts/Testimonial";
import { PartnerCarousel } from "../../Layouts/PartnerCarousel";
import Draggable from "react-draggable";
import { useState } from "react";
import { Pagination } from "swiper";

const BenefitCard = ({ className, position, contents, src, active, onClick, bounds }: BenefitCardProps) => {
  return (
    <Draggable bounds={bounds}>
      <div
        onClick={onClick}
        className={cn(
          "h-[35rem] w-[28rem] rounded-6xl bg-[#EAEEE2]  p-12 absolute shadow-4xl cursor-move select-none",
          className,
          { "bg-[#B090EF] z-30": active }
        )}
      >
        <div className="h-full relative">
          <Avatar src={src} sizes={75} />
          <Typography variant="title" className="mt-3 font-extrabold">
            {position}
          </Typography>
          <div className="mt-2">
            <ul className="list-disc">
              {contents.map((content, index) => (
                <li key={index}>
                  <Typography className="my-2" variant="body">
                    {content}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="absolute bottom-10">Request a Demo</Button>
      </div>
    </Draggable>
  );
};
const BenefitMobileCard = ({ className, position, contents, src, active, onClick }: BenefitCardProps) => {
  return (
      <div
        // onClick={onClick}
        className={cn(
          "",
          className,
          { "bg-[#B090EF] z-30": active }
        )}
      >
        <div className="h-full relative">
          <Avatar src={src} sizes={75} />
          <Typography variant="title" className="mt-3 font-extrabold">
            {position}
          </Typography>
          <div className="mt-2">
            <ul className="list-disc">
              {contents.map((content, index) => (
                <li key={index}>
                  <Typography className="my-2" variant="body">
                    {content}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="absolute bottom-10">Request a Demo</Button>
      </div>
  );
};


export const LandingPage = () => {
  const [active, setActive] = useState(7);

  return (
    <>
      <Header />

      <HeroPage />

      <Container
        flex
        align="center"
        itemScope
        itemProp="videoObject"
        itemType="https://scheme.org/videoObject"
        className="bg-surface pb-14 lg:pb-32"
      >
        <meta
          itemProp="contentUrl"
          content="https://a.storyblok.com/f/139616/x/46411cf354/demo-homepage-v2.mp4"
        />
        <div className="mx-auto lg:px-[1.375em] flex relative overflow-hidden items-center justify-center rounded">
          <video
            className="h-auto lg:w-[80%] rounded-lg"
            loop
            autoPlay
            typeof="video/mp4"
            src="https://a.storyblok.com/f/139616/x/46411cf354/demo-homepage-v2.mp4"
          ></video>
          <meta itemProp="name" content="kili presentation" />
          <meta
            itemProp="thumbnailUrl"
            content="https://a.storyblok.com/f/139616/2339x1666/31706b2698/annotate-fast.png"
          />
          <meta itemProp="uploadDate" content="2022-11-07 00:00" />
          <meta itemProp="description" content="kili presentation" />
        </div>
      </Container>

      <PartnerCarousel />

      <Container className="bg-neutral py-10 lg:py-20 pb-32">
        <Typography
          variant="header"
          align="center"
          className="!text-white mb-4"
        >
          Integrate quickly
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="!text-white lg:w-[59%] mx-auto mb-[56px]"
        >
          urn your Machine Learning workflow in a Data-centric AI workflow
          within 5 minutes. Integrate high-quality training data selection, data
          labeling and data annotation in your ML workflow with 5 lines of code.
          Annotate all data types in fast iteration cycles.
        </Typography>

        <div>
          <img
            src="https://a.storyblok.com/f/139616/x/1eb97a0c59/diagram-01-desktop-updated-april11th.svg"
            className="hidden lg:block mx-auto"
            alt="Integrate quickly"
          />
          <img
            src="https://a.storyblok.com/f/139616/x/945e9b6d8a/diagram-01-mobile-updated-april11th.svg"
            alt="Integrate quickly"
            className="lg:hidden"
          />
        </div>
      </Container>

      <Container
        className="bg-surface flex-col-reverse lg:flex-row pt-20 pb-10 lg:pb-40"
        flex
        align="center"
      >
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
        className="bg-surface flex-col-reverse lg:flex-row-reverse lg:pt-20 lg:pb-40 gap-10"
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

      <Container
        className="bg-surface pt-10 lg:pb-40 flex-col-reverse lg:flex-row-reverse"
        flex
        align="center"
      >
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
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-10 pb-60 gap-10"
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
          <Lottie
            animationData={animationData}
            loop
            className="h-80 mx-auto w-80"
          />
        </div>
      </Container>

      <Container className="bg-surface py-10 overflow-hidden lg:h-[110rem] ">
        <Typography
          variant="header"
          align="center"
          className="lg:w-[80%] mx-auto font-extrabold"
        >
          See how Kili can help you in your role
        </Typography>

        <div className="grid-cols-2 mt-32 justify-center hidden lg:grid">
          <div className="relative bg-blue-600">
            <BenefitCard
              active={active === 1}
              onClick={() => setActive(1)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 800 }}
              src="https://a.storyblok.com/f/139616/160x160/9a8818c603/ml-engineer.png"
              position="ML Engineers"
              className="left-40"
              contents={[
                "Industrialize data labeling via cross team collaboration and production of quality data to feed your models.",
                "Ship more successful projects in less time with the simple UX of our training data platform, smooth workflows and the ability to handle any and all data.",
              ]}
            />
            <BenefitCard
              active={active === 2}
              onClick={() => setActive(2)}
              bounds={{ top: -580, left: -200, right: 800, bottom: 600 }}
              src="https://a.storyblok.com/f/139616/160x160/c468ab2a8f/product-leaders.jpg"
              className="top-52 left-40"
              position="Project Leaders"
              contents={[
                "Improve performance of AI projects and ship successful projects on time with our training data platform by using data to unlock and harness the expertise already present in your business.",
                "Mitigate the risk of running an unreliable and unethical AI.",
              ]}
            />
            <BenefitCard
              active={active === 3}
              bounds={{ top: -720, left: -200, right: 800, bottom: 410 }}
              onClick={() => setActive(3)}
              src="https://a.storyblok.com/f/139616/160x160/ead56e9b1f/it-leader.png"
              className="top-[25rem] left-40"
              position="IT Leaders"
              contents={[
                "Build the data labeling infrastructure that can support scale with total security.",
                "Ensure data security and governance: sensitive data is protected.",
                "Simplify and rationalize your AI & data tech stack.",
              ]}
            />
            <BenefitCard
              active={active === 4}
              onClick={() => setActive(4)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 220 }}
              src="https://a.storyblok.com/f/139616/160x160/d782b4acd8/cxo.png"
              className="top-[37rem] left-40"
              position="CXOs"
              contents={[
                "Improve performance of AI projects and ship successful projects on time by using data to unlock and harness the expertise already present in your business.",
                "Mitigate the risk of running an unreliable and unethical AI.",
              ]}
            />
          </div>
          <div className="relative">
            <BenefitCard
              active={active === 5}
              onClick={() => setActive(5)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 800 }}
              src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
              position="Project Managers"
              contents={[
                "Facilitate intuitive collaboration on our training data platform between business experts and tech teams to produce quality data.",
                "Manage resources within a smooth & controlled process and integrate different users, including non-technical, at the right moment for maximum impact.",
              ]}
            />
            <BenefitCard
              active={active === 6}
              onClick={() => setActive(6)}
              bounds={{ top: -580, left: -200, right: 800, bottom: 600 }}
              src="https://a.storyblok.com/f/139616/160x160/8343df36fa/ai-leaders.jpg"
              className="top-52"
              position="AI Leaders"
              contents={[
                "Industrialize data labeling via cross team collaboration and production of quality data to feed models.",
                "Gain control over data spread across your organisation and simplify the model training iteration loop.",
                "Free your teams from the low value task of labeling with our training data platform",
              ]}
            />
            <BenefitCard
              active={active === 7}
              onClick={() => setActive(7)}
              bounds={{ top: -720, left: -200, right: 800, bottom: 410 }}
              src="https://a.storyblok.com/f/139616/160x160/256be6f7e1/ml-engineers.jpg"
              className="top-[25rem]"
              position="Data Scientists"
              contents={[
                "Industrialize data labeling via cross team collaboration and production of quality data to feed your models.",
                "Access to professional external data labeling workforce matching data security requirements.",
                "Unlock broader projects through growing data capabilities.",
              ]}
            />
          </div>
        </div>
        <div className="lg:hidden mt-10">
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
            className="pt-20 mb-40 h-[45rem]"
            scrollbar={{
              draggable: true,
            }}
            breakpoints={{
              959: { spaceBetween: 22, initialSlide: 1 },
            }}
          >
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 1}
                onClick={() => setActive(1)}
                src="https://a.storyblok.com/f/139616/160x160/9a8818c603/ml-engineer.png"
                position="ML Engineers"
                contents={[
                  "Industrialize data labeling via cross team collaboration and production of quality data to feed your models.",
                  "Ship more successful projects in less time with the simple UX of our training data platform, smooth workflows and the ability to handle any and all data.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 2}
                onClick={() => setActive(2)}
                src="https://a.storyblok.com/f/139616/160x160/c468ab2a8f/product-leaders.jpg"
                className="top-52 left-40"
                position="Project Leaders"
                contents={[
                  "Improve performance of AI projects and ship successful projects on time with our training data platform by using data to unlock and harness the expertise already present in your business.",
                  "Mitigate the risk of running an unreliable and unethical AI.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitCard
                active={active === 3}
                onClick={() => setActive(3)}
                src="https://a.storyblok.com/f/139616/160x160/ead56e9b1f/it-leader.png"
                className="top-[25rem] left-40"
                position="IT Leaders"
                contents={[
                  "Build the data labeling infrastructure that can support scale with total security.",
                  "Ensure data security and governance: sensitive data is protected.",
                  "Simplify and rationalize your AI & data tech stack.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitCard
                active={active === 4}
                onClick={() => setActive(4)}
                src="https://a.storyblok.com/f/139616/160x160/d782b4acd8/cxo.png"
                className="top-[37rem] left-40"
                position="CXOs"
                contents={[
                  "Improve performance of AI projects and ship successful projects on time by using data to unlock and harness the expertise already present in your business.",
                  "Mitigate the risk of running an unreliable and unethical AI.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitCard
                active={active === 5}
                onClick={() => setActive(5)}
                src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
                position="Project Managers"
                contents={[
                  "Facilitate intuitive collaboration on our training data platform between business experts and tech teams to produce quality data.",
                  "Manage resources within a smooth & controlled process and integrate different users, including non-technical, at the right moment for maximum impact.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2]  p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitCard
                active={active === 6}
                onClick={() => setActive(6)}
                src="https://a.storyblok.com/f/139616/160x160/8343df36fa/ai-leaders.jpg"
                className="top-52"
                position="AI Leaders"
                contents={[
                  "Industrialize data labeling via cross team collaboration and production of quality data to feed models.",
                  "Gain control over data spread across your organisation and simplify the model training iteration loop.",
                  "Free your teams from the low value task of labeling with our training data platform",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-[#EAEEE2] p-12 shadow-4xl cursor-move select-none`}
            >
              <BenefitCard
                active={active === 7}
                onClick={() => setActive(7)}
                src="https://a.storyblok.com/f/139616/160x160/256be6f7e1/ml-engineers.jpg"
                className="top-[25rem]"
                position="Data Scientists"
                contents={[
                  "Industrialize data labeling via cross team collaboration and production of quality data to feed your models.",
                  "Access to professional external data labeling workforce matching data security requirements.",
                  "Unlock broader projects through growing data capabilities.",
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

      <Testimonial />

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

      <Container disableOverflowHidden className="bg-[#162427] pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-6 mx-auto h-20 w-20 mb-10" />
          <Typography variant="subdisplay" className="capitalize !text-white">
            get started
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            Get started! Build better data, now.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button
              className="flex items-center gap-3 !text-white border-white"
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
