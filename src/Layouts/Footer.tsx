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
        link: "/platform#augmented-intelligence",
        hash: true,
      },
      {
        name: "Data Engineering",
        link: "/platform/data-engineering",
        hash: true,
      },
      {
        name: "MLOps",
        link: "/platform#mlops",
        hash: true,
      },
      {
        name: "Decision Intelligence",
        link: "/platform#data-intelligence",
        hash: true,
      },
      {
        name: "Data Visualization",
        link: "/platform#data-visualization",
        hash: true,
      },
      {
        name: "Data Labeling",
        link: "/platform#data-labelling",
        hash: true,
      },
      {
        name: "Plan & Features",
        link: "/pricing",
        hash: true,
      },
    ],
  };

  let toolLinks = {
    title: "Key Capabilities",
    links: [
      {
        name: "AutoML",
        link: "/platform/key-capabilities#auto-ml",
        hash: true,
      },
      {
        name: "DragNDrop AI",
        link: "/platform/key-capabilities#drag-drop",
        hash: true,
      },
      {
        name: "Data Preparation",
        link: "/platform/key-capabilities#data-preparation",
        hash: true,
      },
      {
        name: "Automated Time Series",
        link: "/platform/key-capabilities#automated-time",
        hash: true,
      },
      {
        name: "No-Code AI Apps",
        link: "/platform/key-capabilities#no-code",
        hash: true,
      },
    ],
  };

  let solutionLinks = {
    title: "BY INDUSTRY",
    links: [
      {
        name: "Banking",
        link: "/solutions#banking",
        hash: true,
      },
      {
        name: "Healthcare",
        link: "/solutions#healthcare",
        hash: true,
      },
      {
        name: "Manufacturing",
        link: "/solutions#manufacturing",
        hash: true,
      },
      {
        name: "Retail",
        link: "/solutions#retail",
        hash: true,
      },
      {
        name: "Financial Services",
        link: "/solutions#financial-services",
        hash: true,
      },
      {
        name: "Oil and Gas",
        link: "/solutions#oil-gas",
        hash: true,
      },
      {
        name: "Public Sector",
        link: "/solutions#public-sector",
        hash: true,
      },
      {
        name: "Sports",
        link: "/solutions#sports",
        hash: true,
      },
    ],
  }

  let guidesLinks = {
    title: "Solutions By Roles",
    links: [
      {
        name: "Business Analysis",
        link: "/solutions/roles#business-analysis",
        hash: true,
      },
      {
        name: "Data Scientists",
        link: "/solutions/roles#data-scientists",
        hash: true,
      },
      {
        name: "IT Operations",
        link: "/solutions/roles#it-operations",
        hash: true,
      },
      {
        name: "Software Engineers",
        link: "/solutions/roles#software-engineers",
        hash: true,
      },
      {
        name: "Executives & Analytics Leaders",
        link: "/solutions/roles#executives",
        hash: true,
      },
    ],
  };

  let companyLink = {
    title: "Company",
    links: [
      {
        name: "Contact Us",
        link: '/contact'
      },
      {
        name: "Careers",
        link: '/careers'
      },
      {
        name: "Press",
        link: '/blog'
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
        link: '/blog'
      },
      {
        name: "Webinars",
        link: '/company/events-list'
      },
      {
        name: "Community",
        link: 'https://discord.com/channels/1056699131864830042/1056699132955340901'
      },
      {
        name: "Documentation",
        link: 'https://docs.autogon.ai'
      },
      {
        name: "Events",
        link: '/company/events-list'
      },
    ],
  };

  let usaLink = {
    title: "United States",
    links: [
      {
        name: "3002 Falls at Fairdale Houston, Texas, United states",
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
          links={solutionLinks.links}
          title={solutionLinks.title}
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
              darkMode ? "bg-screen" : "bg-black"
            }`}
          >
            <FaFacebookF
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </a>
          <a
            href="https://github.com/autogonai/"
            target='__blank'
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-screen" : "bg-black"
            }`}
          >
            <FaGithub
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/autogon/'
            target='__blank'
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-screen" : "bg-black"
            }`}
          >
            <FaLinkedinIn
              className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </a>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-screen" : "bg-black"
            }`}
          >
            <FaTwitter
              className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </div>
          <a
            href='https://www.youtube.com/@autogonai'
            target='__blank'
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-screen" : "bg-black"
            }`}
          >
            <FaYoutube
              className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`}
            />
          </a>
          <div
            className={`rounded-full w-7 h-7 grid place-items-center ${
              darkMode ? "bg-screen" : "bg-black"
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
        </div>
      </div>
    </Container>
  );
};
