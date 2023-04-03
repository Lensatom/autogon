import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import ExecutivesAndAnalyticsLeadersImage from '../../../../assets/images/executives.jpg'
import { NavLink } from "react-router-dom";

const ExecutivesAndAnalyticsLeaders = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="executives"
        // direction="row-reverse"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            EXECUTIVES & ANALYTICS LEADERS
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Join forces with the premier provider of automated machine learning to discover innovative
            ways to incorporate AI and cultivate a data-driven decision-making mindset throughout
            your organization.
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
            src={ExecutivesAndAnalyticsLeadersImage}
            className="w-full object-contain"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start !px-44 pb-16 pt-10`}
        flex
        id="executives"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Empowering Analytics Leaders with AI Simplicity
          </Typography>
          <Typography variant="body" className="mt-8">
            Designed with executives and analytics leaders in mind, our AI cloud platform offers a
            user-friendly, drag-and-drop interface that empowers you to construct models at lightning
            speed compared to conventional development methods. Our platform answers your needs if
            you're seeking to optimize processes, bolster decision-making, or uncover valuable
            insights from your data.
          </Typography>
          <Typography variant="body" className="mt-8">
            Whether you're looking to streamline your business processes, optimize your operations,
            or gain a competitive advantage, Autogon has the solution you need. With its user-friendly
            interface and advanced algorithms, Autogon provides actionable insights in real-time,
            giving you the power to make informed decisions that drive results.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            With our AutoGon, executive and analytics leaders can:
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Boost and Streamline Efficiency: </span><br />
                Say goodbye to manual processes and hello to optimized efficiency by significantly
                cutting down the time and effort needed to construct models. AutoGon helps you with
                vital resources, allowing you to concentrate on expanding your business.
              </li>
              <li>
                <span className="font-semibold">Enhance Decision-Making: </span><br />
                With the ability to build custom models tailored to your specific needs in minutes,
                you'll be able to make better, data-driven decisions that drive business growth and
                improve overall performance.
              </li>
            </ol>
          </Typography>
          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol start={3} className="list-decimal flex flex-col gap-3">
              <li>
                <span className="font-semibold">Access Valuable Insights: </span><br />
                AutoGon provides a wealth of information and insights that can help you better
                understand your data, customers, and overall business operations. We offer you
                all you need to identify trends, predict future outcomes, or gain a competitive
                advantage.
              </li>
              <li>
                <span className="font-semibold">Become your Industry Leader: </span><br />
                By utilizing the latest machine intelligence and AI technologies that AutoGon offers,
                you'll be able to stay ahead of the curve and competition in today's fast-paced
                business world. Discover how AutoGon can reform your business.
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

export default ExecutivesAndAnalyticsLeaders