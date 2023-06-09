import { Button, Container, Typography } from "../../../../components";
import AugmentedIntelligenceImage from '../../../../assets/images/augmented intelligence.jpg'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AugmentedIntelligence = () => {

  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center !px-0"
        flex
        id="augmented-intelligence"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            AUGMENTED INTELLIGENCE
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon' unique capability to explore and incorporate both human and artificial intelligence
            makes it even more powerful. Autogon (AI) remains the best solution to overcome manual processes
            and keep up with the fast-paced demands of the modern business world. By leveraging the power of
            machine learning algorithms and artificial intelligence, you can streamline your operations,
            make better and faster decisions, and stay ahead of the competition.
          </Typography>
          <div className="flex gap-5">
            <Button
              onClick={() => display === 'hidden' ? setDisplay('flex') : setDisplay('hidden')}
              variant="outline"
              className="mt-9"
            >
              Read {display === 'hidden' ? 'more' : 'less'}
            </Button>
          </div>
        </div>
        <div className="w-full">
          <img
            src={AugmentedIntelligenceImage}
            alt="banking"
            className="w-full object-contain"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start lg:!px-44 pb-16 lg:pt-10`}
        flex
      >
        <div className="w-full">
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Get a Robust Insight into How Augmented Intelligence Works
          </Typography>
          <Typography variant="body" className="mt-8 ">
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
          <Typography variant="body" className="mt-8 ">
            Autogon is designed to make AI accessible and manageable for businesses of all sizes.
            With our intuitive drag-and-drop interface, you can build AI models in minutes without
            any prior knowledge or technical skills.<br />
            We've designed our solutions to be user-friendly, so you can focus on what matters most –
            scaling your business. Whether you want to automate tedious tasks, improve customer service,
            or gain valuable insights, our platform is your first stop.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            <a href="http://console.autogon.ai/">Get started</a> Today
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Take advantage of the benefits of Augmented Intelligence. <a href="http://console.autogon.ai/">Get started</a> today and see how
            Autogon can transform your experience.
          </Typography>
          <Button
              onClick={() => display === 'hidden' ? setDisplay('flex') : setDisplay('hidden')}
              variant="outline"
              className="mt-9"
            >
              Read {display === 'hidden' ? 'more' : 'less'}
          </Button>
        </div>
      </Container>
    </>
  )
}

export default AugmentedIntelligence