import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import Logo from '../../../assets/logo/Autogon-logo-light.png'
import { Footer } from "../../../Layouts/Footer";
import { Banking, FinancialServices, Healthcare, Manufacturing, OilAndGas, PublicSector, Retail, Sports } from "./sections";

export const Solutions = () => {
  return (
    <>
      <Header />

      <Container
        background
        className="bg-screen w-full h-screen pt-[10rem] lg:pt-[8rem] pb-28"
      >
        <BreadCrumb />
        <Typography
          align="center"
          variant="display"
          className="mx-auto mt-20 lg:w-3/4"
        >
          Solutions designed for industry-specific
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="capitalize lg:w-1/2 mx-auto mt-5"
        >
          At our company, we understand that different industries have different
          needs and challenges when it comes to AI and machine learning. That's
          why we've developed industry-specific solutions to help businesses in
          each sector take advantage of the power of AI.
        </Typography>
      </Container>

      <div className="flex flex-col gap-8 lg:gap-0 bg-screen pb-16 lg:pb-0">
        <Banking />
        <Healthcare />
        <Manufacturing />
        <Retail />
        <FinancialServices />
        <OilAndGas />
        <PublicSector />
        <Sports />
      </div>

      <Container
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
        <div className="">
          <img src={Logo} className="relative mx-auto h-20 w-20 mb-10" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography variant="body" align="center" className="!text-white mt-3">
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit gap-2 mt-16 mb-8 lg:mb-0">
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
}