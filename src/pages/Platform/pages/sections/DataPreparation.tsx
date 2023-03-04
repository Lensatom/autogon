import { Button, Container, Typography } from "../../../../components";

const DataPreparation = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="data-preparation"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [-]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            Data Preparation
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Explore, combine, and shape diverse datasets visually and interactively to create
            data ready for AI and machine learning applications at exponential speed.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Streamline your data journey with DragNDrop AI: the no-code platform for a Seamless preparation.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Data is the cornerstone of successful AI implementation, but unlocking its potential requires
            fast and easy access for all data users. Autogon Data Prep makes data preparation a breeze for
            novice and expert users. Our no-code platform lets you easily clean, transform, and visualize
            your data with just a few clicks. Our intuitive drag-and-drop interface makes handling complex
            data cleaning and transformation tasks simple, and our platform automatically generates the
            code in the background. This means you can focus on getting your data ready for analysis and
            modeling rather than worrying about the technical details.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src="./banking.jpg"
            alt="banking"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className="bg-screen flex-col items-start lg:flex-row-reverse pb-16 pt-10 gap-8"
        flex
      >
        <div className="w-full">
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Data Preparation for Smarter AI with DragNDrop AI
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            As part of the Autogon AI Cloud platform, Data Prep allows every analyst and citizen data
            scientist to explore, profile, clean, and shape diverse data into ready-to-use AI assets.
            One of the critical features of our data preparation process is the ability to handle missing
            efficiently or duplicated data. Autogon offers a complete end-to-end AI Cloud platform to
            bring value to your business with AI
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Unlock Insights Smoothly with Visualization.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Our data preparation process allows you to visualize your data through interactive visualizations
            that enable you to easily see patterns, trends, and anomalies in your data. This helps to make it
            easier to identify any issues with your data and to get a better understanding of your data before
            you start building your models.
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
      </Container>
    </>
  )
}

export default DataPreparation