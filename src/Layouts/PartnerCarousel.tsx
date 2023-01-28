import classNames from "classnames";
import { Container, Typography } from "../components";
import { Apextech, BrightMinds, FutureDark, FutureLight, InnovateXLogo,Mind, MindLeap, OptimumIQ, ProdigyWorks, QuantumLogo, TechwaveLogo  } from '../assets/brand';

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
      dark: Apextech,
      light: Apextech,
    },
    {
      dark: BrightMinds,
      light: BrightMinds,
    },
    {
      dark: FutureDark,
      light: FutureLight,
    },
    {
      dark: InnovateXLogo,
      light: InnovateXLogo,
    },
    {
      dark: Mind,
      light: Mind,
    },
    {
      dark: MindLeap,
      light: MindLeap,
    },
    {
      dark: OptimumIQ,
      light: OptimumIQ,
    },
    {
      dark: TechwaveLogo,
      light:
        TechwaveLogo,
    },
    {
      dark: ProdigyWorks,
      light: ProdigyWorks,
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
          "lg:text-[3rem] text-[2.5rem] leading-[110%] lg:w-[60rem] mx-auto",
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
