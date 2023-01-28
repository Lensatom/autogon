import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import Logo from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";

export const Roles = () => {
  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pt-[10rem] lg:pt-[8rem] pb-28"
      >
        <BreadCrumb darkMode />
        <Typography
          isDarkMode
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[80rem]"
        >
          Solutions designed for role-specific
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="capitalize lg:w-[45rem] mx-auto mt-5"
        >
          At our company, we understand that different roles within an
          organization have different needs and challenges when it comes to AI
          and machine learning. That's why we've developed solutions tailored to
          specific roles to help professionals in each area take advantage of
          the power of AI.
        </Typography>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 pb-40 gap-3"
        flex
        id="business-analysis"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            BUSINESS ANALYSTS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Business analysts play a key role in driving business growth through
            data-driven insights. Our platform provides a wide range of tools
            and capabilities for business analysts, including data
            visualization, advanced analytics, and decision intelligence. With
            our platform, business analysts can easily gain insights from their
            data and make data-driven decisions that drive business growth.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/037ba66dc0/for-all-data.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        id="data-scientisits"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            DATA SCIENTISTS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Data scientists are responsible for building and deploying machine
            learning models. Our platform provides a complete end-to-end
            solution for data scientists, including data engineering, machine
            learning, and MLOps. With our platform, data scientists can easily
            access, clean, and prepare data for machine learning, as well as
            build, deploy, and manage models in production.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="it-operations"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            IT OPERATIONS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            IT operations teams are responsible for ensuring that the technology
            infrastructure is running smoothly and efficiently. Our platform
            provides a complete solution for MLOps, including model management,
            monitoring, and deployment. With our platform, IT operations teams
            can easily manage and deploy models in production, ensuring that the
            models are always up-to-date and accurate.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="software-engineering"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [4]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            SOFTWARE ENGINEERS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Software engineers play a key role in building and deploying machine
            learning models. Our platform provides a complete end-to-end
            solution for software engineers, including data engineering, machine
            learning, and MLOps. With our platform, software engineers can
            easily access, clean, and prepare data for machine learning, as well
            as build, deploy, and manage models in production.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="executives"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [5]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            EXECUTIVES & ANALYTICS LEADERS
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Executives and analytics leaders are responsible for driving
            business growth and making strategic decisions. Our platform
            provides a complete solution for decision intelligence, including
            data visualization, advanced analytics, and data labeling. With our
            platform, executives and analytics leaders can easily gain insights
            from their data and make data-driven decisions that drive business
            growth.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
        <div className="">
          <img src={Logo} className="relative mx-auto h-20 w-20 mb-5" />
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
            <Button>See a Demo</Button>
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

      <Footer darkMode />
    </>
  );
};
