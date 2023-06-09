import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import ManufacturingImage from '../../../../assets/images/3.jpg'
import { NavLink } from "react-router-dom";

const Manufacturing = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center !px-0"
        flex
        id="manufacturing"
        // direction="row-reverse"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            MANUFACTURING
          </Typography>
          <Typography variant="body" className="mt-8">
            AutoGon's no-code platform for Manufacturing is specifically designed for today's
            manufacturing challenges and opportunities and lays the groundwork for the next generation
            of intelligent businesses.
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
            src={ManufacturingImage}
            className="w-full object-contain rounded-x"
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
            Autogon is a one-stop shop for all your manufacturing needs.
          </Typography>
          <Typography variant="body" className="mt-8">
            The manufacturing industry has progressed from its traditional roots to embracing recent
            technological advancements such as machine learning and AI. By leveraging these cutting-edge
            technologies, organizations in the Manufacturing sector can improve their operations, increase
            efficiency, and gain a competitive advantage in the market. The no-code platform for machine
            learning and AI is a cloud-based solution that makes it easier for organizations to build,
            deploy, and manage machine learning models without coding or technical expertise.
            The platform's drag-and-drop interface makes it easy for users to create models quickly,
            saving organizations time and money.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Optimize every aspect of your operations
          </Typography>
          <Typography variant="body" className="mt-8 ">
            No-code platforms have several valuable use cases in the Manufacturing sector,
            including automating manual processes, creating custom applications, and
            streamlining data management. No-code platforms enable manufacturers to quickly
            and easily create and implement custom software solutions without relying on IT
            teams, eliminating the need for specialized coding skills. This helps to improve
            operational efficiency and enables manufacturers to respond more quickly to
            changing business requirements and gain a competitive edge in a rapidly
            evolving market.
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                Improved Predictive Maintenance: One of the critical benefits of the no-code
                platform is the ability to perform predictive maintenance on manufacturing
                equipment. By leveraging machine learning algorithms, organizations can predict
                when a machine will fail and take proactive measures to prevent it. This leads to
                fewer unplanned downtime events and increased efficiency.
              </li>
            </ol>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol className="list-decimal flex flex-col gap-3" start={2}>
            <li>
                Enhanced Quality Control: The platform can also monitor and improve quality control
                in the manufacturing process. With machine learning algorithms, the platform can
                identify patterns and anomalies in production data and provide real-time
                feedback on the products' quality.
              </li>
              <li>
                Better Resource Planning: The platform can help organizations better
                plan their resources by using machine learning algorithms to analyze
                production data and identify areas where resources can be better allocated.
                This leads to increased efficiency and better utilization of resources.
              </li>
              <li>
                Increased Supply Chain Visibility: The platform can also monitor and optimize
                the supply chain, providing organizations with better visibility into their
                supply chain operations. The platform can help organizations identify bottlenecks
                and improve their supply chain processes by analyzing production data.
              </li>
              <li>
                Reduced Costs: By using the no-code platform for machine learning and AI,
                organizations can reduce their costs by automating manual processes, reducing
                the need for technical expertise, and reducing the time and resources needed to
                build and deploy machine learning models.
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

export default Manufacturing