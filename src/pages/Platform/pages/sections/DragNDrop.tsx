import { Button, Container, Typography } from "../../../../components";

const DragNDrop = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="drag-drop"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            DragNDrop AI
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Build complex models quickly, and leverage the power of AI and machine
            learning without any technical background.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Revolutionize Your Data Analysis - DragNDrop AI, The Code-Free Way to AI Success!
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Our drag-and-drop interface makes it easy for you to create powerful machine-learning solutions,
            even if you have no prior coding or algorithm knowledge. Simply bring your data and let Autogon
            do the rest. AutoGon's drag-and-drop interface enables you to build and deploy models in
            record time. Autogon also automates many tedious pre-processing tasks, including missing
            value treatment. Our intelligent kit allows you to streamline your analysis process and
            get results faster.
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
            Release the Power of Your Data with AutoGon: Building Models Made Simple.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AutoGon supports a variety of use cases, from natural language processing and image
            recognition to recommendation systems and time series analysis. With pre-built templates
            and customizable blocks, you can start building your model immediately, and our platform
            will automatically generate the code in the background. This means you can focus on what
            matters – getting accurate results and insights from your data.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
          Effortlessly build AI models with DragNDrop AI - where user-friendliness meets expert support.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            DragNDrop AI is the ideal platform for organizations and individuals who want to harness
            the power of AI and machine learning but need more technical expertise or resources. One
            of the best things about DragNDrop AI is how user-friendly it is. Autogon is intuitive,
            and even if you don't have a technical background, you can still get started and build
            models in no time. You never have to worry about getting stuck or being unable to figure
            something out.
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
      </Container>
    </>
  )
}

export default DragNDrop