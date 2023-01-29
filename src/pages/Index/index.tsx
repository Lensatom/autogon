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
import { BenefitCard } from "./components/BenefitCard";


const BenefitMobileCard = ({ className, position, contents, src, active, onClick }: BenefitCardProps) => {
  return (
      <div
        // onClick={onClick}
        className={cn(
          "",
          className,
          { "bg-accent z-30": active }
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

      <Container className="bg-neutral py-10 lg:py-20 pb-32">
        <Typography
          variant="header"
          align="center"
          className="!text-white mb-4"
        >
          Generate AI models in minutes
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="!text-white lg:w-[59%] mx-auto mb-[56px]"
        >
          Autogon makes the process of building, evaluating, and deploying
          machine learning models more efficient, enabling companies to quickly
          build models and put them into production.
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
            Predictive modeling
          </Typography>
          <Typography variant="body" className="mt-8 w-[80%]">
            Autogon is used to create predictive models to predict future
            outcomes based on historical data. It can be used in a variety of
            industries, such as finance, healthcare, and retail, to predict
            customer behavior, identify fraud, and forecast demand.
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
            Anomaly detection
          </Typography>
          <Typography variant="body" className="mt-8 w-[85%]">
            Autogon can be used to detect anomalies in data, which can be used
            to identify fraud, network intrusions, or other unusual behavior.
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
            Time series forecasting
          </Typography>
          <Typography variant="body" className="mt-8 w-[90%]">
            Autogon can be used to analyse time series data and make predictions
            about future trends. This can be used in industries such as finance
            and logistics to forecast demand and make better business decisions.
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
            Artificial Intelligence for Creatives
          </Typography>
          <Typography variant="body" className="mt-8 w-[85%]">
            Get ahead of the game with Autpgon’s cutting edge AI models.
          </Typography>
          <Button className="flex items-center gap-3 mt-9">Chat to us</Button>
        </div>
        <div className="w-full">
          <Lottie
            animationData={animationData}
            loop
            className="h-80 mx-auto w-80"
          />
        </div>
      </Container>

      <Container className="bg-surface py-10 overflow-hidden lg:h-[70rem] ">
        <Typography
          variant="header"
          align="center"
          className="lg:w-[80%] mx-auto font-extrabold"
        >
          You can use Autogon if you are a
        </Typography>

        <div className="grid-rows-1 mt-32 gap-y-9 hidden lg:grid bg-pink-500">
          <div className="relative w-fit bg-green-700">
            <BenefitCard
              active={active === 1}
              onClick={() => setActive(1)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 800 }}
              src="https://a.storyblok.com/f/139616/160x160/9a8818c603/ml-engineer.png"
              position="ML Engineers"
              className="left"
              contents={[
                "Autogon can be used by ML engineers to quickly build and test models, as well as deploy them into production. It also allows for easy monitoring and management of deployed models, which can help ML engineers to ensure that models are performing as expected",
              ]}
            />
            <BenefitCard
              active={active === 2}
              onClick={() => setActive(2)}
              bounds={{ top: -580, left: -200, right: 800, bottom: 600 }}
              src="https://a.storyblok.com/f/139616/160x160/c468ab2a8f/product-leaders.jpg"
              className="top- left-48"
              position=" Executives and Analytics Leaders"
              contents={[
                "Executives and analytics leaders can use Autogon to gain insights from their data and make data-driven decisions. The platform's ability to automate the machine learning process can also help organizations to become more efficient and effective.",
              ]}
            />
            <BenefitCard
              active={active === 3}
              bounds={{ top: -720, left: -200, right: 800, bottom: 410 }}
              onClick={() => setActive(3)}
              src="https://a.storyblok.com/f/139616/160x160/ead56e9b1f/it-leader.png"
              className="top- left-[26rem]"
              position="Software Engineers"
              contents={[
                "Software engineers can use Autogon to deploy machine learning models into production quickly and easily. The platform also allows for easy integration with other systems and applications.",
              ]}
            />
            <BenefitCard
              active={active === 5}
              onClick={() => setActive(5)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 800 }}
              src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
              position="Data Scientists"
              className="left-[40rem]"
              contents={[
                "Autogon allows data scientists to quickly and easily build and test machine learning models, without the need for extensive coding. This can save data scientists time and effort and allow them to focus on more complex modeling tasks.",
              ]}
            />
            <BenefitCard
              active={active === 6}
              onClick={() => setActive(6)}
              bounds={{ top: -580, left: -200, right: 800, bottom: 600 }}
              src="https://a.storyblok.com/f/139616/160x160/8343df36fa/ai-leaders.jpg"
              className="left-[55rem]"
              position="Business Analysts"
              contents={[
                "Business analysts can use Autogon to quickly create predictive models to support business decisions. The platform's automated machine learning capabilities allow analysts to build models without needing deep technical expertise.",
              ]}
            />
            {/* <BenefitCard
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
            /> */}
          </div>
          {/* <div className="relative">
            <BenefitCard
              active={active === 5}
              onClick={() => setActive(5)}
              bounds={{ top: -350, left: -200, right: 800, bottom: 800 }}
              src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
              position="Data Scientists"
              className="top-96"
              contents={[
                "Autogon allows data scientists to quickly and easily build and test machine learning models, without the need for extensive coding. This can save data scientists time and effort and allow them to focus on more complex modeling tasks.",
              ]}
            />
            <BenefitCard
              active={active === 6}
              onClick={() => setActive(6)}
              bounds={{ top: -580, left: -200, right: 800, bottom: 600 }}
              src="https://a.storyblok.com/f/139616/160x160/8343df36fa/ai-leaders.jpg"
              className="top-80"
              position="Business Analysts"
              contents={[
                "Business analysts can use Autogon to quickly create predictive models to support business decisions. The platform's automated machine learning capabilities allow analysts to build models without needing deep technical expertise.",
              ]}
            />
          </div> */}
        </div>
        <div className="lg:hidden mt-10">
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
            className="pt-20 mb-40 h-[45rem]"
            scrollbar={{
              draggable: true,
            }}
            breakpoints={{
              959: { spaceBetween: 22, initialSlide: 1 },
            }}
          >
            <SwiperSlide
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12  shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary  p-12 shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
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
              className={`!h-[40rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
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

      <PartnerCarousel title="Join an elite group of companies revolutionizing their industries with our AI/ML solutions" />

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
              titleClass="!text-2xl"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="Revolutionizing Business Operations: How Autogon's AI/ML Platform is Transforming Industries"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-fit">
            <BlogCard
              caption="blog"
              titleClass="!text-2xl"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="Unlocking the Potential of Data: How Autogon's AI/ML Platform is Empowering Businesses of All Sizes"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-fit">
            <BlogCard
              caption="blog"
              titleClass="!text-2xl"
              src="https://a.storyblok.com/f/139616/1920x1080/dc2cef422d/ai-for-compliance-what-why-and-how.svg/m/767x0"
              title="Disrupting the Fintech Industry: How Autogon's AI/ML Platform is Revolutionizing Financial Services"
            />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Container
        disableOverflowHidden
        grid
        className="bg-[#162427] pb-28 pt-28 place-items-center"
      >
        <div className="">
          <img src={Smilesvg} className="relative mx-auto h-20 w-20 mb-5" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>See Demo</Button>
            <Button
              className="flex items-center gap-3 !text-white hover:!border-primary !border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
