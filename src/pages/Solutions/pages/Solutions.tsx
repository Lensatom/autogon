import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import Logo from '../../../assets/logo/Autogon-logo-light.png'
import { Footer } from "../../../Layouts/Footer";
import Banking from '../../../assets/images/banking.jpg'
export const Solutions = () => {
  return (
    <>
      <Header />

      <Container
         
        background
        className="bg-screen pt-[10rem] lg:pt-[8rem] pb-28"
      >
        <BreadCrumb darkMode />
        <Typography
          align="center"
          variant="display"
          className="mx-auto mt-20 lg:w-2/3"
        >
          Solutions designed for industry-specific
        </Typography>
        <Typography
          variant="body"
          align="center"
          className="capitalize lg:w-1/2 mx-auto mt-5"
        >
          At our company, we understand that different industries have different
          needs and challenges when it comes to AI and machine learning. That's
          why we've developed industry-specific solutions to help businesses in
          each sector take advantage of the power of AI.
        </Typography>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row-reverse pt-20 gap-5"
        flex
        id="banking"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [1]
          </Typography>
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
            src={Banking}
            className="h-full w-full object-contain"
          />
        </div>
      </Container>
      <Container
        background
         
        className="bg-screen flex-col-reverse items-center lg:flex-row-reverse pt-10 pb-40 gap-3"
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
        <div>
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
          <Button className="mt-9">Request a demo</Button>
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [2]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            HEALTHCARE
          </Typography>
          <Typography
             
            variant="body"
            className="font-semibold mt-8"
          >
            AutoGon for Healthcare
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Unleash the power of AI in healthcare with Autogon!
            <span>
              Our fancy technology is crafted with love to tackle the unique challenges
              faced by the healthcare industry.
            </span>
            No more guesswork, no more long hours pouring over data - with Autogon, you'll
            have faster, smarter and more accurate answers at your fingertips.
          </Typography>
          <Typography
             
            variant="body"
            className="font-semibold mt-8"
          >
            Machine Learning in HealthCare
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
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
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AI cloud platforms in healthcare have a wide range of use cases, including but not
            limited to data analysis, drug discovery, predictive maintenance, and personalized
            medicine. By leveraging cloud computing and AI technologies, healthcare organizations
            can more effectively manage, analyze and utilize vast amounts of patient data to improve
            patient outcomes and streamline operations. Additionally, AI cloud platforms can provide
            secure, scalable, and cost-effective solutions for healthcare organizations looking to
            incorporate AI into their operations.
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/e9ce2bb4e6/powerful-worksflows.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="manufacturing"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [3]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            MANUFACTURING
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the manufacturing industry, AI and machine learning can be used
            to improve efficiency, reduce costs, and increase safety. Our
            platform provides a wide range of pre-built models and algorithms
            for these use cases, as well as a powerful model builder for
            creating custom models. With our platform, manufacturers can easily
            implement AI and machine learning to improve their operations and
            stay competitive in the market.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="retail"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [4]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            RETAIL
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the retail industry, AI and machine learning can be used to
            improve customer service, personalization, and inventory management.
            Our platform provides a wide range of pre-built models and
            algorithms for these use cases, as well as a powerful model builder
            for creating custom models. With our platform, retailers can easily
            implement AI and machine learning to improve their operations and
            better serve their customers.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="financial-services"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [5]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            FINANCIAL SERVICES
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the financial services industry, AI and machine learning can be
            used to improve risk management, fraud detection, and customer
            service. Our platform provides a wide range of pre-built models and
            algorithms for these use cases, as well as a powerful model builder
            for creating custom models. With our platform, financial services
            companies can easily implement AI and machine learning to improve
            their operations and better serve their customers.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="oil-and-gas"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [6]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            OIL AND GAS
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the oil and gas industry, AI and machine learning can be used to
            improve efficiency, reduce costs, and increase safety. Our platform
            provides a wide range of pre-built models and algorithms for these
            use cases, as well as a powerful model builder for creating custom
            models. With our platform, oil and gas companies can easily
            implement AI and machine learning to optimize their operations,
            improve resource management and ensure safety in the industry.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row-reverse pb-10 lg:pb-40 gap-3"
        flex
        direction="row-reverse"
        id="public-sector"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [7]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            PUBLIC SECTOR
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the public sector, AI and machine learning can be used to improve
            the delivery of services, streamline operations, and increase
            transparency. Our platform provides a wide range of pre-built models
            and algorithms for these use cases, as well as a powerful model
            builder for creating custom models. With our platform, public sector
            organizations can easily implement AI and machine learning to
            improve the services they provide and increase the efficiency of
            their operations.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/9316e5479f/automation-tools.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      <Container
        background
         
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pb-40 gap-3"
        flex
        // direction="row-reverse"
        id="sports"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [8]
          </Typography>
          <Typography
             
            variant="title"
            className="font-semibold"
          >
            SPORTS
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            In the sports industry, AI and machine learning can be used to
            improve player performance, analyze game data, and increase fan
            engagement. Our platform provides a wide range of pre-built models
            and algorithms for these use cases, as well as a powerful model
            builder for creating custom models. With our platform, sports teams
            and organizations can easily implement AI and machine learning to
            improve their performance and engage with their fans in new ways.
          </Typography>

          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <img
            src="https://a.storyblok.com/f/139616/2500x1933/92cc18dd9c/anlytics-reporting.webp"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>

      {/* <Container background className="pt-20 pb-10">
        <div className="lg:mx-auto">
          <Typography variant="body" className="lg:w-3/4 mx-auto">
            Whether the use case at hand involves computer vision, natural
            language processing, or speech recognition, Kili empowers teams of
            annotators, engineers, data scientists, business stakeholders, and
            anyone in between to build the training data that fits the needs and
            drives the results.
          </Typography>
          <div className="h-[601px] w-fit mx-auto mt-2">
            <img
              src={Image}
              className="h-full w-full object-contain hidden lg:block"
            />
            <img
              src="https://a.storyblok.com/f/139616/x/7c4a30c66d/diagram-02-mobile-3.svg"
              className="h-full w-full object-contain lg:hidden"
            />
          </div>
        </div>
      </Container> */}

      {/* <Container background className="pt-20">
        <Typography
          variant="header"
          align="center"
           
          className="!font-extrabold"
        >
          Training data platform for Enterprise AI
        </Typography>
        <Typography
          variant="body"
          align="center"
           
          className="lg:w-1/2 mx-auto mt-5"
        >
          Kili is the platform that accelerates the creation and deployment of
          training data for ML and AI. With Kili, build and deliver training
          data for high performing models at a fraction of the usual time and
          cost.
        </Typography>
      </Container>

      <Container
         
        background
        className="lg:pt-40 pt-10 lg:pb-40 pb-20"
      >
        <div className="lg:mx-auto grid grid-cols-2 lg:grid-cols-3 lg:w-[80%] lg:gap-8 lg:gap-y-10">
          {iconsSections.map((item) => (
            <IconSection src={item.src} title={item.title} />
          ))}
        </div>
        <div className="lg:mt-5 flex justify-center">
          <Button darkMode className="mt-5" variant="outline">
            Talk to an expert
          </Button>
        </div>
      </Container>

      <Container background noGutter className="pb-60">
        <Container
          as="div"
          isLightDarkMode
          background
          className="lg:flex items-center gap-3 rounded lg:rounded-2xl lg:h-[50rem] lg:!px-20"
        >
          <div className="w-full pt-12 lg:mt-0">
            <Typography variant="caption">
              SECURITY AND COMPLIANCE
            </Typography>
            <Typography
               
              variant="header"
              className="font-semibold lg:text-[90px] lg:mt-4 !leading-[4rem] lg:!leading-[5rem]"
            >
              Security that scales
            </Typography>
            <Typography variant="body" className="mt-4 lg:w-[36rem]">
              Whatever the size of your organization, our intelligent security
              measures are built to scale. Our rigorous security program is
              informed by the needs of our customers and industry standards,
              giving you certainty that your data is in safe hands.
            </Typography>
            <Button className="flex items-center gap-3 mt-5">
              Sign Up
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
          <div className="w-full">
            <img src={SOCIcon} className="h-full w-full object-contain" />
          </div>
        </Container>
      </Container> */}

      <Container
        isLightDarkMode
        background
        className="bg-[#162427] pb-28 pt-28"
      >
        <div className="">
          <img src={Logo} className="relative mx-auto h-20 w-20 mb-10" />
          <Typography
            variant="subdisplay"
            className="capitalize !text-white text-center"
          >
            Begin your journey
          </Typography>
          <Typography variant="body" align="center" className="!text-white mt-3">
            Begin your journey! Start Creating AI Models.
          </Typography>
          <div className="flex mx-auto w-fit gap-2 mt-16 mb-8 lg:mb-0">
            <Button>See a Demo</Button>
            <Button
              className="flex items-center gap-3 !text-white hover:!border-primary !border-white"
              variant="outline"
            >
              Start for free
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </Container>

      <Footer darkMode />
    </>
  );
}