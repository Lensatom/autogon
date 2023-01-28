import { Button, Container, Typography } from "../../../components";
import { Header } from "../../../Layouts/Header";
import SOCIcon from "../../../assets/soc-2.png.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Smilesvg from "../../../assets/logo/Autogon-logo-light.png";
import { Footer } from "../../../Layouts/Footer";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import { Testimonial } from "../../../Layouts/Testimonial";
import { Blog } from '../Layout/Blog';


export const ExploreFix = () => {
  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pb-10 lg:pb-40 pt-[12rem] lg:pt-[8rem]"
      >
        <BreadCrumb darkMode />
        <div className="lg:flex gap-10 lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] !leading-[100%] lg:!text-[86px]"
            >
              Find & fix issues in your ML datasets
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/a1314fefc1/explore-and-fix-issues.webp"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Supervise quality level & improvements to ensure low-error
              datasets. Simplify advanced collaboration workflows. Leverage
              programmatic QA. Explore your datasets and identify the data that
              matters.
            </Typography>

            <div className="lg:flex mt-5 lg:mt-20 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 mt-2 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/2500x1933/a1314fefc1/explore-and-fix-issues.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel darkMode />

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pt-20 gap-10 pb-10 lg:pb-40"
        flex
        direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Focus review on data that matters
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Create a communication flow between annotators and reviewers.
            Iterate quickly with annotators on labels to modify. Provide
            continuous feedback to your labeling team to avoid drift in quality.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/94d898c2bb/focus-review.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-10"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Quantify quality with insights from advanced quality metrics
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Look at the consensus by class to know when your ontology needs to
            be reshuffled. Look at labelers’ disagreements to identify
            misunderstandings among your annotator population. Filter on data
            slices with low quality metrics. Compare quality between labelers or
            against an industry standard.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/8289083871/quantify-quality.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Increase data quality with programmatic error spotting
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 w-">
            Programmatically spot errors by building automated QA scripts in the
            labeling interface. Use error detection models to automatically find
            and fix issues in your ML datasets.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/355881270f/programmatic-error-spotting-1.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [4]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px] leading-[100%]"
          >
            Orchestrate all your quality strategies with automated workflows
          </Typography>
          <Typography isDarkMode variant="body" className="mt-2 lg;w-[80%]">
            Fully automate & build custom workflows to scale your labeling
            operations.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="lg:w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/3000x3000/795d266d6a/kili_brand_icon_focus_dark.png"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Testimonial isDarkMode />

      <Container isDarkMode background noGutter className=" pb-10 lg:pb-60">
        <Container
          as="div"
          isLightDarkMode
          background
          className="lg:flex items-center gap-3 rounded lg:rounded-2xl lg:h-[50rem] lg:!px-20"
        >
          <div className="w-full pt-12 lg:mt-0">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold lg:text-[90px] lg:mt-4 !leading-[4rem] lg:!leading-[5rem]"
            >
              A qualified workforce for all of your labeling needs
            </Typography>
            <Typography variant="body" isDarkMode className="mt-4 lg:w-[36rem]">
              Data labeling takes time and resources that some organizations
              simply don’t have. That’s why Kili offers annotation services on
              premise or offshore, for adhoc missions or end-to-end projects.
              We’ve taken the time to source the very best so you can focus on
              the rest.
            </Typography>
            <Button className="flex items-center gap-3 mt-5">
              Learn more
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <img src={SOCIcon} className="h-full w-full object-contain" />
          </div>
        </Container>
      </Container>

      <Blog />

      <Container
        disableOverflowHidden
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
        <div className="">
          <img src={Smilesvg} className="relative mx-auto h-20 w-20 mb-5" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography variant="body" align="center" className="!text-white">
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>See Demo</Button>
            <Button
              className="flex items-center gap-3 !text-white hover:!border-primary !border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </Container>

      <Footer darkMode />
    </>
  );
};
