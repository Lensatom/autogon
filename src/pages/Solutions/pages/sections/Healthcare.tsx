import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import HealthcareImage from '../../../../assets/images/4.jpg'
import { NavLink } from "react-router-dom";

const Healthcare = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            HEALTHCARE
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Unleash the power of AI in healthcare with Autogon!
            <span>
              Our fancy technology is crafted with love to tackle the unique challenges
              faced by the healthcare industry.
            </span>
            No more guesswork, no more long hours pouring over data - with Autogon, you'll
            have faster, smarter and more accurate answers at your fingertips.
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
            src={HealthcareImage}
            className="w-full object-contain"
          />
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
            Machine Learning in HealthCare
          </Typography>
          <Typography variant="body" className="mt-8">
            The healthcare industry is one of the world's most dynamic and rapidly evolving
            sectors. Healthcare organizations are constantly looking for new and innovative ways
            to improve their operations and services to meet the growing demand for better and
            more efficient patient care. This is where a machine learning and AI cloud, the
            no-code platform, can help to transform the industry.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Use Cases of AI Cloud Platforms in Healthcare
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-full">
            AI cloud platforms in healthcare have a wide range of use cases, including but not
            limited to data analysis, drug discovery, predictive maintenance, and personalized
            medicine. By leveraging cloud computing and AI technologies, healthcare organizations
            can more effectively manage, analyze and utilize vast amounts of patient data to improve
            patient outcomes and streamline operations. Additionally, AI cloud platforms can provide
            secure, scalable, and cost-effective solutions for healthcare organizations looking to
            incorporate AI into their operations.
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                Improved patient Care: By leveraging the power of machine learning and AI,
                healthcare organizations can:
                <ul className="list-disc flex flex-col gap-1 pl-3">
                  <li>Gain access to a wealth of data to improve patient care.</li>
                  <li>Build predictive models to identify potential health risks</li>
                  <li>Help healthcare providers proactively intervene to prevent illness or injury.</li>
                </ul>
              </li>
              <li>
                Seamless Integration: Healthcare organizations can use machine learning and AI to:
                <ul className="list-disc flex flex-col gap-1 pl-3">
                  <li>Streamline their operations and automate many manual tasks.</li>
                  <li>Develop algorithms to analyze Patient data</li>
                  <li>Identify trends and make care recommendations.</li>
                </ul>
              </li>
            </ol>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="">
            <ol className="list-decimal flex flex-col gap-3" start={3}>
              <li>
                Improved Data Analysis: AutoGon's Machine learning and AI cloud solutions can help
                healthcare organizations make sense of the vast amounts of data they collect.
                Healthcare providers can:
                <ul className="list-disc flex flex-col gap-1 pl-3">
                  <li>Automate the data analysis process,</li>
                  <li>Quickly identify patterns and trends that can inform treatment decisions</li>
                  <li>Improve patient outcomes.</li>
                </ul>
              </li>
              <li>
                Better Decision-Making: Machine learning and AI can be used to:
                <ul className="list-disc flex flex-col gap-1 pl-3">
                  <li>Develop predictive models that can help healthcare providers make better decisions.</li>
                  <li>
                    Develop algorithms to analyze patient data and identify individuals at risk of certain
                    conditions. Make recovery interventions early,
                  </li>
                  <li>Reduce the risk of severe health problems.</li>
                </ul>
              </li>
              <li>
                Increased Efficiency: Healthcare organizations can use machine learning and AI
                to improve the efficiency of their operations by
                <ul className="list-disc flex flex-col gap-1 pl-3 pb-5">
                  <li>
                    Developing algorithms to automate appointment scheduling, prescription renewals,
                    and patient follow-ups.
                  </li>
                  <li>Improve the overall patient experience.</li>
                </ul>
                <i className="font-semibold">Say goodbye to endless hours of data analysis and hello to improved patient care with Autogon AI. </i>
                Our user-friendly and efficient platform lets you focus on what truly matters - giving your patients the best possible care.
                Come on, give it a try, and experience the magic of AI in healthcare!
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

export default Healthcare