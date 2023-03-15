import React from 'react'
import { Button, Container, Typography } from '../../../components'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { Footer } from '../../../Layouts/Footer'
import { Header } from '../../../Layouts/Header'

const Careers = () => {

  const jobs = [
    {
      position: "Senior Machine Learning Engineer",
      description: "We are seeking a highly experienced and innovative Senior Machine Learning Engineer to join our team. The ideal candidate will have extensive experience in designing, developing, and deploying machine learning models. You will be responsible for leading the development of advanced machine learning algorithms and models, as well as collaborating with cross-functional teams to deliver innovative solutions.",
      responsibilities: [
        "Design and develop advanced machine learning algorithms and models",
        "Collaborate with cross-functional teams to deliver innovative solutions",
        "Participate in the research and development of new machine learning techniques and technologies",
        "Work with large datasets and integrate with data pipelines",
        "Develop and deploy machine learning models in production environments",
        "Lead code reviews and provide guidance to junior team members",
        "Communicate complex ideas and findings to technical and non-technical stakeholders"
      ],
      requirements: [
        "PhD or Master's degree in Computer Science, Statistics, or related field",
        "5+ years of industry experience in machine learning engineering",
        "Strong programming skills in Python, Java or other programming languages",
        "Experience with machine learning frameworks like TensorFlow, PyTorch, and Scikit-learn",
        "Experience in designing and deploying models at scale",
        "Good understanding of data structures, algorithms and distributed systems",
        "Ability to work in a fast-paced, collaborative environment",
        "Strong written and verbal communication skills"
      ]
    },
    {
      position: "Customer Support Associate Role",
      description: "We are seeking a highly motivated and customer-focused Customer Support Associate to join our team. The ideal candidate will be responsible for providing excellent customer service, resolving customer issues and inquiries, and ensuring customer satisfaction. You will be responsible for managing customer support requests and assisting customers with product-related issues.",
      responsibilities: [
        "Provide exceptional customer service and support through various channels (email, phone, chat)",
        "Resolve customer inquiries and issues in a timely and efficient manner",
        "Ensure customer satisfaction and retention by building strong customer relationships",
        "Collaborate with cross-functional teams to ensure customer issues are resolved",
        "Provide product feedback and suggestions to improve the customer experience",
        "Maintain accurate records of customer interactions and support requests",
        "Follow up with customers to ensure their issues have been resolved"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "1-2 years of experience in customer support or related field",
        "Excellent verbal and written communication skills",
        "Strong problem-solving and decision-making skills",
        "Ability to work in a fast-paced, dynamic environment",
        "Experience with customer support software and tools",
        "Ability to work independently and in a team environment",
        "Customer-focused and proactive attitude"
      ]
    }
  ]

  return (
    <>
      <Header />
      <Container className="bg-screen pt-24 pb-10 lg:pt-28 flex flex-col gap-8">
        <BreadCrumb />
        <Typography
          variant="header"
          className="max-w-[47.625rem] text-[46px] lg:!text-[65px] pt-10 leading-normal !font-normal font-warp"
        >
          Careers
        </Typography>
        {jobs.map((job:any) => {
          return (
            <div className='bg-dark-surface py-8 px-4 rounded-lg shadow-lg flex flex-col items-start gap-2'>
              <Typography isDarkMode variant="body" className="font-semibold">Position: {job.position}</Typography>
              <Typography isDarkMode variant="body" className="font-semibold">Description</Typography>
              <Typography isDarkMode variant="body">{job.description}</Typography>
              <Typography isDarkMode variant="body" className="font-semibold">Responsibilities</Typography>
              <Typography isDarkMode variant="body">
                <ul className="list-disc pl-5">
                  {job.responsibilities.map((responsibility:any) => {
                    return (
                      <li>{responsibility}</li>
                    )
                  })}
                </ul>
              </Typography>
              <Typography isDarkMode variant="body" className="font-semibold">Requirements</Typography>
              <Typography isDarkMode variant="body">
                <ul className="list-disc pl-5">
                  {job.requirements.map((requirement:any) => {
                    return (
                      <li>{requirement}</li>
                    )
                  })}
                </ul>
              </Typography>
              <Button>Apply here</Button>
            </div>
          )
        })}
      </Container>

      <Footer />
    </>
  )
}

export default Careers