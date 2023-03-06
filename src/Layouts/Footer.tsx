import { Container, Typography } from "../components";
import Logo from "../assets/logo/Autogon-full-logo-light.png";
import DarkLogo from "../assets/logo/Autogon-logo-light.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSlack,
} from "react-icons/fa";
import cn from "classnames";
import { FooterLinks } from "../components/FooterLinks";
import { NavLink } from "react-router-dom";

interface FooterProps {
  darkMode?: boolean;
}

export const Footer = ({ darkMode }: FooterProps) => {
  let productLinks = {
    title: "Product",
    links: [
      {
        name: "AI cloud platform",
      },
      {
        name: "Augmented Intelligence",
        link: "/platform/label-annotate",
      },
      {
        name: "Data Engineering",
        link: "/platform/explore-and-fix",
      },
      {
        name: "Machine Learninge",
        link: "/platform/integrate-automate",
      },
      {
        name: "MLOps",
        link: "/professional-services",
      },
      {
        name: "Decision Intelligence",
        link: "pricing",
      },
      {
        name: "Data Visualization. Data Labeling",
        link: "pricing",
      },
      {
        name: "Plan & Features",
        link: "pricing",
      },
    ],
  };

  let toolLinks = {
    title: "Key Capabilities",
    links: [
      {
        name: "AutoML",
        link: "/professional-services#from-design",
        hash: true,
      },
      {
        name: "DragNDrop AI",
        link: "/professional-services#trained-workforce",
        hash: true,
      },
      {
        name: "Data Preparation",
        link: "/professional-services#data-centric",
        hash: true,
      },
      {
        name: "Automated Time Series",
        link: "/professional-services#data-centric",
        hash: true,
      },
      {
        name: "No-Code AI Apps",
        link: "/professional-services#data-centric",
        hash: true,
      },
      {
        name: "More Capabilities",
        link: "/professional-services#data-centric",
        hash: true,
      },
    ],
  };

  let guidesLinks = {
    title: "Solutions By Roles",
    links: [
      {
        name: "Business Analysis",
        link: "",
      },
      {
        name: "Data Scientists",
        link: "",
      },
      {
        name: "IT Operations",
        link: "",
      },
      {
        name: "Software Engineers",
        link: "",
      },
      {
        name: "Executives & Analytics Leaders",
        link: "",
      },
    ],
  };

  let companyLink = {
    title: "Company",
    links: [
      {
        name: "Contact Us",
      },
      {
        name: "Careers",
      },
      {
        name: "Press",
      },
    ],
  };

  let documentationLink = {
    title: "Resources",
    links: [
      {
        name: "Integration Library",
      },
      {
        name: "Blog",
      },
      {
        name: "Webinars",
      },
      {
        name: "Community",
      },
      {
        name: "Documentation",
      },
      {
        name: "Events",
      },
    ],
  };

  let usaLink = {
    title: "United States",
    links: [
      {
        name: "524 Broadway, New York, NY 10012",
      },
    ],
  };

  return (
    <Container
      className="relative bg-[#232f3e] py-8 lg:pb-20 pb-60 flex-col-reverse lg:flex-row"
      isDarkMode={darkMode}
      flex
    >
      <div className="w-[40rem] h-full mt-16 lg:mt-0">
        <img
          src={darkMode ? DarkLogo : Logo}
          className="h-[48.47px] font-roboto font-bold select-none"
        />
        <Typography isDarkMode={darkMode} variant="caption" className="mt-2 !text-white">
          Autogon © {new Date().getFullYear()}
        </Typography>
      </div>
      <div className="flex gap-x-20 lg:gap-y-12 gap-6 mt-5 lg:mt-0 flex-wrap">
        <FooterLinks
          darkMode={darkMode}
          links={productLinks.links}
          title={productLinks.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={toolLinks.links}
          title={toolLinks.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={guidesLinks.links}
          title={guidesLinks.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={documentationLink.links}
          title={documentationLink.title}
        />
        <FooterLinks
          darkMode={darkMode}
          className="mt-6 lg:mt-0"
          links={companyLink.links}
          title={companyLink.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={usaLink.links}
          title={usaLink.title}
        />
      </div>

      <div className="absolute h-10 flex flex-col-reverse lg:flex-row lg:items-center bottom-10 lg:bottom-3 lg:gap-16 gap-4">
        <div className="flex items-center gap-x-4">
          <a
            target='__blank'
            href='https://web.facebook.com/people/Autogon/100088750542777/'
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaFacebookF
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </a>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaGithub
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaLinkedinIn
              className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaTwitter
              className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaYoutube
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-surface" : "bg-black"
            }`}
          >
            <FaSlack
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-y-3 lg:items-center lg:gap-x-20 lg:ml-3 !text-left ">
          <Typography
            variant="caption"
            isDarkMode={darkMode}
            className={cn(
              "uppercase cursor-pointer !text-white hover:underline"
            )}
          >
            Privacy Policy
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn(
              "uppercase cursor-pointer !text-white hover:underline"
            )}
          >
            Legal Notice
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn(
              "uppercase cursor-pointer !text-white hover:underline"
            )}
          >
            Security Info
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn(
              "uppercase cursor-pointer !text-white hover:underline"
            )}
          >
            Status
          </Typography>
        </div>
      </div>
    </Container>
  );
};
