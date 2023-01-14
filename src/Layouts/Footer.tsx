import { Container, Typography } from "../components";
import Logo from "../assets/logo/svg.svg";
import DarkLogo from "../assets/logo/svg.png";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaSlack } from "react-icons/fa";
import cn from "classnames";
import { FooterLinks } from "../components/FooterLinks";

interface FooterProps {
  darkMode?: boolean
}

export const Footer = ({ darkMode }: FooterProps) => {
  let productLinks = {
    title: "Product",
    links: [
      {
        name: "Platform",
      },
      {
        name: "Label & Annotate",
      },
      {
        name: "Explore & Fix",
      },
      {
        name: "Integrate & Automate",
      },
      {
        name: "Professional Services",
      },
      {
        name: "Plan & Features",
      },
    ],
  };
  let toolLinks = {
    title: "Tools",
    links: [
      {
        name: "Image annotation tool",
      },
      {
        name: "Video annotation tool",
      },
      {
        name: "Text annotation tool",
      },
      {
        name: "Audio transcription tool",
      },
      {
        name: "OCR annotation tool",
      },
    ],
  };
  let guidesLinks = {
    title: "Guides",
    links: [
      {
        name: "Data Labeling Guide",
      },
      {
        name: "Text Annotation Guide",
      },
      {
        name: "Natural Language Processing Guide",
      },
      {
        name: "Audio transcription tool",
      },
      {
        name: "OCR annotation tool",
      },
    ],
  };
  let companyLink = {
    title: "Company",
    links: [
      {
        name: "Press",
      },
    ],
  };
  let franceLink = {
    title: "France",
    links: [
      {
        name: "47 boulevard de Courelles, 75008, paris",
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
      className="relative bg-[#EAEEE2] py-8 lg:pb-20 pb-60 flex-col-reverse lg:flex-row"
      isDarkMode={darkMode}
      flex
    >
      <div className="w-[40rem] h-full mt-16 lg:mt-0">
        <img
          src={darkMode ? DarkLogo : Logo}
          className="h-[40.47px] font-roboto font-bold select-none"
        />
        <Typography isDarkMode={darkMode} variant="caption" className="mt-1">
          KILI TECHNOLOGY © 2022
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
          className="mt-6 lg:mt-0"
          links={companyLink.links}
          title={companyLink.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={franceLink.links}
          title={franceLink.title}
        />
        <FooterLinks
          darkMode={darkMode}
          links={usaLink.links}
          title={usaLink.title}
        />
      </div>

      <div className="absolute h-10 flex flex-col-reverse lg:flex-row lg:items-center bottom-10 lg:bottom-3 lg:gap-16 gap-4">
        <div className="flex items-center gap-x-4">
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaFacebookF className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaGithub className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaLinkedinIn className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaTwitter className={`h-4 w-4 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaYoutube className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
          <div className={`rounded-full w-7 h-7 grid place-items-center ${ darkMode ? "bg-surface" :"bg-black"}`}>
            <FaSlack className={`h-5 w-5 ${darkMode ? "text-neutral" : "text-white"}`} />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-y-3 lg:items-center lg:gap-x-20 lg:ml-3 !text-left ">
          <Typography
            variant="caption"
            isDarkMode={darkMode}
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Privacy Policy
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Legal Notice
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Security Info
          </Typography>
          <Typography
            isDarkMode={darkMode}
            variant="caption"
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Status
          </Typography>
        </div>
      </div>
    </Container>
  );
};
