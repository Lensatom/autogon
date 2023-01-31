import classNames from "classnames";
import { Container, Typography } from "../components";
import {
  // Apextech,
  BrightMinds,
  FutureDark,
  FutureLight,
  InnovateXLogo,
  // Mind,
  MindLeap,
  MindLeapWhite,
  ProdigyWorks,
  QuantumLogo,
  TechwaveLogo,
  TechwaveWhiteLogo,
  InnovateXWhiteLogo,
  NextLevel,
  NextLevelWhite,
  ProdigyWorksWhite,
  BrightMindsWhite,
  QuantumWhiteLogo
} from "../assets/brand";

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
      dark: BrightMinds,
      light: BrightMindsWhite,
    },
    {
      dark: FutureDark,
      light: FutureLight,
    },
    {
      dark: InnovateXLogo,
      light: InnovateXWhiteLogo,
    },
    {
      dark: MindLeap,
      light: MindLeapWhite,
    },
    {
      dark: TechwaveLogo,
      light: TechwaveWhiteLogo,
    },
    {
      dark: ProdigyWorks,
      light: ProdigyWorksWhite,
    },
    {
      dark: NextLevel,
      light: NextLevelWhite,
    },
    {
      dark: QuantumLogo,
      light: QuantumWhiteLogo,
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
          "bg-tertiary overflow-x-hidden flex mt-5 lg:mt-16 h-[128px] lg:h-[12.5rem]",
          carouselContainerClassName
        )}
      >
        <div className="h-full flex animate-marquee whitespace-nowrap items-center">
          {brands.map((item) => (
            <img
              src={darkMode ? item.light : item.dark}
              className="lg:mr-[9.375rem] mr-[4rem] h-[4.0625rem]"
            />
          ))}
        </div>
      </Container>
    </Container>
  );
};
