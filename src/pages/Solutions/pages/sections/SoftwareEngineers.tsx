import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import SoftwareEngineersImage from '../../../../assets/images/software engineers.jpg'
import { NavLink } from "react-router-dom";

const SoftwareEngineers = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen pt-32 flex-col-reverse lg:flex-row gap-8 items-center"
        flex
        id="software-engineers"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            SOFTWARE ENGINEERS
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Welcome to Autogon, your solution for software engineering! AutoGon's innovative AI Cloud
            platform helps you establish a dependable end-to-end AI pipeline that you can bank on.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Effortless, Efficient, and Reliable AI with AutoGon
          </Typography>
          <Typography variant="body" className="mt-8">
            AutoGon provides enterprise-grade stability and scalability that you can rely on, from data
            preparation to value tracking. With the advent of machine intelligence and AI cloud platforms,
            you can experience seamless and accelerated development without writing a single line of code.
            Unlock the full potential of your projects with AutoGon and take advantage of its user-friendly
            drag-and-drop interface to build models in record time.
          </Typography>
          <Typography variant="body" className="mt-8">
            With Autogon, you can take advantage of cutting-edge machine learning and artificial intelligence
            technology to automate many time-consuming and repetitive tasks associated with software engineering.
            Our solution is designed to help you focus on what you do best: writing code, solving problems,
            and building new applications.
          </Typography>
          <div className="flex gap-5">
            <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
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
            src={SoftwareEngineersImage}
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start !px-44 pb-16 pt-10`}
        flex
        id=""
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="mt-8 ">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Simplifying the Model Building Process</span><br />
                One of the enormous benefits of machine intelligence and AI cloud platforms is that they
                simplify the model-building process. With drag-and-drop interfaces and pre-built models,
                you can quickly and easily create your models without coding. This saves you time and allows
                you to focus on other aspects of your project, such as data analysis and testing.
                Additionally, these platforms often come with extensive documentation and support,
                so you can get up and running quickly, even if you are new to machine learning.
              </li>
              <li>
                <span className="font-semibold">Collaboration Made Easy</span><br />
                Another benefit of these platforms is that they make collaboration easy. With the ability
                to share models and work together on projects, you can work with your team more effectively
                and streamline your workflow. This also opens up opportunities for cross-functional collaboration,
                allowing data scientists, developers, and business analysts to work together on projects
                and share insights and ideas.
              </li>
              <li>
                <span className="font-semibold">Access to Advanced Machine Learning Tools</span><br />
                In addition to simplifying the model-building process, machine intelligence and AI cloud platforms
                provide you with access to advanced machine learning tools and algorithms. With these tools,
                you can experiment with new techniques, try new ideas, and build better models that deliver
                more accurate results.
              </li>
              <li>
                <span className="font-semibold">Scalability and Flexibility</span><br />
                Machine intelligence and AI cloud platforms offer scalability and flexibility,
                allowing you to scale your projects up or down as needed. This makes managing large
                and complex tasks more accessible and ensures you always have the resources
                you need to do the job. See how to deploy our APIs into your Web stack.
              </li>
            </ul>
          </Typography>
          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Oilfield Services and Equipment (OFSE) Companies</span><br />
                Artificial Intelligence presents numerous opportunities for OFSEs to manage risk and optimize
                their operations. By utilizing AI, organizations can anticipate supply chain disruptions,
                anticipate equipment malfunctions, predict fluctuations in commodity prices, and make more
                accurate customer demand forecasts. Additionally, AI can play a key role in developing
                innovative services for customers, helping them boost their reserves' profitability and
                extracting hydrocarbons.
              </li>
              <li>
                <span className="font-semibold">Midstream and Downstream Operators</span><br />
                Artificial Intelligence (AI) can be leveraged by midstream and downstream operators in various
                areas of their operations, from enhancing the processing of raw inputs to devising effective
                transport strategies between production and refining sites. With exact predictive models,
                operators can predict maintenance requirements and minimize the disruption caused by
                equipment downtime.
              </li>
              <li>
                <span className="font-semibold">Oil Traders</span><br />
                With the help of Autogon, traders can maximize their profits by taking advantage of
                arbitrage opportunities. The AI system predicts the supply and demand of commodities
                and price trends by creating its forecasts. This valuable information gives traders a
                clear understanding of the market and allows them to make informed decisions, exploiting
                differences in price across different locations and time frames.
              </li>
              <li>
                <span className="font-semibold">Oil and Gas Companies</span><br />
                Oil and gas companies, including Majors, Super-Majors, and others that are vertically
                integrated, can incorporate AI-driven decision-making into all aspects of their operations,
                from front-line activities to back-office functions. By doing so, these companies can reap
                the benefits of AI across the board and make it an integral part of their overall business
                strategy. Discover how AutoGon can transform your oil and Gas operations
              </li>
            </ul>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default SoftwareEngineers