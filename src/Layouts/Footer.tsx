import { Container, Typography } from "../components";
import Logo from "../assets/logo/svg.svg";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaSlack } from "react-icons/fa";
import cn from "classnames";

const FooterLinks = ({ links, title, className }: { links: any[]; title: string, className?: string }) => {
  return (
    <div className={className}>
      <Typography variant="title" className="!text-[23px] font-bold !leading-6">
        {title}
      </Typography>
      <ul>
        {links.map((nav) => (
          <li className="my-2 w-[17rem]" key={nav.id}>
            <Typography
              variant="link"
              className={cn("capitalize cursor-pointer hover:underline")}
            >
              {nav.name}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
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
      flex
    >
      <div className="w-[40rem] h-full mt-16 lg:mt-0">
        <img
          src={Logo}
          className="h-[40.47px] font-roboto font-bold select-none"
        />
        <Typography variant="caption" className="mt-1">
          KILI TECHNOLOGY © 2022
        </Typography>
      </div>
      <div className="flex gap-x-20 lg:gap-y-12 gap-6 mt-5 lg:mt-0 flex-wrap">
        <FooterLinks links={productLinks.links} title={productLinks.title} />
        <FooterLinks links={toolLinks.links} title={toolLinks.title} />
        <FooterLinks links={guidesLinks.links} title={guidesLinks.title} />
        <FooterLinks className="mt-6 lg:mt-0" links={companyLink.links} title={companyLink.title} />
        <FooterLinks links={franceLink.links} title={franceLink.title} />
        <FooterLinks links={usaLink.links} title={usaLink.title} />
      </div>

      <div className="absolute h-10 flex flex-col-reverse lg:flex-row lg:items-center bottom-10 lg:bottom-3 lg:gap-16 gap-4">
        <div className="flex items-center gap-x-4">
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaFacebookF className="h-5 w-5 text-white" />
          </div>
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaGithub className="h-5 w-5 text-white" />
          </div>
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaLinkedinIn className="h-4 w-4 text-white" />
          </div>
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaTwitter className="h-4 w-4 text-white" />
          </div>
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaYoutube className="h-5 w-5 text-white" />
          </div>
          <div className="rounded-full w-7 h-7 grid place-items-center bg-black">
            <FaSlack className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-y-3 lg:items-center lg:gap-x-20 lg:ml-3 !text-left ">
          <Typography
            variant="caption"
            className={cn(
              "uppercase cursor-pointer hover:underline"
            )}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="caption"
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Legal Notice
          </Typography>
          <Typography
            variant="caption"
            className={cn("uppercase cursor-pointer hover:underline")}
          >
            Security Info
          </Typography>
          <Typography
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
