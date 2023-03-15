import { Button, Container, Typography } from "../../../../components";
import RetailImage from '../../../../assets/images/retail.jpg'

const Retail = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pt-24 gap-8 items-center"
        flex
        id="retail"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            Retail
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            An AI platform designed for the retail industry offers retailers a solution to tackle
            current challenges and seize future opportunities. By delivering insightful and impactful
            data, AutoGon empowers retailers to drive significant changes and advancements in the industry.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Introducing the No-Code Platform for Machine Learning and AI in Retail
          </Typography>
          <Typography variant="body" className="mt-8">
            The retail industry is constantly evolving, and staying ahead of the competition requires
            organizations to embrace the latest technologies, including machine learning and AI.
            By leveraging AutoGon's cutting-edge technologies, organizations within the retail
            sector can improve their operations, increase efficiency, and provide a better
            customer experience. AutoGon, the cloud-based solution for machine learning and AI,
            streamlines the process of building, deploying, and managing machine learning models
            for retail organizations. AutoGon eliminates the need for coding skills or technical
            expertise, making it possible for users to construct models quickly and effortlessly
            with its user-friendly drag-and-drop interface. As a result, retail organizations can
            save valuable time and resources.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src={RetailImage}
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row pb-10 lg:pt-2 lg:pb-10 gap-3 items-start"
        flex
        id="healthcare"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Use cases of the Nocode AI platform for Retail Providers
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Retail is becoming more multifaceted, connected, agile, competitive,
            and, most importantly, responsive to the constantly changing demands
            of the empowered consumer. The no-code AI Platform for Retail provides
            data-driven insights that assist retailers in solving their most challenging
            problems, driving success, and delivering real impact.
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                Improved Customer Personalization: One of the critical benefits of the no-code
                platform is the ability to personalize the customer experience. By using machine
                learning algorithms, the platform can analyze customer data and provide tailored
                recommendations, promotions, and advertisements to each customer based on their
                individual preferences. This leads to increased customer satisfaction and loyalty.
              </li>
            </ol>
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ol className="list-decimal flex flex-col gap-3" start={2}>
            <li>
                Inventory Optimization: AutoGon can be used to optimize inventory management.
                With machine learning algorithms, the platform can predict consumer demand and
                adjust stock levels accordingly, reducing the risk of overstocking or stock shortages.
              </li>
              <li>
                Fraud Detection: The platform can help organizations detect and prevent fraudulent
                activity, such as fraudulent transactions or returns. By analyzing transaction data,
                the platform can identify patterns and anomalies that may indicate fraudulent behavior,
                allowing organizations to take proactive measures to prevent it.
              </li>
              <li>
                Predictive Maintenance: The platform can also perform predictive maintenance on
                retail equipment, such as point-of-sale systems or self-checkout machines. By
                leveraging machine learning algorithms, organizations can predict when a device will
                fail and take proactive measures to prevent it, reducing downtime and increasing
                efficiency.
              </li>
              <li>
                Supply Chain Optimization: The platform can monitor and optimize the retail supply chain,
                providing organizations better visibility into their supply chain operations. The no-code
                platform can help retail businesses identify bottlenecks and improve supply chain processes
                by analyzing production data, leading to increased efficiency and reduced costs.
              </li>
            </ol>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Retail