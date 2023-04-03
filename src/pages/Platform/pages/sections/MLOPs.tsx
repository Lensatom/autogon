import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import MLOPsImage from '../../../../assets/images/mlop.jpg';
import { NavLink } from "react-router-dom";

const MLOPs = () => {
  
  const [display, setDisplay] = useState('hidden')
  const backdrop = {
    backgroundImage: `url(${MLOPsImage})`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  }

  return (
    <>
      <Container
        background
        style={backdrop}
        className="bg-screen !backdrop-brightness-50 relative h-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="mlops"
      >
        <div className="w-full h-full backdrop-brightness-[0.2] lg:px-[5%] px-5 flex flex-col justify-center">
          <Typography
            variant="title"
            className="font-semibold !text-white"
          >
            MLOPs
          </Typography>
          <Typography variant="body" className="mt-8 !text-white lg:w-1/2">
            Machine learning operations are the fundamental building blocks of machine learning
            models. With Autogon, you can Unlock the power of AI to tackle complex challenges easily.
            Our intuitive interface empowers you to train, test and deploy ML models with just a few
            clicks. Quickly adjust parameters and connect them to the other operations and data sources
            to create your model. Autogon also includes a range of pre-built models that you can use as
            a starting point or modify to suit your needs.
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
        className={`${display} bg-screen flex-col items-start lg:!px-44 pb-16 lg:pt-10`}
        flex
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Autogon is a unified hub of distinction for your production AI
          </Typography>
          <Typography variant="body" className="mt-8 ">
            This offers you a centralized location to deploy, monitor, manage, and govern your
            production models, regardless of how, when, and where they were deployed.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Develop New models with click and drag in seconds.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            You can quickly develop new models to work with MLOps. You will have instant access
            to advanced ML monitoring built on a robust governance framework to manage the lifecycle
            of all your production AI with just a few clicks with zero coding abilities.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Blast Off with Lightning Speed
          </Typography>
          <Typography variant="body" className="mt-8 ">
            With Autogon AI, you'll be launching your machine learning models into the stratosphere in no time.
            Our platform makes deploying models a breeze, cutting down on time and complexity. Whether you're
            part of a small squad or a massive enterprise, our platform is packed with all the tools and
            resources you need to succeed.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8  font-semibold">
            Bye-bye, Complex Operations!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon AI banishes boring, complex ML operations so you can focus on the things that matter.
            With our unified environment, you can tackle the entire machine-learning journey with ease.
            Work with your team in real-time and access all the tools and resources you need to drive
            continuous optimization.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Constant Optimization, No Sweat
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Optimize your machine learning models with ease using Autogon AI's collaborative environment.
            Work with your team in real-time and access all the resources you need to make your models better
            and better.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Empower Your Squad
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon AI empowers your team to work together effectively and efficiently. Our platform provides
            a unified environment for the entire machine learning journey, so you can tackle any challenge
            together.
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

export default MLOPs