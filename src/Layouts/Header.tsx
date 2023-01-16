import { Button, Container, Typography } from "../components";
import DarkLogo from "../assets/logo/svg.svg";
import Logo from "../assets/logo/light-logo.svg";
import cn from "classnames";
import { Transition } from "@headlessui/react";
import { forwardRef, Fragment, useState } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuDrawerProps } from "../interfaces";
import { useHover } from "../hooks/useHover.js";
import { useWindowScrollPositions } from "../hooks/useWindowScroll";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MenuLinks = ({
  links,
  title,
  dark,
  className,
}: {
  links: any[];
  title: string;
  dark?: boolean;
  className?: string;
}) => {
  return (
    <div className="w-[75%] bg-orange-70">
      <Typography
        isDarkMode={dark}
        variant="title"
        className="!text-[23px] font-bold !leading-6"
      >
        {title}
      </Typography>
      <ul className="mt-4">
        {links.map((nav) => (
          <li
            // onClick={() => navigate(nav.link)}
            className="my-2 w-[10rem]"
            key={nav.id}
          >
            {nav.hash ? (
              <HashLink to={nav.link} smooth>
                <Typography
                  variant="link"
                  isDarkMode={dark}
                  className={cn(
                    "capitalize text-sm cursor-pointer hover:text-primary !font-thin hover:no-underline"
                  )}
                >
                  {nav.name}
                </Typography>
              </HashLink>
            ) : (
              <Link to={nav.link} reloadDocument>
                <Typography
                  variant="link"
                  isDarkMode={dark}
                  className={cn(
                    "capitalize text-sm cursor-pointer hover:text-primary !font-thin hover:no-underline"
                  )}
                >
                  {nav.name}
                </Typography>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PopoverMenu = forwardRef<
  any,
  {
    menus: { title: string; links: { name: string }[] }[];
    isHovering: boolean;
    dark?: boolean;
  }
>(({ menus, isHovering, dark }, ref) => {
  return (
    <Container
      as="div"
      isDarkMode={dark}
      background
      ref={ref}
      className={cn(
        "absolute bg-white shadow-xl w-fit -left-4 top-14 rounded-2xl flex p-6 ease-in-out duration-1000 z-40",
        {
          "translate-y-0 opacity-100": isHovering,
          "-translate-y-[40rem] opacity-0": !isHovering,
        }
      )}
    >
      {menus.map((menu, index) => (
        <MenuLinks
          dark={dark}
          key={index}
          links={menu.links}
          title={menu.title}
        />
      ))}
      <Container
        isLightDarkMode={dark}
        background
        className="bg-surface w-[22.625rem] h-fit flex flex-col min-h-[14.6875rem] pt-6 pr-4 pb-4 pl-4 rounded-xl"
      >
        <img
          src="https://a.storyblok.com/f/139616/300x300/bf794cd0b7/sap-square-preview.png"
          className="h-28 mb-7 object-contain object-center"
        />
        <p className="mb-1 text-[0.75rem] leading-[130%] -tracking-[.01em] text-center">
          WEBINAR: How SAP trains ML for Document Information Extraction
          Application?
        </p>
        <a className="text-center text-[12px] leading-[140%] cursor-pointer -tracking-[.01em] uppercase text-primary">
          Register now
        </a>
      </Container>
    </Container>
  );
});

interface HeaderProps {
  darkMode?: boolean;
}

export const Header = ({ darkMode }: HeaderProps) => {
  const [isShowing, setIsShowing] = useState(false);

  let navLinks = [
    {
      id: "1",
      name: "products",
      link: "",
      hover: true,
      menu: [
        {
          title: "Platform",
          links: [
            {
              name: "Label & Annotate",
              link: "/platform/label-annotate",
            },
            {
              name: "Explore & Fix",
              link: "/platform/explore-and-fix",
            },
            {
              name: "Integrate & Automate",
              link: "/platform/integrate-automate",
            },
          ],
        },
        {
          title: "Professional Services",
          links: [
            {
              name: "Complete project monitoring",
              link: "/professional-services#from-design",
              hash: true,
            },
            {
              name: "On demand labeling workforce",
              link: "/professional-services#trained-workforce",
              hash: true,
            },
            {
              name: "Ml expert guidance",
              link: "/professional-services#data-centric",
              hash: true,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "company",
      link: "",
      hover: true,
      menu: [
        {
          title: "",
          links: [
            {
              name: "About Us",
              link: "/company",
            },
            {
              name: "Careers",
              // link: "/company/events-list",
            },
            {
              name: "Events",
              link: "/company/events-list",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "resources",
      link: "",
      hover: true,
      menu: [
        {
          title: "",
          links: [
            {
              name: "Blog",
              link: "/blog",
            },
            {
              name: "Whitepapers",
              link: "/whitepaper",
            },
            {
              name: "Case Studies",
              link: "/case-studies",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "docs",
      link: "",
      hover: false,
    },
    {
      id: "5",
      name: "pricing",
      link: "/pricing",
      hover: false,
    },
  ];

  return (
    <header className="fixed w-full max-w-full z-50 top-0 left-0">
      <Container
        justify="between"
        align="center"
        as="div"
        className="bg-[#B090EF] lg:flex lg:w-full py-[6.4px] "
      >
        <Typography
          variant="caption"
          align="center"
          className="uppercase lg:text-left"
        >
          Interested to learn how SAP trains ML for Document Information
          Extraction Application? Join our upcoming webinar with SAP's Principal
          Data Scientist to discover it.
        </Typography>
        <Typography
          variant="caption"
          className="uppercase leading-[19.2px] cursor-pointer hover:underline hidden lg:block"
        >
          Register Now
        </Typography>
      </Container>
      <div className="relative">
        <Transition show={isShowing} as={Fragment}>
          <MenuDrawer
            {...{ navLinks, onClick: () => setIsShowing((isShowing) => false) }}
          />
        </Transition>

        <Container
          isDarkMode={darkMode}
          background
          flex
          align="center"
          className="bg-surface py-5 gap-x-16 justify-between"
          disableOverflowHidden
        >
          <Link to="/">
            <img
              src={darkMode ? Logo : DarkLogo}
              className="h-[40.47px] font-roboto font-bold select-none"
            />
          </Link>

          <ul className="items-center gap-12 hidden lg:flex">
            {navLinks.map((nav) => (
              <MenuItem
                id={nav?.name}
                menu={nav?.menu ?? []}
                name={nav.name}
                hover={nav.hover}
                link={nav.link}
                dark={darkMode}
              />
            ))}
          </ul>

          <div className="lg:flex-1 gap-2 lg:justify-end flex">
            <Bars2Icon
              onClick={() => setIsShowing((isShowing) => true)}
              className="h-10 w-10 font-bold text- lg:hidden"
            />
            <Button darkMode={darkMode} className="hidden lg:block">
              Request a demo
            </Button>
            <Button
              darkMode={darkMode}
              className="hidden lg:block"
              variant="outline"
            >
              Talk to sales
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

const MenuItem = forwardRef<
  any,
  {
    id: string;
    name: string;
    menu: any[];
    hover: boolean;
    dark?: boolean;
    link?: string;
  }
>(({ id, name, menu, hover, dark, link }, ref) => {
  const [hoverRef, isHovering] = useHover<HTMLLIElement>();
  const [hoverMenuRef, isHoveringMenu] = useHover<HTMLLIElement>();

  return (
    <div className="relative">
      {link ? (
        <li key={id}>
          <Link to={link}>
            <Typography
              ref={hoverRef}
              variant="link"
              isDarkMode={dark}
              className={cn("capitalize cursor-pointer", {
                "hover:underline hover:text-blue-800": !hover,
                "hover:no-underline": hover,
              })}
            >
              {name}
            </Typography>
          </Link>
        </li>
      ) : (
        <li key={id}>
          <Typography
            ref={hoverRef}
            variant="link"
            isDarkMode={dark}
            className={cn("capitalize cursor-pointer", {
              "hover:underline hover:text-blue-800": !hover,
              "hover:no-underline": hover,
            })}
          >
            {name}
          </Typography>
        </li>
      )}
      {menu?.length !== 0 && (
        <PopoverMenu
          dark={dark}
          ref={hoverMenuRef}
          menus={menu ?? []}
          isHovering={isHovering || isHoveringMenu}
        />
      )}
    </div>
  );
});

const MenuDrawer = ({ navLinks, onClick }: MenuDrawerProps) => {
  return (
    <Transition.Child
      className="bg-surface w-full h-full lg:hidden pl-5 absolute select-none z-20"
      enter="transform transition ease-in-out duration-500 sm:duration-700"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transform transition ease-in-out duration-500 sm:duration-700"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
    >
      <XMarkIcon
        onClick={onClick}
        className="h-10 w-10 absolute right-4 top-4 text-black cursor-pointer"
      />
      <ul>
        {navLinks.map((nav) => (
          <li
            className={cn("py-3", { "mt-32": nav?.id === "1" })}
            key={nav?.id}
          >
            <Typography
              variant="body"
              className={cn("capitalize cursor-pointer text-[20px]", {
                "hover:text-primary": !nav?.hover,
              })}
            >
              {nav?.name}
            </Typography>
          </li>
        ))}
      </ul>
      <Typography
        variant="link"
        className={cn(
          "uppercase cursor-pointer hover:text-primary mt-12 mb-5 block"
        )}
      >
        request a demo
      </Typography>
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="self-center">
          Talk to sales
        </Button>
      </div>
    </Transition.Child>
  );
};
