import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BsCheck } from "react-icons/bs";
import { Button, Container, Typography } from "../../components";
import { BreadCrumb } from "../../components/BreadCrumb";
import { Header } from "../../Layouts/Header";
import { PartnerCarousel } from "../../Layouts/PartnerCarousel";
import Smilesvg from "../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../Layouts/Footer";
import Checked from "./Checked";

type PricingCardTypes = {
  img: string;
  type: string;
  title: string;
  benefits: string[];
  buttonText: string | JSX.Element,
  buttonType?: "outline" | "contained",
  isDarkButton?: boolean
};

const PricingCard = ({ img, title, type, benefits, buttonText, isDarkButton, buttonType }: PricingCardTypes) => {
  return (
    <Container
      isDarkMode
      as="div"
      className="rounded-6xl p-5 py-10 hover:-translate-y-10 ease-linear duration-200 hover:!bg-[#c5d8ba]/30"
    >
      <div className="flex items-center gap-2">
        <div className="h-16 w-16">
          <img src={img} alt={title} />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <Typography isDarkMode variant="title" className="!text-[2.5rem] capitalize">
            {title}
          </Typography>
        </div>
      </div>
      <Typography align="center" isDarkMode variant="body" className="my-5">
        {type}
      </Typography>

      <Button
        darkMode={isDarkButton}
        className="flex items-center gap-3 mb-3 !mt-10 lg:mb-0 group mx-auto"
        variant={buttonType}
      >
        {buttonText}
      </Button>

      <ul className="mt-16">
        {benefits.map((benefit, index) => (
          <ListItem key={index} message={benefit} />
        ))}
      </ul>
    </Container>
  );
}

export const Pricing = () => {
  return (
    <>
      <Header />

      <Container className="bg-screen pt-28">
        <BreadCrumb />
        <Typography
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[70%] pt-16"
        >
          Choose the right plan for your AI journey
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="capitalize lg:w-[45rem] mx-auto mt-5"
        >
          Welcome to the pricing page of our platform! We understand that every
          business has unique needs and budget constraints, which is why we
          offer a variety of pricing options to fit your specific requirements.
        </Typography>
      </Container>

      <Container className="w-full overflow-x-scroll pb-20 pt-28 bg-screen">
        <table className="w-[300%] lg:w-full">
          <thead className="w-full">
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold text-gray-600 flex flex-col items-start justify-start gap-2">
                <h2 className="font-bold text-lg text-black">On all plans</h2>
                <span className="flex items-center gap-1"><Checked />Upgrade anytime</span>
                <span className="flex items-center gap-1"><Checked />Downgrade anytime</span>
                <span className="flex items-center gap-1"><Checked />Cancel anytime</span>
              </td>
              <td className="flex flex-col items-center gap-1">
                <h2 className="font-bold text-lg">Automate</h2>
                <div className="flex items-start">
                  <span className="text-sm pt-1">$</span>
                  <span className="text-2xl font-bold">49</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold">USD / month</span>
                <Button>Start a Free Trial</Button>
                <span className="text-sm font-semibold">Automate your marketing</span>
              </td>
              <td className="flex flex-col items-center gap-1">
                <h2 className="font-bold text-lg">Scale</h2>
                <div className="flex items-start">
                  <span className="text-sm pt-1">$</span>
                  <span className="text-2xl font-bold">149</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold">USD / month</span>
                <Button>Start a Free Trial</Button>
                <span className="text-sm font-semibold">Scale your marketing</span>
              </td>
              <td className="flex flex-col items-center gap-1">
                <h2 className="font-bold text-lg">Automate</h2>
                <div className="flex items-start">
                  <span className="text-sm pt-1">$</span>
                  <span className="text-2xl font-bold">299</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold">USD / month</span>
                <Button>Start a Free Trial</Button>
                <span className="text-sm font-semibold">High volume access</span>
              </td>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Bandwidth (GB)</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
              <td className="text-center">100</td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Maximum number of Models</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
              <td className="text-center">Unlimited</td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Support</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">All channels</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Multi-Tenant SaaS</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Bias and fairness</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Usage reports</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Deploy to external environments</td>
              <td className="text-center text-lg">--</td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Manage and monitor external models</td>
              <td className="text-center text-lg">--</td>
              <td className="text-center text-lg">--</td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Real-time predictions</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Service health monitoring</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Customer interference models</td>
              <td className="text-center text-lg">--</td>
              <td className="text-center text-lg">--</td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Studio</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">No-code data prep</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">Automated deep learning</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">multilabel classification</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
            <tr className="w-full grid grid-cols-4 justify-between">
              <td className="font-semibold">multi-model</td>
              <td><Checked /></td>
              <td><Checked /></td>
              <td><Checked /></td>
            </tr>
          </tbody>
        </table>
      </Container>
        

      <Container
        disableOverflowHidden
        isLightDarkMode
        background
        className="py-28"
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

      <Footer darkMode />
    </>
  );
};

const ListItem = ({ message }: { message: string }) => {
  return (
    <li className="flex items-center gap-3 my-2">
      <div className="h-10 w-10">
        <BsCheck className="h-8 w-8 text-white group-hover:text-neutral" />
      </div>
      <div className="flex-1">
        <Typography isDarkMode variant="body" className="!text-[14px] !leading-6">
          {message}
        </Typography>
      </div>
    </li>
  );
};
