import { Button, Container, Typography } from "../components";
import Logo from "../assets/logo/svg.svg";
import cn from "classnames";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuDrawerProps } from "../interfaces";

export const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  let navLinks = [
    {
      id: "1",
      name: "products",
      link: "",
      useHover: true,
    },
    {
      id: "2",
      name: "company",
      link: "",
      useHover: true,
    },
    {
      id: "3",
      name: "resources",
      link: "",
      useHover: true,
    },
    {
      id: "4",
      name: "docs",
      link: "",
      useHover: false,
    },
    {
      id: "5",
      name: "pricing",
      link: "",
      useHover: false,
    },
  ];

  return (
    <>
      <Container
        justify="between"
        align="center"
        as="div"
        className="bg-[#B090EF] lg:flex w-full py-[6.4px] !px-6 "
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

        <Container flex align="center" className="bg-surface py-5 gap-x-16">
          <img
            src={Logo}
            className="h-[40.47px] font-roboto font-bold select-none"
          />
          <ul className="items-center gap-12 hidden lg:flex">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Typography
                  variant="link"
                  className={cn("capitalize cursor-pointer", {
                    "hover:underline hover:text-blue-800": !nav.useHover,
                  })}
                >
                  {nav.name}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-2 justify-end flex">
            <Bars2Icon
              onClick={() => setIsShowing((isShowing) => true)}
              className="h-10 w-10 font-bold text- lg:hidden"
            />
            <Button className="hidden lg:block">Request a demo</Button>
            <Button className="hidden lg:block" variant="outline">
              Talk to sales
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

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
                "hover:text-primary": !nav?.useHover,
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
