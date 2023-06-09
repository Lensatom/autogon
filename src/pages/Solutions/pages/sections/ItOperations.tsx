import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import ItOperationsImage from '../../../../assets/images/itOperator.jpg'
import { NavLink } from "react-router-dom";

const ItOperations = () => {
  
  const [display, setDisplay] = useState('hidden')
  const backdrop = {
    backgroundImage: `url(${ItOperationsImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <>
      <Container
        background
        style={backdrop}
        className="bg-screen relative h-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="it-operations"
      >
        <div className="w-full h-full backdrop-brightness-[0.2] lg:px-[5%] px-5 flex flex-col justify-center">
          <Typography
            variant="title"
            className="font-semibold !text-white"
          >
            IT OPERATIONS
          </Typography>
          <Typography variant="body" className="mt-8 !text-white lg:w-1/2">
            Maximize your machine learning potential with Autogon. Unsuccessful
            AI projects can impact your bottom line and undermine your big data investments.
            Autogon streamlines the expertise of world-renowned data scientists into a
            user-friendly platform, empowering business analysts, data scientists,
            and other data professionals to quickly develop and implement highly
            accurate machine-learning models. With no code, you can conveniently deploy machine
            learning models into production, regardless of the required prediction method,
            whether real-time, batch, or scoring on Hadoop.
          </Typography>
          <div className="flex gap-5">
            <Button
              onClick={() => display === 'hidden' ? setDisplay('flex') : setDisplay('hidden')}
              variant="outline"
              className="mt-9 !text-gray-300"
            >
              Read {display === 'hidden' ? 'more' : 'less'}
            </Button>
          </div>
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start !px-44 pb-16 pt-10`}
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            AutoGon for IT Operations
          </Typography>
          <Typography variant="body" className="mt-8">
            As an IT operations professional, you understand the importance of staying ahead of
            technological advancements. You want to be able to deliver results that drive your
            organization forward, but you also want to do so in a way that is efficient, scalable,
            and cost-effective. This is where AutoGon AI cloud comes in.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Benefits to IT Operations
          </Typography>
          <Typography variant="body" className="mt-8 ">
            AutoGon is programmed to meet the IT operations' needs and the organizations
            they support. It is a no-code platform that allows users and organizations
            to build models through a simple drag-and-drop process. This means you don't
            need a deep understanding of coding or data science. Our platform lets you
            quickly and easily create models that deliver valuable insights and drive
            business outcomes.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ul className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Deploy with zero code: </span>
                Our drag-and-drop interface makes it easy to build models, even for those
                without a technical background. This means you can save time and resources
                compared to traditional model development processes.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol start={2} className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Scalable Infrastructure: </span>
                Our AI cloud is built on a scalable infrastructure, so you can easily handle
                large volumes of data and models. This makes it an excellent option for organizations
                looking to grow and scale their operations.
              </li>
              <li>
                <span className="font-semibold">Reduced Costs: </span>
                Because our platform is cloud-based, you don't need to worry about investing in
                expensive hardware or software. This makes it a cost-effective option for
                organizations of all sizes.
              </li>
              <li>
                <span className="font-semibold">Improve your team's Collaboration: </span>
                AutoGon makes it easy for team members to work together on models, regardless of location.
                This means you can collaborate with stakeholders worldwide, improving communication and
                ensuring everyone is on the same page.
              </li>
              <li>
                <span className="font-semibold">Double up on Speed: </span>
                Our platform is designed to be fast and efficient, allowing you to build and deploy models
                quickly. You can start delivering results and driving business outcomes in 5 minutes.
                Learn how to get more out of your data.
              </li>
            </ol>
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

export default ItOperations