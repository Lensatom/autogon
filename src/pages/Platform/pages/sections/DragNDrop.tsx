import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import DragnDrop from '../../../../assets/images/screenshot3.png'
import { NavLink } from "react-router-dom";

const DragNDrop = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen pt-32 flex-col-reverse lg:flex-row gap-8 items-center"
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
          <Typography variant="body" className="mt-8 ">
            Our drag-and-drop interface makes it easy for you to create powerful machine-learning solutions,
            even if you have no prior coding or algorithm knowledge. Simply bring your data and let Autogon
            do the rest. AutoGon's drag-and-drop interface enables you to build and deploy models in
            record time. Autogon also automates many tedious pre-processing tasks, including missing
            value treatment. Our intelligent kit allows you to streamline your analysis process and
            get results faster.
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
            src={DragnDrop}
            alt="Drag & drop image"
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
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Release the Power of Your Data with AutoGon: Building Models Made Simple.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            AutoGon supports a variety of use cases, from natural language processing and image
            recognition to recommendation systems and time series analysis. With pre-built templates
            and customizable blocks, you can start building your model immediately, and our platform
            will automatically generate the code in the background. This means you can focus on what
            matters – getting accurate results and insights from your data.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="font-semibold">
          Effortlessly build AI models with DragNDrop AI - where user-friendliness meets expert support.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            DragNDrop AI is the ideal platform for organizations and individuals who want to harness
            the power of AI and machine learning but need more technical expertise or resources. One
            of the best things about DragNDrop AI is how user-friendly it is. Autogon is intuitive,
            and even if you don't have a technical background, you can still <a href="http://console.autogon.ai/">Get started</a> and build
            models in no time. You never have to worry about getting stuck or being unable to figure
            something out.
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

export default DragNDrop