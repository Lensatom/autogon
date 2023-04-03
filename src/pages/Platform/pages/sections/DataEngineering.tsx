import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import DataEngineeringImage from '../../../../assets/images/data engineering.jpg'
import { NavLink } from "react-router-dom";

const DataEngineering = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="data-engineering"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            DATA ENGINEERING
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon Data Engineering is a new technique for collecting, transforming, and preparing data for
            final production. The foundation upon which AI models are created is crucial for ensuring that the
            results produced by users using these models are accurate, relevant, and valuable business decisions.
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
            src={DataEngineeringImage}
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
            Transform and prepare data for your machine-learning models in just a few minutes.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ul>
              <li>
                Data collection: Conveniently gather data from various sources and bring it together into
                a single repository.
              </li>
              <li>
                Data cleaning: Instantly remove any irrelevant or incorrect data and ensure that the data
                is consistent and in the correct format.
              </li>
              <li>
                Data transformation: Swiftly convert the data into a format suitable for use in machine
                learning models.
              </li>
              <li>
                Data preparation: Split data into training and test sets and prepare it for use in your
                machine-learning models without delay.
              </li>
            </ul>
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Autogon Data Engineering Platform Possibilities Optimize AI Everywhere
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Build AI models quickly and easily without worrying about the underlying data
            engineering process. Our platform provides a single system of record, making it
            easier than ever to take your AI projects from concept to reality.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Collaborate with Your Team in an AI Wonderland
          </Typography>
          <Typography variant="body" className="mt-8 ">
            At Autogon AI, we believe in the power of collaboration. That's why we've built a
            platform that allows all users to work together in one unified environment.
            Our platform is designed to support the entire AI lifecycle, from data engineering
            to deployment and monitoring. This means you can work with your team in real time,
            with access to all the tools and resources you need to bring your AI visions to life.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8  font-semibold">
            Accelerate Your AI with Ease
          </Typography>
          <Typography variant="body" className="mt-8 ">
            At Autogon AI, we're all about making your life easier. Our platform simplifies the complex
            data engineering and model development processes, so you can focus on delivering accurate and
            effective AI solutions to your organization. With Autogon AI, you'll be able to deliver better
            results faster than ever before!
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Unlock the Power of Your Data
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Data is the key to unlocking the full potential of AI. That's why we've built a powerful
            data engineering engine at the heart of Autogon AI. Our platform is designed to handle any
            data source, whether it's structured, unstructured, or semi-structured. We provide the tools
            and resources you need to turn your data into actionable insights and valuable predictions.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Join the AI Revolution Today!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon AI is helping organizations all over the world transform their businesses.
            Our platform provides everything you need to start your AI journey from a powerful data
            engineering engine to a collaborative environment built for AI. Whether you're a seasoned
            AI expert or just getting started, Autogon AI is the platform that can help you achieve
            your goals.<br />
            Don't just take our word for it! Schedule a demo with us today and experience the power of
            Autogon AI for yourself. The future is now, and it's time to join the revolution!
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

export default DataEngineering