import { Button, Container, Typography } from "../components";
import DarkLogo from "../assets/logo/svg.svg";
import Logo from "../assets/logo/light-logo.svg";
import cn from "classnames";
import { Transition } from "@headlessui/react";
import { forwardRef, Fragment, useState } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuDrawerProps, NavLinks, NavMenus } from "../interfaces";
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
    <div className="w-[ bg-orange-70">
      <Typography
        isDarkMode={dark}
        variant="title"
        className="lg:!text-[23px] text-[1.3rem] font-bold !leading-6"
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
                    "capitalize text-sm cursor-pointer hover:text-primary !font-thin hover:no-underline text-[1rem]"
                  )}
                >
                  {nav.name}
                </Typography>
              </HashLink>
            ) : (
              <Link to={nav.link}>
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
    menus: NavMenus[];
    isHovering?: boolean;
    dark?: boolean;
    noAbsolute?: boolean;
  }
>(({ menus, isHovering, dark, noAbsolute }, ref) => {
  return (
    <Container
      as="div"
      disableOverflowHidden
      isDarkMode={dark}
      background
      noGutter
      ref={ref}
      className={cn(
        "bg-white lg:w-fit -left-4 lg:shadow-xl shadow-lg top-10 rounded-2xl p-3 lg:p-6 ease-in-out duration-1000 z-40 pt-4 pb-8 mt-6 lg:mt-0",
        {
          absolute: !noAbsolute,
          "translate-y-0 opacity-100": isHovering && !noAbsolute,
          "-translate-y-[30rem] opacity-0 delay-500":
            !isHovering && !noAbsolute,
        }
      )}
    >
      <div className="flex gap-2 lg:gap-8 relative">
        <div className="absolute -top-10 -left-5">
          <svg
            width={48}
            style={{ maxHeight: 48 }}
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7321 1C13.9622 -0.333333 12.0378 -0.333332 11.2679 1L0.875645 19C0.105845 20.3333 1.0681 22 2.6077 22L23.3923 22C24.9319 22 25.8942 20.3333 25.1244 19L14.7321 1Z"
              fill={dark ? "#081819" : "#ffffff"}
            ></path>
          </svg>
        </div>
        {menus?.map?.((menu, index) => (
          <MenuLinks
            dark={dark}
            key={index}
            links={menu?.links ?? []}
            title={menu?.title ?? ""}
          />
        ))}
        <Container
          isLightDarkMode={dark}
          background
          noGutter
          as="div"
          className="bg-surface w-fit min-w-[14rem] h-fit flex-col min-h-[14.6875rem] pt-6 pr-4 pb-4 pl-4 rounded-xl hidden lg:flex"
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
      </div>
    </Container>
  );
});

interface HeaderProps {
  darkMode?: boolean;
}

export const Header = ({ darkMode }: HeaderProps) => {
  const [isShowing, setIsShowing] = useState(false);

  let navLinks: NavLinks = [
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
        className="bg-[#B090EF] lg:flex lg:w-full py-[6.4px] relative z-20"
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
        <MenuDrawer
          {...{
            navLinks,
            isShowing,
            dark: darkMode,
          }}
        />

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
                hover={nav?.hover ?? false}
                link={nav.link}
                dark={darkMode}
              />
            ))}
          </ul>

          <div className="lg:flex-1 gap-2 lg:justify-end flex">
            <div
              onClick={() => setIsShowing((isShowing) => !isShowing)}
              className="relative z-40 flex flex-col justify-center gap-3 w-8 p-0 ease-in-out duration-200 transition-all lg:hidden"
            >
              <div
                className={cn(
                  "h-1 w-full bg-neutral ease-in-out duration-200",
                  {
                    "rotate-45": isShowing,
                  }
                )}
              />
              <div
                className={cn(
                  "h-1 w-full bg-neutral ease-in-out duration-200",
                  {
                    "-rotate-45 trans -translate-y-4": isShowing,
                  }
                )}
              />
            </div>
            <Button className="hidden lg:block">Request a demo</Button>
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

const MenuDrawer = ({ navLinks, dark, isShowing }: MenuDrawerProps) => {
  const [active, setActive] = useState<any>();

  return (
    <div
      className={cn(
        "bg-surface w-full h-screen flex flex-col lg:hidden px-5 ease-in-out overflow-auto absolute select-none z-10 duration-300",
        {
          "-translate-y-0": isShowing,
          "-translate-y-full": !isShowing,
        }
      )}
    >
      <div className="flex flex-col h-5/6 justify-between">
        <ul>
          {navLinks?.map?.((nav) => (
            <li
              className={cn("py-3", { "mt-32": nav?.id === "1" })}
              key={nav?.id}
              onClick={() => setActive(nav?.id)}
            >
              <Typography
                variant="body"
                className={cn("capitalize cursor-pointer text-[20px]", {
                  "hover:text-primary": !nav?.hover,
                  "text-primary": active === nav?.id,
                })}
              >
                {nav?.name}
              </Typography>
              {typeof nav?.menu?.length !== "undefined" &&
                active === nav.id && (
                  <PopoverMenu dark={dark} noAbsolute menus={nav?.menu ?? []} />
                )}
            </li>
          ))}
        </ul>
        <div>
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
        </div>
      </div>
    </div>
  );
};
