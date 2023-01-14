import { Container, Typography } from "../components";

interface PartnerCarouselProps {
  darkMode?: boolean
}

export const PartnerCarousel = ({ darkMode }: PartnerCarouselProps) => {
  return (
    <Container isDarkMode={darkMode} background noGutter className="bg-surface pb-32">
      <Typography
        variant="title"
        isDarkMode={darkMode}
        align="center"
        className="text-[3rem] leading-[110%]"
      >
        They trust us on their data-centric journey
      </Typography>

      <Container
        isDarkMode={darkMode}
        noGutter
        as="div"
        className="bg-white overflow-x-hidden flex mt-16 h-[12.5rem]"
      >
        <div className="h-full flex animate-marquee whitespace-nowrap items-center">
          <img
            src="https://a.storyblok.com/f/139616/x/fa21008d7a/thales.svg"
            className="mr-[9.375rem] h-[4.0625rem]"
          />
          <img
            src="https://a.storyblok.com/f/139616/x/233eb3a6d5/stellantis.svg"
            className="mr-[9.375rem] h-[4.0625rem]"
          />
          <img
            src="https://a.storyblok.com/f/139616/x/01ba6e99f5/safran.svg"
            className="mr-[9.375rem] h-[4.0625rem]"
          />
          <img
            src="https://a.storyblok.com/f/139616/x/9070e09d27/michelin.svg"
            className="mr-[9.375rem] h-[4.0625rem]"
          />
          <img
            src="https://a.storyblok.com/f/139616/x/5c6ee6de34/louisvuitton.svg"
            className="mr-[9.375rem] h-[4.0625rem]"
          />
        </div>
      </Container>
    </Container>
  );
}