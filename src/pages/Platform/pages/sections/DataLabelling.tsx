import { Button, Container, Typography } from "../../../../components";

const DataLabelling = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="data-labelling"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [6]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            DATA LABELLING
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Unlock the full power of AI and drive innovation in your industry.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Creating high-quality training datasets for machine learning models should be simple
            and hassle-free. With Autogon's cloud-based, no-code platform, it's now easier for users
            and organizations to build and label their datasets, all within a short time frame.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src="./banking.jpg"
            alt="banking"
            className="w-full object-contain rounded-xl"
          />
        </div>
      </Container>
      <Container
        background
        className="bg-screen flex-col items-start lg:flex-row-reverse pb-16 pt-10 gap-8"
        flex
      >
        <div className="w-full">
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Label Your Data with Ease, Build Better AI Models with Confidence.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Autogon provides an easy-to-use, drag-and-drop interface that allows you to easily upload
            and label your data without coding knowledge. Our platform streamlines the labeling of images,
            videos, audio, or text. It saves you time, allowing you to focus on what matters: building the
            best machine-learning models possible.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Collaborate smarter, label faster: Advanced features for efficient dataset building on our platform.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            With Autogon, you'll have many pre-built templates and tools for labeling and annotating your data.
            Our platform also includes the following:
            <ul>
              <li>Advanced collaboration features.</li>
              <li>Allowing you to collaborate with others to tag and build your datasets quickly.</li>
              <li>Making the process faster and more efficient.</li>
            </ul>
            We understand that accurate machine-learning model require high-quality training datasets.
            Because of this, our platform employs cutting-edge algorithms to validate and verify labels,
            ensuring the accuracy and quality of your data. With our platform, you can be confident that
            your machine-learning models are based on the best data available.
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Empower your predictions with the ease of AutoML - Machine Learning for all, code-free!
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AutoML is the future of machine learning and AI, changing how organizations approach
            data science and predictive modeling.  With our bias testing and customizable
            compliance documentation, you can have peace of mind knowing that your AI solutions
            are reliable and ethical. You can now develop and train models in a fraction of the
            time without writing a single line of code.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%] font-semibold">
            Unlock the Insights in Your Data - AutoML, the Smart Way to Build Models!
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            AutoGon offers cutting-edge AutoML technology that automates the process of
            building machine-learning models, allowing you to focus on what matters –
            understanding and acting on your data. With a drag-and-drop interface, AutoGon
            enables you to analyze your data and generate a custom machine-learning model
            optimized for your specific use case.
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
      </Container>
    </>
  )
}

export default DataLabelling