import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button, Container, Typography } from "../../../../../components";
import { BreadCrumb } from "../../../../../components/BreadCrumb";
import { Header } from "../../../../../Layouts/Header";
import { PartnerCarousel } from "../../../../../Layouts/PartnerCarousel";
import { Testimonial } from "../../../../../Layouts/Testimonial";

export const NplTextAnnotationTool = () => {

  let rightTextTooling = [
    "All-purpose text tooling with classification & Named Entity Recognition (NER)",
    " Main text formats supported: raw text, rich text, native pdf, etc.",
    "Advanced tools with Named Entity Relationship, transcription & Optical Character Recognition",
    "Support of large text files and documents",
    "Auto ML & pre-labeling for productivity",
    "Refined analytics for data quality",
    "Powerful workflows & advanced queue management",
    "Advanced filtering to spot errors",
    "Automated QA configuration",
    "Native data integration from cloud storage",
    "Advanced automation on labeling ops",
    "Python SDK",
    "SOC 2 compliance",
    "Possibility of on premise data and/or full on premise deployment",
    "Fine-grained access rights management with predefined roles & SSO integration",
  ];


  let rightExpertise = [
    "On demand expert workforce",
    "Full project management",
    "World class support",
    "ML & Data Labelling expert",
  ];
  
  return (
    <>
      <Header darkMode />

      <Container
        isDarkMode
        background
        className="bg-surface pb-10 lg:pb-40 pt-[12rem] lg:pt-[8rem]"
      >
        <BreadCrumb
          info="Label Text For NLP And ML Tasks With Our Easy-To-Use Text Annotation Tool"
          darkMode
        />
        <div className="lg:flex lg:mt-5">
          <div className="w-[95%]">
            <Typography
              isDarkMode
              variant="header"
              className="font-semibold !text-[4.2rem] leading-[90%] lg:!text-[86px]"
            >
              Easy-to-use Text Annotation Tool
            </Typography>
            <img
              src="https://a.storyblok.com/f/139616/2339x1666/0054abe91a/annotate-fast.webp"
              className="h-full w-full mt-3 lg:hidden"
            />
            <Typography isDarkMode variant="body" className="mt-6">
              Build high-quality training datasets with Kili Technology and
              solve NLP machine learning challenges to develop powerful ML
              applications. Use your textual data and turn it into high-quality
              training data regardless of format or structure: emails, medical
              reports, voice transcripts, complex patents, etc.
            </Typography>
            <Typography isDarkMode variant="body" className="mt-3">
              Automate labeling to save time with smart tools & model
              predictions.
            </Typography>
            <div className="lg:flex mt-9 gap-2">
              <Button>Request a demo</Button>
              <Button
                darkMode
                className="flex items-center gap-3 mb-3 mt-3 lg:mb-0 group"
                variant="outline"
              >
                Start for free
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white group-hover:text-neutral" />
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src="https://a.storyblok.com/f/139616/2339x1666/0054abe91a/annotate-fast.webp"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>

      <PartnerCarousel titleClassName="" title="They trust us" darkMode />

      <Container isDarkMode background className="pb-32">
        <Typography isDarkMode align="center" variant="header">
          Focus on Training Data Quality Rather than Quantity
        </Typography>
        <Typography isDarkMode className="mt-2" align="center" variant="body">
          Find out why the most advanced teams trust Kili to create accurate
          training data
        </Typography>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            Label Efficiently with a Text Annotation Software
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 ">
            Leverage Kili Technology’s text annotation tools to create powerful
            text-based training datasets easily. Annotate all text-based assets
            (emails, transcripts, news articles, documentation, etc.) using
            intent classification, named entity recognition, and relation tasks.
            Use our powerful labeling queue to prioritize and assign text
            annotation tasks to specific labelers and reviewers and add
            validation rules to have their work automatically checked. Finally,
            run your custom model on the fresh dataset and generate model-based
            predictions to further accelerate labeling and boost quality.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
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
            [2]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            Generate High Quality Text Annotation
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 lg:w-[80%]">
            Identify the right data to annotate to maximize your model's
            performance. Streamline collaboration between labelers, reviewers,
            and MLEs to quickly iterate on your text annotation projects.
            Minimize inconsistencies in dataset quality by providing continuous
            feedback. Use our advanced quality metrics to quantify quality and
            easily pinpoint assets or labelers with low metrics. Leverage our
            automated QA scripts to programmatically spot errors in your text
            annotation and use error detection models to improve overall
            performance.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        isDarkMode
        className="bg-surface flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography isDarkMode variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            isDarkMode
            variant="title"
            className="font-semibold text-[60px] lg:text-[80px leading-[100%]"
          >
            Integrate Text Annotation in Your ML Stack
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 ">
            Safely import data from remote storage (Amazon, Google, or Microsoft
            cloud storage), track changes to your data, version your projects,
            and then easily export your labeled text dataset to a preferred
            format (YOLO, Pascal VOC, Kili, etc.).
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 ">
            Easily manage the entire training data lifecycle of your ML project
            in Kili. Use specific access levels for your organization members
            and assign predefined roles (admin, manager, reviewer, labeler) in
            labeling projects.
          </Typography>
          <Typography isDarkMode variant="body" className="mt-8 ">
            Leverage active learning to pre-generate labels. Create a feedback
            loop between your model and your text annotation project. Use Kili’s
            Python SDK and API to integrate with all machine learning stacks.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container isDarkMode background className="pb-32">
        <Typography isDarkMode align="center" variant="header">
          Leverage a Suite of Quality Text Annotation Data Tools & Services
        </Typography>
        <Typography isDarkMode className="mt-2" align="center" variant="body">
          Everything you need to label at scale and boost the quality of text
          labels
        </Typography>
      </Container>

      <Container
        isDarkMode
        background
        grid
        columns="2"
        className="pt-10 pb-10 lg:pb-40"
      >
        <div>
          <img
            src="https://a.storyblok.com/f/139616/3000x3000/542a2b8fb5/kili_brand_icon_bring_data_dark.png"
            className=""
          />
          <Typography isDarkMode align="center" variant="title">
            The right text tooling
          </Typography>

          <ul className="mt-5">
            {rightTextTooling.map((text, index) => (
              <li
                key={index}
                className="flex gap-6 items-center mx-auto my-3 w-[80%]"
              >
                <BsFillCheckCircleFill className="text-green-500 h-8 w-8" />
                <div className="flex-1">
                  <Typography isDarkMode className="" variant="body">
                    {text}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src="https://a.storyblok.com/f/139616/3000x3000/64f70a806b/kili_brand_icon_enterprises_dark.png"
            className=""
          />
          <Typography isDarkMode align="center" variant="title">
            The right expertise
          </Typography>

          <ul className="mt-5">
            {rightExpertise.map((text, index) => (
              <li
                key={index}
                className="flex gap-6 items-center mx-auto my-3 w-[80%]"
              >
                <BsFillCheckCircleFill className="text-green-500 h-8 w-8" />
                <div className="flex-1">
                  <Typography isDarkMode className="" variant="body">
                    {text}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Testimonial isDarkMode />
      
    </>
  );
}