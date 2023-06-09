import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Container, Typography } from "../../components";
import { NavLink } from 'react-router-dom'
import { Header } from "../../Layouts/Header";
import { HeroPage } from "./Layouts/Hero";
import Smilesvg from "../../assets/logo/Autogon-logo-light.png";
import cn from "classnames";
import { BenefitCardProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../../Layouts/Footer";
import { IoIosArrowForward } from "react-icons/io";

import { Testimonial } from "../../Layouts/Testimonial";
import { PartnerCarousel } from "../../Layouts/PartnerCarousel";
import { useState } from "react";
import { Pagination } from "swiper";
import { BenefitCard } from "./components/BenefitCard";
import MlFlow from '../../assets/images/mlFlow.png'
import SideMlFlow from '../../assets/images/sideMlFlow.png'
import screenshots from '../../assets/images/screenshot1.png';
import screenshots1 from '../../assets/images/screenshot2.png';
import screenshots2 from '../../assets/images/screenshot3.png';
import snip from '../../assets/images/snip.png'
import Blogs from "../../components/Blogs";
import { FaPause, FaPlay } from "react-icons/fa";


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
            <ul className="">
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
        <Button className="absolute bottom-10"><NavLink to='/request'>Request a demo</NavLink></Button>
      </div>
  );
};


export const LandingPage = () => {

  const [active, setActive] = useState(7);
  const [video, setVideo] = useState(false)

  const toggleVideo = () => {
    console.log("Hello")
    const videoDOM = document.getElementById("video")
    if (video === false) {
      // @ts-ignore
      videoDOM?.play()
    } else {
      // @ts-ignore
      videoDOM?.pause()
    }
    setVideo(!video)
  }

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
        className="bg-screen pb-14 lg:pb-32 pt-10 "
      >
        <meta
          itemProp="contentUrl"
          content="https://www.youtube.com/watch?v=6WC8Ef4nNjE"
        />
        <div className="relative first:mx-auto lg:mx-24 mt-16 w-full flex overflow-hidden items-center justify-center rounded">
          <div
            className="z-[99] opacity-0 hover:opacity-100 transition-all text-white text-2xl absolute w-full h-full top-0 left-0 flex justify-center items-center"
            onClick={toggleVideo}
          >
            {video ? <FaPause /> : <FaPlay />}
          </div>
          <video id="video" className='rounded-xl w-full'>
            <source src="https://s3.amazonaws.com/cloud.autogonai/autogonai-intro.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>

      <Container className="bg-screen py-10 lg:py-10 pb-32">
        <Typography
          variant="subdisplay"
          align="center"
          className="!text-w mb-4"
        >
          Generate AI models in minutes
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="!text-w lg:w-[59%] mx-auto mb-[56px]"
        >
          Autogon makes the process of building, evaluating, and deploying
          machine learning models more efficient, enabling companies to quickly
          build models and put them into production.
        </Typography>

        <div>
          <img
            src={MlFlow}
            className="hidden md:block mx-auto"
            alt="Integrate quickly"
          />
          <img src={MlFlow} alt="Integrate quickly" className="md:hidden" />
        </div>
      </Container>

      <Container
        className="bg-screen flex-col-reverse lg:flex-row pt-20 pb-10 lg:pb-20 gap-10 lg:gap-0"
        flex
        align="center"
      >
        <div className="w-full gap-10">
          <Typography variant="header" className="!font-bold !font-montserrat">
            NO CODE experience doing the complex but keeping it simple
          </Typography>
          <Typography variant="body" className="mt-8 w-[80%]">
            Simple Drag and drop functions to build powerful wordclass machine
            learning models that would require seasoned professionals, lots of
            time and compute resources
          </Typography>
          <Typography
            variant="link"
            className="text-sm mt-9 !font-extrabold text-primary"
          >
            <NavLink to='/solutions'>
              Learn more
              <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
            </NavLink>
          </Typography>
        </div>
        <div className="w-full p-5">
          <img src={screenshots} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container
        className="bg-screen flex-col-reverse lg:flex-row-reverse pt-20 pb-10 lg:pb-20 gap-10 lg:gap-5"
        flex
        align="center"
      >
        <div className="w-full flex flex-col items-end">
          <Typography variant="header" className="!font-bold !font-montserrat text-right">
            Quickly purchase and deploy powerful ML Models for your intended
            usecase
          </Typography>
          <Typography variant="body" className="mt-8 w-[85%] text-right">
            Go live in less than 5 minutes, browse through our Marketplace with
            richset of Models designed for various industry
          </Typography>
          <Typography
            variant="link"
            className="text-sm mt-9 !font-extrabold text-primary"
          >
            <NavLink to='/solutions'>
              Learn more
              <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
            </NavLink>
          </Typography>
        </div>
        <div className="w-full">
          <img src={screenshots1} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container
        className="bg-screen flex-col-reverse lg:flex-row pt-20 pb-10 lg:pb-20 gap-10 lg:gap-10"
        flex
        align="center"
      >
        <div className="w-full gap-10">
          <Typography variant="header" className="!font-bold !font-montserrat">
            Build custom software experiences with well-documented APIs and
            Integration SDK's
          </Typography>
          <Typography variant="body" className="mt-8 w-[100%]">
            Developers love our thorough, well-documented APIs and SDK's that
            let you to build everything from simple weekend projects, to complex
            products irrespective of the industry, serving hundreds of thousands
            of customers. If you can imagine it, you can build it with Autogon.
          </Typography>
          <Typography
            variant="link"
            className="text-sm mt-9 !font-extrabold text-primary"
          >
            <NavLink to='/solutions'>
              Learn more
              <IoIosArrowForward className="h-3 w-3 ml-2 inline" />
            </NavLink>
          </Typography>
        </div>
        <div className="w-full">
          <img src={screenshots2} className="h-full w-full object-contain" />
        </div>
      </Container>

      <Container
        className="bg-screen flex-col-reverse lg:flex-row-reverse pt-20 pb-10 lg:pb-20 gap-10"
        flex
        align="center"
      >
        <div className="w-full flex flex-col items-end">
          <Typography variant="header" className="!font-bold !font-montserrat text-right">
            Tap into the power of our AutoML engine
          </Typography>
          <Typography variant="body" className="mt-8 w-[90%] text-right">
            Save time and complete task in minutes by leaveraging the power of
            our AUTOML by simply transfering data to our training algorithms and
            automatically get the best neural network architecture for a given
            issue with meterics on accuracy
          </Typography>
        </div>
        <div className="w-full">
          <img src={SideMlFlow} alt='loading...' />
        </div>
      </Container>

      <Container className="bg-screen pt-10 overflow-hidden lg:h-[700px]">
        <Typography
          variant="subdisplay"
          align="center"
          className="lg:w-[60%] mx-auto font-extrabold"
        >
          You can use Autogon<br />if you are a
        </Typography>

        <div className="grid-rows-1 mt-32 gap-y-9 hidden lg:grid ">
          <div className="relative w-fit ">
            <BenefitCard
              active={active === 1}
              onClick={() => setActive(1)}
              bounds={{ top: -350, left: -200, right: 880, bottom: 300 }}
              src="https://a.storyblok.com/f/139616/160x160/9a8818c603/ml-engineer.png"
              position="ML Engineers"
              className="left hidden lg:block"
              contents={[
                "Autogon can be used by ML engineers to quickly build and test models, as well as deploy them into production. It also allows for easy monitoring and management of deployed models, which can help ML engineers to ensure that models are performing as expected",
              ]}
            />
            <BenefitCard
              active={active === 2}
              onClick={() => setActive(2)}
              bounds={{ top: -350, left: -200, right: 700, bottom: 300 }}
              src="https://a.storyblok.com/f/139616/160x160/c468ab2a8f/product-leaders.jpg"
              className="left-48 hidden lg:block"
              position="Executives and Analytics Leaders"
              contents={[
                "Executives and analytics leaders can use Autogon to gain insights from their data and make data-driven decisions. The platform's ability to automate the machine learning process can also help organizations to become more efficient and effective.",
              ]}
            />
            <BenefitCard
              active={active === 3}
              bounds={{ top: -350, left: -430, right: 460, bottom: 300 }}
              onClick={() => setActive(3)}
              src="https://a.storyblok.com/f/139616/160x160/ead56e9b1f/it-leader.png"
              className="hidden lg:block left-[26rem]"
              position="Software Engineers"
              contents={[
                "Software engineers can use Autogon to deploy machine learning models into production quickly and easily. The platform also allows for easy integration with other systems and applications.",
              ]}
            />
            <BenefitCard
              active={active === 5}
              onClick={() => setActive(5)}
              bounds={{ top: -350, left: -650, right: 240, bottom: 300 }}
              src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
              position="Data Scientists"
              className="left-[40rem] hidden lg:block"
              contents={[
                "Autogon allows data scientists to quickly and easily build and test machine learning models, without the need for extensive coding. This can save data scientists time and effort and allow them to focus on more complex modeling tasks.",
              ]}
            />
            <BenefitCard
              active={active === 6}
              onClick={() => setActive(6)}
              bounds={{ top: -350, left: -900, right: 0, bottom: 300 }}
              src="https://a.storyblok.com/f/139616/160x160/8343df36fa/ai-leaders.jpg"
              className="left-[55rem] hidden lg:block"
              position="Business Analysts"
              contents={[
                "Business analysts can use Autogon to quickly create predictive models to support business decisions. The platform's automated machine learning capabilities allow analysts to build models without needing deep technical expertise.",
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
            slideActiveClass="!bg-accent"
            pagination={{
              clickable: true,
              bulletActiveClass: "!bg-primary !opacity-100 !h-3 !w-3",
              bulletClass: "h-3 w-3 inline-block rounded-full bg-black mx-2",
            }}
            className="!bg-screen pt-20 mb-40 h-[45rem] md:h-[28rem]"
            scrollbar={{
              draggable: true,
            }}
            breakpoints={{
              959: { spaceBetween: 22, initialSlide: 1 },
            }}
          >
            <SwiperSlide
              className={`!h-[40rem] md:!h-[24rem] rounded-6xl bg-white p-12  shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 1}
                onClick={() => setActive(1)}
                src="https://a.storyblok.com/f/139616/160x160/9a8818c603/ml-engineer.png"
                position="ML Engineers"
                contents={[
                  "Autogon can be used by ML engineers to quickly build and test models, as well as deploy them into production. It also allows for easy monitoring and management of deployed models, which can help ML engineers to ensure that models are performing as expected",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] md:!h-[24rem] rounded-6xl bg-tertiary  p-12 shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 2}
                onClick={() => setActive(2)}
                src="https://a.storyblok.com/f/139616/160x160/c468ab2a8f/product-leaders.jpg"
                className="top-52 left-40"
                position="Executives and Analytics Leaders"
                contents={[
                  "Executives and analytics leaders can use Autogon to gain insights from their data and make data-driven decisions. The platform's ability to automate the machine learning process can also help organizations to become more efficient and effective.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] md:!h-[24rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 3}
                onClick={() => setActive(3)}
                src="https://a.storyblok.com/f/139616/160x160/ead56e9b1f/it-leader.png"
                className="top-[25rem] left-40"
                position="Software Engineers"
                contents={[
                  "Software engineers can use Autogon to deploy machine learning models into production quickly and easily. The platform also allows for easy integration with other systems and applications.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] md:!h-[24rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 4}
                onClick={() => setActive(4)}
                src="https://a.storyblok.com/f/139616/160x160/d782b4acd8/cxo.png"
                className="top-[37rem] left-40"
                position="Data Scientists"
                contents={[
                  "Autogon allows data scientists to quickly and easily build and test machine learning models, without the need for extensive coding. This can save data scientists time and effort and allow them to focus on more complex modeling tasks.",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[40rem] md:!h-[24rem] rounded-6xl bg-tertiary p-12 shadow-4xl cursor-move select-none`}
            >
              <BenefitMobileCard
                active={active === 5}
                onClick={() => setActive(5)}
                src="https://a.storyblok.com/f/139616/160x160/b37814d5df/project-managers.jpg"
                position="Business Analysts"
                contents={[
                  "Business analysts can use Autogon to quickly create predictive models to support business decisions. The platform's automated machine learning capabilities allow analysts to build models without needing deep technical expertise.",
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

      <Testimonial />

      <PartnerCarousel title="Join an elite group of companies revolutionizing their industries with our AI/ML solutions" />

      <Container noGutter className="bg-screen py-10 pt-5 flex flex-col items-center">
        <Typography
          variant="header"
          align="center"
          className="w-[80%] mx-auto font-semibold !font-montserrat"
        >
          Recent news
        </Typography>
        <Blogs />
      </Container>

      <Container
        isLightDarkMode
        background
        disableOverflowHidden
        grid
        className="!bg-gray-800 pb-28 pt-28 place-items-center"
      >
        <div className="">
          <img src={Smilesvg} className="relative mx-auto h-20 w-20 mb-10" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography
            variant="body"
            align="center"
            className="!text-white mt-3"
          >
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit gap-2 mt-16 mb-8 lg:mb-0">
            <Button><NavLink to='/request'>Request a demo</NavLink></Button>
            <a href="https://console.autogon.ai" target="_blank">
              <Button
                className="flex items-center gap-3 !text-white hover:!border-secondary !border-white"
                variant="outline"
              >
                <a href="http://console.autogon.ai/">Get started</a>
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
              </Button>
            </a>
          </div>
        </div>
      </Container>

      <Footer darkMode />
    </>
  );
};
