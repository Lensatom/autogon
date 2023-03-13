import { Button, Container, Typography } from "../../../../components";
import BusinessAnalystImage from '../../../../assets/images/business analysis.jpg'

const BusinessAnalyst = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse pb-10 lg:pt-24 gap-8 items-center"
        flex
        id="business-analysis"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [1]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            BUSINESS ANALYSTS
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            As a business analyst, you play a critical role in helping organizations make
            data-driven decisions. With the rise of artificial intelligence, you must keep
            up with the latest tools and technologies to help you do your job better, faster,
            and with a more significant impact. Accelerate your analytics with AutoGon -
            simplifying machine learning for Business Analysts. Discover the ease of
            uncovering new solutions to your business challenges. Transform Your Insights
            into a Powerhouse.

          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            One Tool, Endless Possibilities - Satisfy All Your Requirements
          </Typography>
          <Typography variant="body" className="mt-8">
            AutoGon offers a powerful yet accessible solution for business analysts looking
            to build models and drive insights from their data. With a no-code approach,
            you don't need extensive programming skills. You can drag and drop components,
            and the platform does the rest. This saves you time and frees you up to focus on
            the things that matter most, like understanding your data, identifying key trends
            and patterns, and communicating your findings to your stakeholders.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src={BusinessAnalystImage}
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pt-2 lg:pb-10 gap-3 items-start"
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Use cases of Autogon
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            <ul className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Data exploration made seamless: </span>
                With machine intelligence and AI cloud platforms, you can easily import, clean,
                and manipulate large datasets. This lets you quickly understand your data and
                identify critical trends or patterns. You can also use built-in visualizations
                to help you quickly see what's happening in your data without spending hours
                writing code.
              </li>
              <li>
                <span className="font-semibold">Model building in minutes: </span>
                With a no-code approach, you can quickly and easily build models to help you make
                better, more informed decisions. Whether you're looking to develop a predictive model,
                a recommendation engine, or a decision tree, these platforms provide all the tools
                you need to get started. You can also use pre-built templates to help you get started
                quickly or create your custom models from scratch.
              </li>
            </ul>
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol start={3} className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Deploy and Scale with Confidence: </span>
                Once you've built your models, it's easy to deploy them and put them to use. With machine
                intelligence and AI cloud platforms, you can quickly scale your models to meet the demands
                of your organization without having to worry about infrastructure or technical details.
                You can also easily integrate your models into your existing systems and processes,
                making it easy for your stakeholders to access and use the insights you generate.
              </li>
              <li>
                <span className="font-semibold">Collaborate and Share without Limits: </span>
                AutoGon is designed for collaboration and sharing, which makes it easy for you to work with
                your team and stakeholders to make better decisions. You can share your models and insights
                with others and get feedback and input to help you improve your results. You can also
                collaborate on projects in real time, which makes it easy to get your work done faster
                and more effectively. Start exploring the world of machine intelligence and AI cloud
                platforms today.
              </li>
            </ol>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default BusinessAnalyst