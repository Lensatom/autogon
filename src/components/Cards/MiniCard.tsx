import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Button } from "../Button";
import { Container } from "../Container";
import { Typography } from "../Typography";

interface MiniCardTypes {
  src: string;
  title: string;
}

export const MiniCard = ({ src, title }: MiniCardTypes) => {
  const isMobileView = useMediaQuery("(max-width: 640px)");

  return (
    <Container
      as="div"
      isDarkMode
      noGutter
      className="flex flex-col lg:flex-row rounded-2xl h-full mb-5 shadow-xl overflow-hidden cursor-pointer group"
    >
      <div className="lg:max-w-[14.875rem] max-h-[14.875rem] overflow-hidden">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-6 py-4">
        <Typography
          variant="title"
          isDarkMode
          className="text-[1.7rem] lg:text-[2rem] leading-8 font-semibold mb-10"
        >
          {title}
        </Typography>
        <Button darkMode variant="outline">
          {isMobileView ? "Read" : "Learn more"}
        </Button>
      </div>
    </Container>
  );
};
