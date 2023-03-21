import { Button, Container, Typography } from "../../../../components";
import AugmentedIntelligenceImage from '../../../../assets/images/augmented intelligence.jpg'
import { NavLink } from "react-router-dom";

const AugmentedIntelligence = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse pt-32 lg:flex-row-reverse gap-8 items-center"
        flex
        id="augmented-intelligence"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            AUGMENTED INTELLIGENCE
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Empowering Your Business with AI
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Autogon' unique capability to explore and incorporate both human and artificial intelligence
            makes it even more powerful. Autogon (AI) remains the best solution to overcome manual processes
            and keep up with the fast-paced demands of the modern business world. By leveraging the power of
            machine learning algorithms and artificial intelligence, you can streamline your operations,
            make better and faster decisions, and stay ahead of the competition.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src={AugmentedIntelligenceImage}
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
            Get a Robust Insight into How Augmented Intelligence Works
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            At the core of Autogon is the technology of Augmented Intelligence. Autogon is built on
            machine learning principles, allowing it to learn from data and make predictions based
            on that learning.<br />
            The algorithms used by our platform are specifically designed to handle complex data patterns
            and provide accurate results. Whether you're working with structured or unstructured data,
            Autogon is capable of making predictions and recommendations in real-time so that you can
            make better and faster decisions for your business.
          </Typography>
        </div>
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Build AI Models in Minutes with Autogon
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Autogon is designed to make AI accessible and manageable for businesses of all sizes.
            With our intuitive drag-and-drop interface, you can build AI models in minutes without
            any prior knowledge or technical skills.<br />
            We've designed our solutions to be user-friendly, so you can focus on what matters most –
            scaling your business. Whether you want to automate tedious tasks, improve customer service,
            or gain valuable insights, our platform is your first stop.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Get Started Today
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Take advantage of the benefits of Augmented Intelligence. Get started today and see how
            Autogon can transform your experience.
          </Typography>
          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
      </Container>
    </>
  )
}

export default AugmentedIntelligence