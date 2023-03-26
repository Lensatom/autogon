import { Button, Container, Typography } from "../components";
import DarkLogo from "../assets/logo/Autogon-full-logo.png";
import Logo from "../assets/logo/Autogon-full-logo-light.png";
import cn from "classnames";
import { forwardRef, Fragment, useState } from "react";
import { MenuDrawerProps, NavLinks, NavMenus } from "../interfaces";
import { useHover } from "../hooks/useHover.js";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

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
        {links.map((nav, index) => {
          const name = nav.name.toLowerCase()
          if (name === 'community' || name === 'marketplace'){
            return (
              <li
                key={index}
                // onClick={() => navigate(nav.link)}
                className="my-2 w-[10rem]"
              >
                <a href={nav.link} target="__blank">
                  <Typography
                    variant="link"
                    isDarkMode={dark}
                    className={cn(
                      "capitalize text-sm cursor-pointer hover:text-primary !font-thin hover:no-underline text-[1rem]"
                    )}
                  >
                    {nav.name}
                  </Typography>
                </a>
              </li>
            )
          }
          return (
          <li
            key={index}
            // onClick={() => navigate(nav.link)}
            className="my-2 w-[10rem]"
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
          )
        })}
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
              fill={dark ? "#364156" : "#ffffff"}
            ></path>
          </svg>
        </div>
        {menus?.map?.((menu, index) => (
          <MenuLinks
            key={index}
            dark={dark}
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
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
            className="w-full mb-7 rounded-lg object-contain object-center"
          />
          <a className="text-center text-[12px] leading-[140%] cursor-pointer -tracking-[.01em] uppercase text-primary">
            <a href="http://console.autogon.ai/">Get started</a>
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
          title: "AI CLOUD PLATFORM",
          links: [
            {
              name: "Augmented Intelligence",
              link: "/platform#augmented-intelligence",
              hash: true,
            },
            {
              name: "Data Engineering",
              link: "/platform#data-engineering",
              hash: true,
            },
            {
              name: "MLOps",
              link: "/platform#mlops",
              hash: true,
            },
            {
              name: "Decision Intelligence",
              link: "/platform#decision-intelligence",
              hash: true,
            },
            {
              name: "Data Visualization",
              link: "/platform#data-visualization",
              hash: true,
            },
            {
              name: "Data Labelling",
              link: "/platform#data-labelling",
              hash: true,
            },
          ],
        },
        {
          title: "KEY CAPABILITIES",
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
            }
          ],
        },
      ],
    },
    {
      id: "2",
      name: "solutions",
      link: "",
      hover: true,
      menu: [
        {
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
        },
        {
          title: "BY ROLE",
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
        },
      ],
    },
    {
      id: "3",
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
              name: "Contact us",
              link: "/company/contact",
            },
            {
              name: "Careers",
              link: "/company/careers",
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
      id: "4",
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
            // {
            //   name: "Whitepapers",
            //   link: "/whitepaper",
            // },
            // {
            //   name: "Case Studies",
            //   link: "/case-studies",
            // },
            {
              name: "Community",
              link: "https://discord.com/channels/1056699131864830042/1056699132955340901",
            },
            {
              name: "Marketplace",
              link: "https://console.autogon.ai/marketplace/",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "docs",
      link: "doc.autogon.ai",
      hover: false,
    },
    {
      id: "6",
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
        smallGutter
        className="bg-dark-surface lg:flex lg:w-full py-[6.4px] relative z-20"
      >
        <Typography
          variant="caption"
          align="center"
          className="uppercase lg:text-left !text-gray-200"
        >
          Interested in keeping updated with our latest advancement and
          research.
        </Typography>
        <a href="https://discord.com/channels/1056699131864830042/1056699132955340901">
          <Typography
            variant="caption"
            className="uppercase leading-[19.2px] !text-gray-200 cursor-pointer hover:underline hidden lg:block"
          >
            join our community
          </Typography>
        </a>
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
          smallGutter
          align="center"
          className="bg-screen py-5 gap-x-16 justify-between"
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
                key={nav?.name}
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
                className={cn("h-1 w-full ease-in-out duration-200", {
                  "rotate-45 bg-neutral": isShowing,
                  "bg-neutral": !darkMode,
                  "bg-white": darkMode,
                })}
              />
              <div
                className={cn("h-1 w-full ease-in-out duration-200", {
                  "-rotate-45 trans -translate-y-4 bg-neutral": isShowing,
                  "bg-neutral": !darkMode,
                  "bg-white": darkMode,
                })}
              />
            </div>
            <Button className="hidden lg:block">
                <NavLink to='/request'>Request a demo</NavLink>
            </Button>
            <Button
              darkMode={darkMode}
              className="hidden lg:block"
              variant="outline"
            >
              <a href="http://console.autogon.ai/">Get started</a>
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
          {name === 'docs' ?
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
          :
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
          }
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
        "bg-primary w-full h-screen flex flex-col lg:hidden px-5 ease-in-out overflow-auto absolute select-none z-10 duration-300",
        {
          "-translate-y-0": isShowing,
          "-translate-y-full": !isShowing,
        }
      )}
    >
      <div className="flex flex-col h-5/6 justify-between">
        <ul>
          {navLinks?.map?.((nav, index) => {
            if (nav?.name === 'pricing') {
              return (
                <li>
                  <Typography
                  variant="body"
                  className={cn("capitalize cursor-pointer text-[20px]", {
                    "hover:text-primary": !nav?.hover,
                    "text-primary": active === nav?.id,
                  })}
                >
                  <NavLink to='/pricing'>{nav?.name}</NavLink>
                </Typography>
                </li>
              )
            }
            if (nav?.name === 'docs') {
              return (
                <li>
                  <Typography
                  variant="body"
                  className={cn("capitalize cursor-pointer text-[20px]", {
                    "hover:text-primary": !nav?.hover,
                    "text-primary": active === nav?.id,
                  })}
                >
                  <a href='https://docs.autogon.ai'>{nav?.name}</a>
                </Typography>
                </li>
              )
            }
            return (
              <li
                key={index}
                className={cn("py-3", { "mt-32": nav?.id === "1" })}
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
            )
          })}
        </ul>
        <div>
          <Typography
            variant="link"
            className={cn(
              "uppercase cursor-pointer hover:text-primary mt-12 mb-5 block"
            )}
          >
            <NavLink to='/request'>Request a demo</NavLink>
          </Typography>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="self-center">
              <a href="http://console.autogon.ai/">Get started</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};