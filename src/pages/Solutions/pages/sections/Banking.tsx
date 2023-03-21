import { Button, Container, Typography } from "../../../../components";
import BankingImage from '../../../../assets/images/BANKING.jpg'
import { NavLink } from "react-router-dom";

const Banking = () => {
  return (
    <>
      <Container
        background
        className="bg-screen pt-32 flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="banking"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            AutoGon for Banking
          </Typography>
          <Typography
             
            variant="body"
            className="font-semibold mt-8"
          >
            Autogon AI is shaking up the banking world with our super-sleek AI tech!

          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Technology has largely impacted the banking industry in recent years and allowed
            significant automation, optimization, and customer experience advancements. One of
            the most exciting and promising advancements has been the rise of AI and machine learning.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AI and machine learning are revolutionizing the banking industry with AutoGon,
            improving risk management, fraud detection, customer experience, and more.
            And with the help of a cloud-based, no-code platform, banking organizations can
            harness these technologies in an efficient and accessible manner.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src={BankingImage}
            alt="banking"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className="bg-screen flex-col items-start lg:flex-row-reverse pt-10 gap-8"
        flex
      >
        <div className="w-full">
          <Typography
             
            variant="body"
            className="font-semibold mt-8"
          >
            AI and Machine Learning in Banking with Ease - A Cloud-based, No-Code functionality
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            With AI Platforms for Banking, commercial and retail banks can use data-driven solutions
            to resolve their most pressing challenges while focusing on providing positive customer experiences.
            Get Started with AutoGon today
          </Typography>
          <Button className="mt-9"><NavLink to='/request'>Request a demo</NavLink></Button>
        </div>
      </Container>
    </>
  )
}

export default Banking