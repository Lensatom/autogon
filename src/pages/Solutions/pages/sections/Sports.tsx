import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import SportsImage from '../../../../assets/images/sports-tools.jpg'
import { NavLink } from "react-router-dom";

const Sports = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center !px-0"
        flex
        id="sports"
        // direction="row-reverse"
      >
        <div className="lg:w-[90%] lg:px-[5%] w-full px-5">
          <Typography
            variant="title"
            className="font-semibold"
          >
            Sports
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-full">
            As the sports industry continues to evolve, technology plays an increasingly important role
            in improving performance, enhancing fan engagement, and streamlining operations. With the rise
            of machine intelligence and AI, there is now a powerful tool that organizations in the sports
            sector can use to gain a competitive advantage and unlock new opportunities. See how AutoGon can help
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
            src={SportsImage}
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
            No-code Optimization for Sport
          </Typography>
          <Typography variant="body" className="mt-8">
            In the past, professional sports organizations regarded data and analytics as
            valuable tools that could give them an advantage over their competitors. However,
            today, data and analytics in sports have become a minimum requirement.
            These organizations must go beyond just relying on data to decide to stay ahead.
            They must be able to quickly implement new ideas and strategies, allowing their teams
            to make the most effective choices in real time. Sporting organizations can use AutoGon
            to combine AI, machine learning, and sports to power insights and decisions on and off
            the field.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            No-code Use Cases In Sports
          </Typography>
          <Typography variant="body" className="mt-8 w-full">
            AI and machine intelligence can analyze large amounts of data and turn it into actionable
            insights. In the sports sector, this can be used to track player performance, identify
            gameplay trends, and predict future outcomes. From unlocking new insights and enhancing
            the fan experience to streamlining operations and reducing costs, AutoGon's no-code
            solution is poised to revolutionize how the industry operates.
          </Typography>
          <Typography variant="body" className="mt-8 ">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Player statistics Analysis</span><br />
                Machine learning algorithms can analyze player statistics, game footage, and injury
                reports to help teams make informed decisions about player selection and game strategy.
              </li>
              <li>
                <span className="font-semibold">Enhance the fan experience.</span><br />
                AI-powered chatbots can provide fans with real-time information and answer their questions.
                This can include everything from game schedules and ticket information to stats and player
                profiles. And, with the rise of virtual and augmented reality, fans can now experience
                the excitement of the game in new and innovative ways.
              </li>
              <li>
                <span className="font-semibold">Streamline operations and reduce costs.</span><br />
                AI-powered predictive maintenance can identify potential equipment failures before they happen,
                allowing organizations to address issues and proactively avoid costly downtime.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Automate Routine Tasks</span><br />
                AutoGon's Machine learning algorithms can automate routine tasks, such as data entry and report
                generation, freeing up valuable time and resources for more strategic initiatives.
              </li>
              <li>
                <span className="font-semibold">Player Performance: Know Your Star Players!</span><br />
                Autogon gives you a crystal ball to help you predict which players will shine in the future
                and make the best draft picks. You can understand a player's current value and potential risks
                with AI. Plus, with the ability to evaluate trade options and target offers precisely, you'll
                always have a winning team. But that's not all. With Autogon's injury predictions, you can keep
                your players healthy and on the field.
              </li>
              <li>
                <span className="font-semibold">Ticketing: Fill the Seats!</span><br />
                With Autogon, you'll know exactly who's likely to leave as a season ticket holder and why giving
                you a chance to keep them. You can also identify new potential season ticket holders,
                price tickets optimally, and forecast sales, all while boosting suite sales.
              </li>
              <li>
                <span className="font-semibold">In-Game Strategy: Outwit Your Opponent!</span><br />
                Autogon allows you to optimize your starting lineup, determine the best game strategy, including
                defensive positioning, and understand how to counteract your opponent. With real-time events and
                game analysis, you'll always stay ahead of the game and come out on top.<br /><br />
                Why settle for average when you can unleash the power of AI and dominate the sports
                world with Autogon?

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

export default Sports