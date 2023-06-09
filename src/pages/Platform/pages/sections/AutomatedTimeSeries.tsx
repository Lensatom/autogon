import { useState } from 'react'
import { Button, Container, Typography } from "../../../../components";
import DragnDrop from '../../../../assets/images/automated.png'
import { NavLink } from "react-router-dom";

const AutomatedTimeSeries = () => {
  
  const [display, setDisplay] = useState('hidden')

  return (
    <>
      <Container
        background
        className="bg-screen pt-32 flex-col-reverse lg:flex-row gap-8 items-center"
        flex
        id="automated-time"
      >
        <div className="w-full">
          <Typography
            variant="title"
            className="font-semibold"
          >
            Automated Time Series
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Design, deploy, and maintain high-impact forecasts across your organization with convenience.
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
            src={DragnDrop}
            alt="Automated time series image"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className={`${display} bg-screen flex-col items-start lg:px-44 pb-16 pt-10 gap-8`}
        flex
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            AutoGon: Simplifying AI, Revolutionizing Predictions.
          </Typography>
          <Typography variant="body" className="mt-8">
            AutoGon, a leading machine learning and AI cloud platform has made it simpler and faster for users
            and organizations to build models. The Automated Time Series feature is a unique and innovative
            feature that simplifies the process of analyzing time-based data and making accurate predictions.
            Even those without coding experience can quickly and easily build and train time series models
            using our drag-and-drop interface. So you don't have to waste fine-tuning time models; our platform
            automatically selects the best algorithms, features, and parameters based on the data you provide.
            This saves you time and resources, using the insights generated by your models to drive your
            organization's growth and success.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Get Accurate Forecasts at Scale
          </Typography>
          <Typography variant="body" className="">
            Quickly identify trends, patterns, and anomalies in your data, and make accurate predictions
            about future trends and values. Autogon offers a wide range of customization options, so you
            can fine-tune your models to meet your specific needs. You can choose from various algorithms,
            adjust parameters, and add additional data sources to improve your models further. With our
            platform, you have complete control over the models you build and the data you use, so you
            can ensure that your predictions are accurate and relevant.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="font-semibold">
            Empower Your Time Series Analysis with Automated Time Series: Simplify, Predict, Succeed.
          </Typography>
          <Typography variant="body" className="mt-8">
            Whether you're a business owner, data analyst, or machine learning expert, Automated Time Series
            is the perfect solution for all your time series analysis needs. Start building and training your
            models and see the difference that our platform can make for your organization. You will be impressed
            with the power and ease of Automated Time Series.
          </Typography>
          <Typography variant="body" className="mt-8  font-semibold">
            Get Real-Time Insights with Nowcasting
          </Typography>
          <Typography variant="body" className="mt-8 ">
            Quickly develop models that estimate current conditions and help you understand factors contributing
            to those conditions at that exact moment. Use nowcasting to make critical decisions, like determining
            asset pricing based on current market conditions. AutoGon Automated Time Series can handle series with
            gaps or no data: all preprocessing tasks are automatically adjusted for you right out of the box. With
            cold-start forecasting, you can now generate and deliver accurate forecasts for new products or items
            and assist your organization in adjusting to economic or environmental shocks that erode historical
            data.
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

export default AutomatedTimeSeries