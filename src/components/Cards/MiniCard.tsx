import { Button } from "../Button";
import { Container } from "../Container";
import { Typography } from "../Typography";

interface MiniCardTypes {
  src: string,
  title: string,
}

export const MiniCard = ({ src, title }: MiniCardTypes) => {
  return (
    <Container
      as="div"
      isDarkMode
      noGutter
      className="flex rounded-2xl h-full mb-5 shadow-xl overflow-hidden cursor-pointer group"
    >
      <div className="max-w-[14.875rem] max-h-[14.875rem] overflow-hidden">
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <Typography
          variant="title"
          isDarkMode
          className="text-[2rem] font-semibold mb-10"
        >
          {title}
        </Typography>
        <Button darkMode variant="outline">
          Learn more
        </Button>
      </div>
    </Container>
  );
}