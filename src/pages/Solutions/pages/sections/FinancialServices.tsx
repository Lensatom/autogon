import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import FinancialServicesImage from '../../../../assets/images/2.jpg'
import { NavLink } from "react-router-dom";

const FinancialServices = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="financial-services"
        // direction="row-reverse"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            Financial Services
          </Typography>
          <Typography variant="body" className="mt-8">
            Financial Services AI enables banks and financial institutions to handle
            increasing regulations and competitive pressures using trustworthy and
            comprehensible artificial intelligence. This technology can be deployed
            at any location, including on-site, allowing financial organizations to
            utilize AI to address their challenges confidently.
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
            src={FinancialServicesImage}
            className="w-full object-contain"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start lg:!px-44 pb-16 lg:pt-10`}
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            No-code AI-cloud Platform for Financial Services
          </Typography>
          <Typography variant="body" className="mt-8">
            Enter the dynamic realm of AI and Machine Intelligence in the financial industry!
            The financial sector is undergoing rapid transformation, and the combination of
            AI and machine learning is transforming how financial institutions conduct business.
            These cutting-edge technologies can increase efficiency, lower costs, better manage
            risks, and elevate customer satisfaction. In this section, we will examine the
            advantages that the financial sector can gain from a no-code AI cloud platform.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Use cases of AI for Financial Service Providers
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Simplify Operations and Increase Efficiency</span><br />
                AutoGon no-code AI cloud platform can help financial institutions streamline
                operations and increase efficiency. By automating repetitive tasks and processes,
                organizations can free up valuable time and resources that can be redirected toward
                more critical areas. The platform's drag-and-drop interface makes it easy for
                non-technical users to build and deploy AI models, reducing the need for specialized
                resources and expertise.
              </li>
              <li>
                <span className="font-semibold">Reduce Overhead Costs</span><br />
                The financial sector always looks for ways to reduce costs and improve profitability.
                A no-code AI cloud platform can help organizations achieve this by automating routine
                tasks, reducing manual errors, and improving the speed and accuracy of decision-making.
                Additionally, the platform's cloud-based infrastructure reduces the need for on-premise
                hardware, leading to lower costs and greater scalability.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Improve Risk Management</span><br />
                In the financial sector, managing risk is a critical component of success.
                AI and ML can help organizations identify and mitigate risk in real time,
                improving the speed and accuracy of decision-making. A no-code AI cloud
                platform enables financial institutions to build and deploy custom models
                that can quickly detect and respond to emerging risks, reducing the impact
                of potential losses. 
              </li>
              <li>
                <span className="font-semibold">Enhance Customer Experience</span><br />
                The financial sector is increasingly focused on enhancing the customer experience,
                and AI can play a significant role in this effort. A no-code AI cloud platform can
                help financial institutions deliver personalized experiences, improve customer engagement,
                and increase customer satisfaction. Financial service providers can build and deploy
                models that use customer data to make recommendations, provide real-time support,
                and personalize the customer experience.
                <ul>
                  <li>
                    Fraud Detection and Prevention: Early detection of fraud reduces financial losses
                    and protects clients from financial harm.
                  </li>
                  <li>
                    Governance: AI technology helps to minimize model risk and increases the transparency
                    and accountability of the model development, deployment, and usage process.
                  </li>
                  <li>
                    Analyst Report: Customer Marketing to Client Retention: AI-powered analysis of
                    customer relationships to boost customer loyalty and increase retention rates.
                  </li>
                  <li>
                    Risk Mitigation: An AI-driven strategy is used to operate profitably in markets
                    that traditional banks consider too risky.
                  </li>
                </ul>
              </li>
            </ul>
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

export default FinancialServices