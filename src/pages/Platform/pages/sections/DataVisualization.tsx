import { Button, Container, Typography } from "../../../../components";

const DataVisualization = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse gap-8 items-center"
        flex
        id="auto-ml"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [5]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            DATA VISUALIZATION
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Empowering your data journey, one drag and drop at a time.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            At Autogon, making sense of data is simple, easy, and enjoyable. Our cloud-based, no-code
            platform enables users and organizations of all sizes to transform their data into meaningful
            insights with a simple drag-and-drop process.
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
            Visualize your data, and simplify your insights with zero codes.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Autogon provides an intuitive, user-friendly interface that allows you to create custom data
            visualizations in minutes without any coding knowledge. No more hassle of manually handling
            and analyzing large datasets; Autogon streamlines the process and saves you time, allowing you
            to focus on what matters: making informed decisions based on your data.
          </Typography>
          <Typography 
            variant="body"
            className="font-semibold mt-8"
          >
            Unleash the power of your data, and reveal hidden insights with ease.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Data visualization is about more than just making your data look great; it's about discovering
            its story. As a result, Autogon employs advanced machine learning algorithms to assist you in
            uncovering hidden insights and patterns in your data and making confident data-driven decisions.
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Our platform is like a magic wand for data analysis. With just a wave, you can turn a pile of
            data into a mesmerizing masterpiece of graphs, charts, and other visualizations. No data
            analysis degree is required!
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            So if you're ready to take your data labeling efforts to the next level, try Autogon
            AI today and experience the difference that quality data labeling services can make
            for your business.
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

export default DataVisualization