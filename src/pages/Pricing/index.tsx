import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BsCheck } from "react-icons/bs";
import { Button, Container, Typography } from "../../components";
import { BreadCrumb } from "../../components/BreadCrumb";
import { Header } from "../../Layouts/Header";

export const Pricing = () => {
  return (
    <>
      <Header darkMode />

      <Container isDarkMode background className="bg-surface pt-[8rem] pb-28">
        <BreadCrumb darkMode />
        <Typography
          isDarkMode
          align="center"
          variant="display"
          className="mx-auto mt-4"
        >
          Choose the right plan for your AI journey
        </Typography>
        <Typography
          variant="body"
          align="center"
          isDarkMode
          className="capitalize lg:w-[45rem] mx-auto mt-5"
        >
          Need a labeling platform? Choose Kili technology, and leverage one
          tool to label, find and fix issues, simplify LabelingOps, and
          dramatically accelerate the build of reliable AI.
        </Typography>
      </Container>

      <Container isDarkMode background className="pb-20">
        <div className="w-[80%] gap-5 grid grid-cols-3 mx-auto pb-2">
          <Container isDarkMode as="div" className="rounded-7xl p-5 py-10">
            <div className="flex items-center gap-2">
              <div className="h-16 w-16">
                <img
                  src="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
                  alt="commmunity"
                />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <Typography
                  isDarkMode
                  variant="title"
                  className="!text-[2.5rem]"
                >
                  Community
                </Typography>
              </div>
            </div>
            <Typography
              align="center"
              isDarkMode
              variant="body"
              className="my-5"
            >
              Free
            </Typography>

            <Button
              darkMode
              className="flex items-center gap-3 mb-3 !mt-10 lg:mb-0 group mx-auto"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white group-hover:text-neutral" />
            </Button>

            <ul className="mt-16">
              <ListItem message="Limited to 5 users and 1k annotations*/month" />
              <ListItem message="All interfaces & standard quality workflows features available" />
              <ListItem message="API limited to 1000 predictions**/month" />
              <ListItem message="Cloud only" />
              <ListItem message="Community support" />
            </ul>
          </Container>

          <Container isDarkMode as="div" className="rounded-7xl p-5 py-10">
            <div className="flex items-center gap-2">
              <div className="h-16 w-16">
                <img
                  src="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
                  alt="commmunity"
                />
              </div>
              <div className="flex flex-1">
                <Typography
                  isDarkMode
                  variant="title"
                  className="!text-[2.5rem]"
                >
                  Start
                </Typography>
              </div>
            </div>
            <Typography
              align="center"
              isDarkMode
              variant="body"
              className="my-5"
            >
              Custom Plan
            </Typography>

            <Button
              darkMode
              className="flex items-center gap-3 mb-3 !mt-10 lg:mb-0 group mx-auto"
              // variant="outline"
            >
              Request a demo
            </Button>

            <ul className="mt-16">
              <ListItem message="Limited to 5 users and 1k annotations*/month" />
              <ListItem message="All interfaces & standard quality workflows features available" />
              <ListItem message="API limited to 1000 predictions**/month" />
              <ListItem message="Cloud only" />
              <ListItem message="Community support" />
            </ul>
          </Container>

          <Container isDarkMode as="div" className="rounded-7xl p-5 py-10">
            <div className="flex items-center gap-2">
              <div className="h-16 w-16">
                <img
                  src="https://a.storyblok.com/f/139616/x/cf6dd89b57/discover.svg"
                  alt="commmunity"
                />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <Typography
                  isDarkMode
                  variant="title"
                  className="!text-[2.5rem]"
                >
                  Enterprise
                </Typography>
              </div>
            </div>
            <Typography
              align="center"
              isDarkMode
              variant="body"
              className="my-5"
            >
              Custom Plan
            </Typography>

            <Button
              darkMode
              className="flex items-center gap-3 mb-3 !mt-10 lg:mb-0 group mx-auto"
              variant="outline"
            >
              Talk to sales
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white group-hover:text-neutral" />
            </Button>

            <ul className="mt-16">
              <ListItem message="Unlimited users & 500k annotations included" />
              <ListItem message="Advanced DCAI & Quality workflows available" />
              <ListItem message="Cloud, Hybrid and On-Premises deployment" />
              <ListItem message="Dedicated CSM (inc. standard training & onboarding)" />
              <ListItem message="External workforce available" />
              <ListItem message="Single Sign-on" />
            </ul>
          </Container>
        </div>
      </Container>
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
