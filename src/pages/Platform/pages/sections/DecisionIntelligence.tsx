import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import DataIntelligenceImage from '../../../../assets/images/decision intelligence.jpg'
import { NavLink } from "react-router-dom";

const DecisionIntelligence = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center !px-0"
        flex
        id="decision-intelligence"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            DECISION INTELLIGENCE
          </Typography>
          <Typography variant="body" className="mt-8 ">
            You don't need to spend a time-consuming and complicated process building models for
            your business decisions. Make data-driven decisions easily and quickly with our Decision
            Intelligence solution.
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
            src={DataIntelligenceImage}
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
            Harness the power of machine learning to make informed decisions.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Unlock data's potential and transform it into actionable insights with machine learning.
            Say goodbye to manual analysis and hello to real-time, accurate predictions with our cutting-edge
            technology. With Autogon, you can confidently make data-driven decisions and stay ahead of the
            competition with the power of machine learning at your fingertips.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            <a href="http://console.autogon.ai/">Get started</a> right away with a range of pre-built models
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ul>
              <li>Predict customer behavior</li>
              <li>Optimize supply chain processes</li>
              <li>Make data-driven financial forecasts</li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8  font-semibold">
            Collaborate with your team to create and improve models.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon offers collaboration features that make it easy for teams to work together
            to build and refine models. With the ability to share and review models, teams can
            collaborate to make better decisions and achieve their goals faster.
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

export default DecisionIntelligence