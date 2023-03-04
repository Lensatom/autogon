import { Button, Container, Typography } from "../../../../components";

const DecisionIntelligence = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="auto-ml"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [4]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            DECISION INTELLIGENCE
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Revolutionize Your Decision-Making Technique with Autogon's Decision Intelligence
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            You don't need to spend a time-consuming and complicated process building models for
            your business decisions. Make data-driven decisions easily and quickly with our Decision
            Intelligence solution.
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
            Harness the power of machine learning to make informed decisions.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Unlock data's potential and transform it into actionable insights with machine learning.
            Say goodbye to manual analysis and hello to real-time, accurate predictions with our cutting-edge
            technology. With Autogon, you can confidently make data-driven decisions and stay ahead of the
            competition with the power of machine learning at your fingertips.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Get started right away with a range of pre-built models
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            <ul>
              <li>Predict customer behavior</li>
              <li>Optimize supply chain processes</li>
              <li>Make data-driven financial forecasts</li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Collaborate with your team to create and improve models.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Autogon offers collaboration features that make it easy for teams to work together
            to build and refine models. With the ability to share and review models, teams can
            collaborate to make better decisions and achieve their goals faster.
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
      </Container>
    </>
  )
}

export default DecisionIntelligence