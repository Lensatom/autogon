import classNames from "classnames";
import { Container, Typography } from "../components";

interface PartnerCarouselProps {
  darkMode?: boolean;
  title?: string;
  subtitle?: string;
  carouselContainerClassName?: string;
  titleClassName?: string;
}

export const PartnerCarousel = ({
  darkMode,
  title = "They trust us on their data-centric journey",
  subtitle,
  carouselContainerClassName,
  titleClassName,
}: PartnerCarouselProps) => {
  let brands = [
    {
      dark: "https://a.storyblok.com/f/139616/x/9d12bad092/airbus-white.svg",
      light: "https://a.storyblok.com/f/139616/x/fa21008d7a/thales.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/397b196d5e/credit-agricole-white.svg",
      light: "https://a.storyblok.com/f/139616/x/233eb3a6d5/stellantis.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/2fa4986fb1/capegemini-white.svg",
      light: "https://a.storyblok.com/f/139616/x/01ba6e99f5/safran.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/bc6d760ee7/esa-white.svg",
      light: "https://a.storyblok.com/f/139616/x/9070e09d27/michelin.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/260237cda8/ibm-white.svg",
      light: "https://a.storyblok.com/f/139616/x/5c6ee6de34/louisvuitton.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/a9826c8347/louisvuitton-white.svg",
      light: "https://a.storyblok.com/f/139616/x/1e5ade163c/ibm.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/f5f6fb28ad/michelin-white.svg",
      light: "https://a.storyblok.com/f/139616/x/04dc544485/esa.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/c4fcd53361/safran-white.svg",
      light:
        "https://a.storyblok.com/f/139616/x/9bf28f30b4/credit-agricole.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/97ff1885ea/stellantis-white.svg",
      light: "https://a.storyblok.com/f/139616/x/eca7a06dea/capegemini.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/c69a128f0c/thales-white.svg",
      light: "https://a.storyblok.com/f/139616/x/6b1c8f07c3/airbus.svg",
    },
    {
      dark: "https://a.storyblok.com/f/139616/x/9fbca9e252/logo-fond-fonce-01-1-1.svg",
      light:
        "https://a.storyblok.com/f/139616/x/0e30cb0034/logo-isahit-black.svg",
    },
  ];

  return (
    <Container
      isDarkMode={darkMode}
      background
      noGutter
      className="bg-surface pb-32"
    >
      <Typography
        variant="title"
        isDarkMode={darkMode}
        align="center"
        className={classNames(
          "lg:text-[3rem] text-[2.5rem] leading-[110%]",
          titleClassName
        )}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body"
          isDarkMode={darkMode}
          align="center"
          className="mt-3"
        >
          {subtitle}
        </Typography>
      )}

      <Container
        isDarkMode={darkMode}
        noGutter
        as="div"
        className={classNames(
          "bg-white overflow-x-hidden flex mt-5 lg:mt-16 h-[128px] lg:h-[12.5rem]",
          carouselContainerClassName
        )}
      >
        <div className="h-full flex animate-marquee whitespace-nowrap items-center">
          {brands.map((item) => (
            <img
              src={darkMode ? item.dark : item.light}
              className="lg:mr-[9.375rem] mr-[4rem] h-[4.0625rem]"
            />
          ))}
        </div>
      </Container>
    </Container>
  );
};
