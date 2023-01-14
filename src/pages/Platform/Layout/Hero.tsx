import cn from "classnames";
import { Button, Container, Typography } from "../../../components";
import DataSetImage from "../../../assets/kili_product_platform_hero.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BreadCrumb } from "../../../components/BreadCrumb";

export const HeroPage = () => {
  return (
    <Container isDarkMode className="bg-surface pt-1 pb-40 ">
      <BreadCrumb darkMode />
      <div className="flex mt-5">
        <div className="w-[95%]">
          <Typography
            isDarkMode
            variant="header"
            className="font-semibold !text-[86px]"
          >
            Better training data for Enterprise AI
          </Typography>
          <Typography isDarkMode variant="body" className="mt-6 w-">
            Annotate better, annotate faster, and annotate smarter to deliver
            quality training data that drives results.
          </Typography>
          <div className="flex mt-9 gap-2">
            <Button className="flex items-center gap-3">
              Sign Up
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
            <Button darkMode variant="outline">
              Talk to an expert
            </Button>
          </div>
        </div>
        <div className="w-full">
          <img src={DataSetImage} className="h-full w-full object-contain" />
        </div>
      </div>
    </Container>
  );
};
