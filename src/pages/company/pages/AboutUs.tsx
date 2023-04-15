import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";

export const Company = () => {
  return (
    <>
      <Header />

      <Container className="bg-screen lg:pb-40 pt-[8rem]">
        <BreadCrumb />
        <Typography align="center" variant="display" className="mb-1 mt-10">
          Why Autogon
        </Typography>
        <Typography align="center" variant="body" className="mt-5 lg:px-[20%]">
          Welcome to Autogon, the leading company in the field of artificial
          intelligence and machine learning. Our mission is to provide businesses
          with the most advanced AI-powered solutions that allow them to make
          data-driven decisions and stay ahead of the competition.
        </Typography>
        <Typography align="center" variant="body" className="mt-5 lg:px-[20%]">
          At Autogon, we understand that the world of AI and machine learning can be
          complex and overwhelming, which is why we've made it our priority to develop
          cutting-edge technologies that are easy to use and accessible to everyone.
          Our team of experts has spent years researching and developing state-of-the-art
          algorithms that can be applied to a wide range of industries, from finance and
          healthcare to marketing and retail.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-4 lg:px-[20%]"
        >
          We pride ourselves on our commitment to innovation and continuous improvement.
          That's why we invest heavily in research and development to ensure that our
          solutions are always at the forefront of the industry. Our mission is to help
          our clients achieve their business goals by providing them with the most powerful
          and effective AI tools available.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-8 lg:px-[20%]"
        >
          At Autogon, we believe that the key to success is collaboration.
          That's why we work closely with our clients to understand their
          unique needs and develop solutions that meet their specific requirements.
          We pride ourselves on our ability to build long-lasting relationships with
          our clients and provide them with unparalleled customer service and support.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-8 lg:px-[20%]"
        >
          We are passionate about what we do, and we are driven by a desire to make a difference
          in the world. We believe that AI has the power to transform the way we do business,
          and we are committed to being at the forefront of this exciting and rapidly evolving
          field.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-8 lg:px-[20%]"
        >
          Thank you for considering Autogon for your AI and machine learning needs. We look forward to
          working with you and helping you achieve your business goals.
        </Typography>
      </Container>

      <PartnerCarousel
        title="Trusted by the world’s best companies"
        subtitle="Our clients and investors trust Autogon to take the AI industry to new and exciting places."
      />
      <Container className="h-40 bg-screen hidden lg:block"></Container>
      <Container
        disableOverflowHidden
        isDarkMode
        background
        className="!bg-gray-800 pb-28 pt-28"
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
