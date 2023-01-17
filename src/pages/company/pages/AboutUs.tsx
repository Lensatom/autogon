import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import { PartnerCarousel } from "../../../Layouts/PartnerCarousel";
import Smilesvg from "../../../assets/kili-icon-dark-mode.svg.svg";
import { Footer } from "../../../Layouts/Footer";

export const Company = () => {
  return (
    <>
      <Header />

      <Container className="bg-surface lg:pb-40 pt-[8rem]">
        <BreadCrumb />
        <Typography align="center" variant="display" className="mb-1 mt-10">
          Why kili
        </Typography>
        <Typography align="center" variant="body">
          You might not know this, but:
        </Typography>
        <Typography align="center" variant="body" className="mt-2">
          MNIST’s dataset has an error rate of 3.4%, and is still cited by more
          than 38,000 papers.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-4 lg:w-[60rem] mx-auto"
        >
          The ImageNet dataset, with its crowdsourced labels, has an error rate
          of 6%. This dataset arguably underpins the most popular image
          recognition systems developed by Google and Facebook. Systemic errors
          in these datasets have real-world consequences. Models trained on
          error-containing data are forced to learn those errors, leading to
          false predictions or a need for retraining on ever-increasing amounts
          of data to “wash out” the errors.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-8 lg:w-[60rem] mx-auto"
        >
          Every industry has begun to understand the transformative potential of
          AI and have started investing in it. But the revolution of ML
          transformers and the relentless focus on ML model optimization is
          reaching the point of diminishing returns. What else is there?
        </Typography>
      </Container>

      <Container className={"bg-surface pt-1 lg:pb-40 "}>
        <Typography
          align="center"
          variant="display"
          className="mb-1 mt-10 lg:w-[40rem] mx-auto"
        >
          Data Quality is critical
        </Typography>
        <Typography align="center" variant="body">
          You might not know this, but:
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-2 lg:w-[60rem] mx-auto"
        >
          Reducing or eliminating labeling errors, getting the right annotations
          the first time, and focusing on the final input to good machine
          learning models are now paying huge dividends
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-4 lg:w-[60rem] mx-auto"
        >
          However, data quality can be the most difficult part of developing a
          reliable model. This is because there is a need for coordination
          between human intelligence, modeling expertise, project management,
          and the technology that binds them all together.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-4 lg:w-[60rem] mx-auto"
        >
          This can oftentimes be a painful endeavor. The real differentiator
          between businesses that are successful at AI and those that aren’t is
          data quality: what data is used to train & test the algorithm, how is
          it gathered and labeled, and how is it governed? Our customers’
          experience and our experience is that the move to Data-Centric AI
          (DCAI) is the most important shift businesses need to make today.
        </Typography>
      </Container>

      <Container
        background
        className="bg-surface pt-20 gap-10 lg:pb-40 flex-col-reverse lg:flex-row-reverse"
        flex
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold text-[80px] leading-[100%]"
          >
            Data Quality is priceless
          </Typography>
          <Typography variant="body" className="mt-7 w-">
            Human-labeled data is becoming the fuel and compass for AI-based
            software systems. But the increasing focus on the scale, speed, and
            cost of building and improving datasets has impacted the data's
            quality and thus the models' quality.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            We have seen reasons for concern first-hand: fairness and bias
            issues in labeled datasets, quality issues in benchmark datasets,
            benchmark limitations, reproducibility issues in machine learning
            research, lack of documentation and data replication, and
            unrealistic performance measures.
          </Typography>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/3544x3544/3ed35e693f/kili_core_illustration_shapes_1.png"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        className="bg-surface lg:pb-40 gap-10 flex-col-reverse lg:flex-row pt-10 lg:pt-0"
        flex
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold text-[80px] leading-[100%]"
          >
            Data Quality is complex
          </Typography>
          <Typography variant="body" className="mt-8 w-">
            While the quality of datasets remains everyone's primary concern,
            the way it is measured in practice is poorly understood and
            sometimes just plain wrong.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            Data quality is complex—it is not just software bugs or human
            errors. It is typically the result of how well the annotation is
            done, how well a dataset and annotation ontology represents the
            actual task, and if the quality metrics that are available, are
            suitable for the job.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            Data annotation is complex because there are multiple
            interpretations of the truth, because some gestures are hard, and
            because collaboration induces complex communication and
            synchronization.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            The development of tools to make repeatable and systematic
            adjustments to datasets has lagged.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            At Kili Technology, we want to reverse this and find new and
            systematic ways to promote seamless interactions between humans and
            data.
          </Typography>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/3544x3544/a841213243/kili_core_illustration_shapes_2-1.png"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
        className="bg-surface lg:pb-20 gap-3 lg:flex-row-reverse flex-col-reverse"
        flex
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold text-[80px] leading-[100%]"
          >
            Models have to be developed iteratively
          </Typography>
          <Typography variant="body" className="mt-8 w-">
            When developing a model, labeling and model testing should work at
            the same time to remove the unnecessary trial-and-error time spent
            on improving the model without having to worry or change
            inconsistent data.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            So, if we want to be cost effective, the model development
            infrastructure must be tightly integrated with a supervision layer
            so that labeling, model training, and model diagnostics can work in
            parallel and directly influence the data used for the AI system.
          </Typography>
          <Typography variant="body" className="mt-4 w-">
            The future of AI is getting the best out of humans and machines by
            creating a human-in-the-loop machine learning process, thus
            dramatically accelerating the set up of reliable AI applications.
          </Typography>
        </div>
        <div className="w-[90%]">
          <img
            src="https://a.storyblok.com/f/139616/5906x5907/4e539934a5/kili_why_illustration_lighter_loads.png"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container background className="bg-surface pt-2 pb-20 gap-3">
        <Typography
          variant="body"
          align="center"
          className="lg:w-[60rem] mx-auto"
        >
          At Kili Technology, we firmly believe that focusing on high-quality
          training data, that is consistently labeled, is the way to unlock the
          value of AI.
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="mt-2 lg:w-[60rem] mx-auto"
        >
          Our platform’s purpose is to enable businesses to label high-quality
          datasets to train trustworthy AI.
        </Typography>
      </Container>

      <Container className="bg-surface pb-40 pt-10">
        <Typography align="center" variant="display" className="mb-1">
          The Company
        </Typography>

        <Typography
          align="center"
          variant="body"
          className="mt-4 lg:w-[60rem] mx-auto"
        >
          Kili Technology began as an idea in 2018. Edouard d’Archimbaud, our
          co-founder and CTO, was working at BNP Paribas, where he built one of
          the most advanced AI Labs in Europe from scratch. François-Xavier
          Leduc, our co-founder and CEO, knew how to take a powerful insight and
          build a company around it. While all the AI hype was on the models,
          they focused on helping people understand what was truly important:
          the data.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-6 lg:w-[60rem] mx-auto"
        >
          Together, they founded Kili Technology to ensure data was no longer a
          barrier to good AI. By July 2020, the Kili Technology platform was
          live and by the end of the year, the first customers had renewed their
          contract, and the pipeline was full. In 2021, Kili Technology raised
          over $30M from Serena, Headline and Balderton.
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="lg:mt-10 mt-5 lg:w-[60rem] mx-auto"
        >
          Today Kili Technology continues its journey to enable businesses
          around the world to build trustworthy AI with high-quality data.
        </Typography>
      </Container>

      <Container className="bg-surface pb-40 pt-5">
        <Typography align="center" variant="display" className="mb-1">
          Our Values
        </Typography>
        <Typography
          align="center"
          variant="body"
          className="mt-2 lg:w-[60rem] mx-auto"
        >
          Without them, are we even human?
        </Typography>

        <div className="flex items-center mt-20 gap-6 justify-center lg:flex-row flex-col lg:mx-auto lg:w-10/12">
          <div className="lg:w-[60%] rounded-xl overflow-hidden">
            <img
              src="https://a.storyblok.com/f/139616/638x762/b7ff186f47/staff.webp"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:w-[60%]">
            <div className="py-5 bg-[rgba(234,238,226,.4)] rounded-3xl shadow-sm px-4 lg:px-8">
              <Typography variant="title">Ambition</Typography>
              <Typography variant="body">
                keeps us climbing the highest peaks
              </Typography>
            </div>

            <div className="py-5 bg-[#eaeee2] rounded-3xl mt-3 shadow-sm px-4 lg:px-8">
              <Typography variant="title">Curiosity</Typography>
              <Typography variant="body">
                keeps us trying and discovering things anew
              </Typography>
            </div>

            <div className="py-5 bg-[rgba(234,238,226,.4)] mt-3 rounded-3xl shadow-sm px-4 lg:px-8">
              <Typography variant="title">Care</Typography>
              <Typography variant="body">
                keeps us focused on what matters most: people
              </Typography>
            </div>

            <div className="py-5 bg-[#eaeee2] rounded-3xl mt-3 shadow-sm px-4 lg:px-8">
              <Typography variant="title">Honesty</Typography>
              <Typography variant="body">
                keeps us from going in circles
              </Typography>
            </div>

            <div className="py-5 bg-[rgba(234,238,226,.4)] mt-3 rounded-3xl shadow-sm px-4 lg:px-8">
              <Typography variant="title">Collaboration</Typography>
              <Typography variant="body">
                keeps us in the winning team
              </Typography>
            </div>
          </div>
        </div>
      </Container>

      <PartnerCarousel
        title="Trusted by the world’s best companies"
        subtitle="Our clients and investors trust Kili to take the AI industry to new and exciting places."
      />
      <Container className="h-40 bg-surface hidden lg:block"></Container>
      <Container disableOverflowHidden isDarkMode background className="bg-[#162427] pb-28">
        <div className="mx-auto w-fit ">
          <img src={Smilesvg} className="relative -top-24 mx-auto" />
          <Typography
            variant="subdisplay"
            align="center"
            className="capitalize !text-white"
          >
            Join us
          </Typography>

          <div className="flex mx-auto w-fit lg:gap-2 mt-16 mb-8 lg:mb-0">
            <Button>Request a demo</Button>
            <Button
              darkMode
              className="flex items-center gap-3 !text-white border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className={`h-6 w-6 text-white`} />
            </Button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};
