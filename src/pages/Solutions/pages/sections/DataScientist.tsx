import { Button, Container, Typography } from "../../../../components";

const DataScientist = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pt-24 gap-8 items-center"
        flex
        id="business-analyst"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            DATA SCIENTISTS
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Expand your Expertise with Unmatched Capabilities and Resources.
            Autogon AI Cloud - A Have n for Data Scientists, Built by Data Scientists.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            One Tool, Endless Possibilities - Satisfy All Your Requirements
          </Typography>
          <Typography variant="body" className="mt-8">
            Maximize Your Team's Potential with AutoGon - Designed to Empower Your Highly
            Skilled Specialists. As a data scientist, you understand the importance of harnessing
            the power of artificial intelligence to drive insights and make informed decisions.
            With the rise of these technologies, you must stay up-to-date with the latest tools
            and platforms to help you do your job more efficiently and effectively.
            Tap into the Wealth of Knowledge from Machine learning and AI
          </Typography>
        </div>
        <div className="w-full">
          <img
            src="./financial services.jpg"
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
            Built by Data Scientists for the next generation of Data Scientists
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AutoGon provides a one-of-a-kind solution for data scientists who want to build models
            and derive insights from their data while maintaining the quality and accuracy of their
            work. You can build models quickly and easily with a no-code approach without spending
            hours writing code. This frees up your time to concentrate on essential things, such as
            understanding your data, identifying key trends and patterns, and communicating your
            findings to your stakeholders.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Our platform also offers the unique expertise of our team of data scientists, providing
            insights from professionals with real-world experience in deploying AI to solve complex
            business challenges. You'll be able to build with your preferred tools and languages,
            including powerful code-first notebooks with support for Python, R, Scala, Spark, and SQL.
            With Autogon, you can innovate and experiment faster, taking advantage of the power of our
            AI Cloud platform and delivering unique insights from any data.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            <ul className="list-disc flex flex-col gap-3">
            </ul>
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Rapid prototyping: </span>
                You can quickly and easily build prototypes of your models and test your ideas using
                machine intelligence and AI cloud platforms. This allows you to refine your models
                and iterate on your work until you're satisfied with the results. You can also easily
                share your prototypes with your team and stakeholders, allowing you to get feedback
                and input to help you improve your work.
              </li>
              <li>
                <span className="font-semibold">Automated model building: </span>
                Autogon provides a drag-and-drop interface that makes it simple to build models even
                if you lack extensive programming skills. You can start with pre-built templates or
                create custom models from scratch. This saves you time and allows you to focus on
                understanding your data and communicating your findings.
              </li>
              <li>
                <span className="font-semibold">Deployment and scaling: </span>
                Once you've built your models, deploying them and putting them to use is easy.
                With machine intelligence and AI cloud platforms, you can quickly scale your models
                to meet the demands of your organization without having to worry about infrastructure
                or technical details. You can also easily integrate your models into your existing
                systems and processes, making it easy for your stakeholders to access and use the
                insights you generate.
              </li>
              <li>
                <span className="font-semibold">Collaboration and sharing: </span>
                Autogon is designed for collaboration and sharing, which makes it easy for you to work
                with your team and stakeholders to make better decisions. You can share your models and
                insights with others and get feedback and input to help you improve your results.
                You can also collaborate on projects in real time, which makes it easy to get your
                work done faster and more effectively.
              </li>
            </ol>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default DataScientist