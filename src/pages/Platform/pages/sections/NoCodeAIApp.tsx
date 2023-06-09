import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import NoCode from '../../../../assets/images/screenshot3.png'
import { NavLink } from "react-router-dom";

const NoCodeAIApp = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen pt-32 pb-24 flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="no-code"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            No-code AI App
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Create AI-powered applications to maximize the return on your machine learning investments.
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
            src={NoCode}
            alt="No-code AI Image"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start lg:px-44 pb-16 pt-10 gap-8`}
        flex
      >
        <div className="w-full">
          <Typography variant="body">
            Converting installed models into simple, usable decision-intelligence solutions for front-line
            business users is one of the challenges organizations face when scaling AI. Everyone, regardless
            of industry or background, should have access to the power of AI. That's why we built a platform
            that allows users and organizations to create AI models in minutes without writing a single line
            of code.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Transform Your AI Vision into Reality with Our No-code AI Apps.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Our No-code AI Apps platform is the future of AI development, allowing you to benefit from the
            most recent advances in machine learning, deep learning, and computer vision without hassle.
            Without worrying about the underlying technicalities, you can easily design and implement complex
            AI models using our drag-and-drop interface. Whether you want to automate a process, extract
            insights from data, or create a cutting-edge AI application, our platform can help.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8  font-semibold">
            Simplify Integration, Iteration, and Collaboration
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Autogon provides a wide range of pre-trained AI models and components and a robust API that allows
            you to integrate your AI models with any other software or platform you use. Iterate and improve ML
            models by involving your business community and sharing results with your AI consumers in an
            easy-to-use app.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Create Powerful AI Applications in Record Time
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Transform any deployed model into a secure AI application in minutes; utilize our pre-built
            templates and drag-and-drop widgets to configure your apps quickly; there is no need for a
            single line of code. Select the model features and data visualizations your app users will
            use in their decision-making process. With responsive design, you can create an app once and
            then preview and run it at any resolution on any mobile device or tablet.
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

export default NoCodeAIApp