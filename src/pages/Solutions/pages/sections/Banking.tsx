import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import BankingImage from '../../../../assets/images/1.jpg'
import { NavLink } from "react-router-dom";

const Banking = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center !px-0"
        flex
        id="banking"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            AutoGon for Banking
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Technology has largely impacted the banking industry in recent years and allowed
            significant automation, optimization, and customer experience advancements. One of
            the most exciting and promising advancements has been the rise of AI and machine learning.
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
            src={BankingImage}
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
          <Typography variant="body">
            AI and machine learning are revolutionizing the banking industry with AutoGon,
            improving risk management, fraud detection, customer experience, and more.
            And with the help of a cloud-based, no-code platform, banking organizations can
            harness these technologies in an efficient and accessible manner.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            AI and Machine Learning in Banking with Ease - A Cloud-based, No-Code functionality
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Our platform is like a personal assistant for banks, helping them streamline
            their operations and deliver top-notch services to their customers, all with a smile.
            By leveraging a cloud-based, no-code platform like AutoGon, organizations in the banking
            sector can benefit from these technologies without requiring a team of data scientists or
            IT professionals. The platform's drag-and-drop interface allows users to quickly build
            models and implement AI and machine learning solutions in minutes rather than weeks or months.
          </Typography>
          <Typography
             
            variant="body"
            className="font-semibold mt-8"
          >
            AI Use Cases In Banking
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <span className="font-semibold">Improve Risk Management: </span>
            With the help of machine learning algorithms, banks can:
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <li>
                Identify patterns and trends that may indicate a potential risk.
              </li>
              <li>
                Proactively manage risks before they become a significant issue.
              </li>
              <li>
                Enhance Fraud Detection: Fraudulent activities are becoming increasingly sophisticated, but with AutoGon, banks can
              </li>
              <li>
                detect and prevent fraud in real time.
              </li>
              <li>
                Reduce the losses caused by fraudulent activities
              </li>
              <li>
                Improve the app's overall security.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8 ">
            <span className="font-semibold">Personalized Customer Experience: </span>
            AI-powered customer service and marketing help banks
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <li>
                provide personalized customer experiences.
              </li>
              <li>
                Introduce tailored product recommendations
              </li>
              <li>
                and automated customer support.
              </li>
            </ul>
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <span className="font-semibold">Streamlined Operations: </span>
            Using AutoGon, Banks can utilize Machine learning and AI to:
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <li>
                Automate repetitive and time-consuming tasks,
              </li>
              <li>
                Free up time for employees to focus on more strategic initiatives.
              </li>
              <li>
                Increase efficiency, improve productivity, and reduce operational costs.
              </li>
            </ul>
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <span className="font-semibold">Increased Speed and Accuracy: </span>
            With the help of machine learning algorithms on AutoGon, banks can:
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <li>
                Process vast amounts of data in a fraction of the time it would take a human.
              </li>
              <li>
                Make faster and more accurate decision-making,
              </li>
              <li>
                Improve the overall customer experience.
              </li>
            </ul>
          </Typography>
          <Typography variant="body" className="mt-8 ">
            With AI Platforms for Banking, commercial and retail banks can use data-driven solutions
            to resolve their most pressing challenges while focusing on providing positive customer experiences.
            <a href="http://console.autogon.ai/">Get started</a> with AutoGon today
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

export default Banking