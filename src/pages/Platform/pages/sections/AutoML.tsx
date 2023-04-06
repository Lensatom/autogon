import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import { NavLink } from "react-router-dom";

const AutoML = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen pt-32 flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="auto-ml"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            Auto ML
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Supplement your expertise with extraordinary automation.
            Create and set up best-in-class machine learning models
            to maximize the value of AI in your organization.
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
            src="./banking.jpg"
            alt="banking"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start lg:flex-row-reverse pb-16 pt-10 gap-8`}
        flex
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Unleash the Power of Machine Learning: With AutoGon, Data Science is for Everyone!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Deploying your models has never been easier. With a single click or line of code,
            you can take your models from development to production and operationalize AI across
            your organization. Anyone can easily create accurate and effective models regardless
            of their technical expertise. AutoGon assists you in quickly and efficiently processing
            large amounts of data, identifying patterns, and confidently making predictions.
            Empower frontline decision-makers and simplify AI consumption with AI-powered apps
            built with your deployed models.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Simplify Your Model Building: Let AutoML do the Heavy Lifting!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            AutoML uses a combination of algorithms and machine learning techniques to automate
            the process of model building. It starts by analyzing your data and identifying the
            most appropriate algorithms and methods. Then, it automatically trains, validates,
            and optimizes the models, so you don't have to. The platform also provides visualizations
            and feedback, so you can understand the performance of your models and make informed
            decisions.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8  font-semibold">
            Empower your predictions with the ease of AutoML - Machine Learning for all, code-free!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            AutoML is the future of machine learning and AI, changing how organizations approach
            data science and predictive modeling.  With our bias testing and customizable
            compliance documentation, you can have peace of mind knowing that your AI solutions
            are reliable and ethical. You can now develop and train models in a fraction of the
            time without writing a single line of code.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Unlock the Insights in Your Data - AutoML, the Smart Way to Build Models!
          </Typography>
          <Typography variant="body" className="mt-8 ">
            AutoGon offers cutting-edge AutoML technology that automates the process of
            building machine-learning models, allowing you to focus on what matters –
            understanding and acting on your data. With a drag-and-drop interface, AutoGon
            enables you to analyze your data and generate a custom machine-learning model
            optimized for your specific use case.
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

export default AutoML