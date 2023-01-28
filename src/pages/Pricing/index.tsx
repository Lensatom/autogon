import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BsCheck } from "react-icons/bs";
import { Button, Container, Typography } from "../../components";
import { BreadCrumb } from "../../components/BreadCrumb";
import { Header } from "../../Layouts/Header";
import { PartnerCarousel } from "../../Layouts/PartnerCarousel";
import Smilesvg from "../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../Layouts/Footer";

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
      <Header darkMode />

      <Container isDarkMode background className="bg-surface pt-[10rem] pb-28">
        <BreadCrumb darkMode />
        <Typography
          isDarkMode
          align="center"
          variant="display"
          className="mx-auto mt-4 lg:w-[80rem]"
        >
          Choose the right plan for your AI journey
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="capitalize lg:w-[45rem] mx-auto mt-5"
        >
          Welcome to the pricing page of our platform! We understand that every
          business has unique needs and budget constraints, which is why we
          offer a variety of pricing options to fit your specific requirements.
        </Typography>
      </Container>

      <Container disableOverflowHidden isDarkMode background className="pb-20">
        <div className="lg:w-[80%] gap-5 grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-3 mx-auto pb-2">
          <PricingCard
            img="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
            title="community"
            type="Basic Plan"
            isDarkButton
            buttonType="outline"
            benefits={[
              "Limited number of models",
              "All interfaces & standard quality workflows features available",
              "API limited to 1000 predictions**/month",
              "Cloud only",
              "Community support",
            ]}
            buttonText={
              <>
                Start for free
                <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white group-hover:text-neutral" />
              </>
            }
          />
          <PricingCard
            img="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
            title="start"
            type="Custom Plan"
            buttonType="contained"
            benefits={[
              "Limited to 5 users and 1k annotations*/month",
              "All interfaces & standard quality workflows features available",
              "API limited to 1000 predictions**/month",
              "Cloud only",
              "Community support",
            ]}
            buttonText="Request a demo"
          />

          <PricingCard
            img="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
            title="Enterprise"
            type="Custom Plan"
            isDarkButton
            buttonType="contained"
            benefits={[
              "Limited number of models",
              "All interfaces & standard quality workflows features available",
              "API limited to 1000 predictions**/month",
              "Cloud only",
              "Community support",
            ]}
            buttonText={
              <>
                Start for free
                <ArrowTopRightOnSquareIcon className="h-5 w-5 text-neutral group-hover:text-neutral" />
              </>
            }
          />
        </div>
        <Typography
          isDarkMode
          variant="caption"
          align="center"
          className="w-[80%] mx-auto mt-3 text-[13px]"
        >
          Our pricing is based on the number of models you want to build and
          deploy, and the volume of data you want to use. We offer different
          pricing plans that range from a basic plan for small businesses, to an
          enterprise plan for large organizations.
        </Typography>
      </Container>

      <PartnerCarousel
        darkMode
        title="They trust us"
        titleClassName="lg:!text-[100px] !text-[60px] !font-bold mt-10"
        carouselContainerClassName="lg:mt-8 mt-4"
      />

      <Container isDarkMode background className="bg-surface pt-1 pb-40 ">
        <div className="flex flex-col-reverse lg:flex-row lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] leading-[90%] lg:!text-[86px]"
            >
              Create training datasets fast
            </Typography>
            <Typography isDarkMode variant="body" className="mt-6">
              Annotate all types of unstructured data rapidly and accurately
              with customizable annotation tasks & an interface optimized for
              productivity & quality.
            </Typography>
            <Typography isDarkMode variant="body" className="mt-3">
              Automate labeling to save time with smart tools & model
              predictions.
            </Typography>
            {/* <div className="lg:flex mt-9 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div> */}
          </div>
          <div className="w-full mb-8 lg:mb-0">
            <img
              src="https://a.storyblok.com/f/139616/2339x1666/0054abe91a/annotate-fast.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <Container isDarkMode background classNam>
        <div className="flex gap-10 flex-col-reverse lg:flex-row-reverse lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Find & fix issues in your ML datasets
            </Typography>
            <Typography isDarkMode variant="body" className="mt-6">
              Supervise quality level & improvements to ensure low-error
              datasets. Simplify advanced collaboration workflows. Leverage
              programmatic QA. Explore your datasets and identify the data that
              matters.
            </Typography>

            {/* <div className="lg:flex mt-20 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div> */}
          </div>
          <div className="w-full">
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/a1314fefc1/explore-and-fix-issues.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <Container isDarkMode background className="bg-surface pb-20">
        <div className="flex flex-col-reverse items-center lg:flex-row gap-10">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Simplify your LabelingOps
            </Typography>
            <Typography isDarkMode variant="body" className="mt-6">
              Integrate labeling operations with your existing ML stack, easily
              import and export data, create and manage labeling projects, and
              manage the entire training data lifecycle of your ML project on
              Kili. Use the CLI & our SDK to upload and download vast amounts of
              data quickly.
            </Typography>

            {/* <div className="lg:flex mt-9 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div> */}
          </div>
          <div className="w-full">
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/68c38b951d/dataops-1.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <Container
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-1 pb-60 gap-10"
        flex
        isDarkMode
        background
        align="center"
      >
        <div className="w-full">
          <Typography isDarkMode variant="header" className="font-semibold">
            Augment your team
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-[85%]">
            Get ahead of the game with expert labeling workforce. Strengthen
            your project management & ML teams with Kili experts.
          </Typography>
        </div>
        <div className="w-full">
          {/* <img src={DataSetImage} className="h-full w-full object-contain" /> */}
        </div>
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
