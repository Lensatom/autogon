import { Button, Container, Typography } from "../../../../components";

const PublicSector = () => {
  return (
    <>
      <Container
        background
        className="bg-screen flex-col-reverse lg:flex-row-reverse pb-10 lg:pt-24 gap-8 items-center"
        flex
        id="oil-and-gas"
        // direction="row-reverse"
      >
        <div className="w-full">
          <Typography variant="body" className="text-[22px]">
            [7]
          </Typography>
          <Typography
            variant="title"
            className="font-semibold"
          >
            Public Sector
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            Empowering Governments with AI, One Solution at a Time
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            Artificial intelligence's capabilities can address even the most challenging tasks
            faced by governments. By utilizing AutoGon, government agencies can harness the
            power of AI in a responsible and scalable manner.
          </Typography>
          <Typography
            variant="body"
            className="font-semibold mt-8"
          >
            AI in Public Sector
          </Typography>
          <Typography variant="body" className="mt-8">
            Artificial Intelligence, or AI, has undergone rapid development in recent years,
            and the public sector has been keeping pace with these advancements. AI in the
            public sector can bring numerous benefits, making it a valuable tool for improving
            the efficiency, accuracy, and overall performance of various government agencies
            and public organizations. One way that the public sector can tap into the benefits
            of AI is through the use of a Machine Intelligence and AI cloud platform, particularly
            one designed as a no-code platform. AutoGon provides a streamlined and user-friendly
            approach to developing AI solutions, making it possible for public sector organizations
            to create and deploy AI models without the need for extensive coding expertise, making
            it possible for the public sector to take advantage of AI's capabilities on a much larger scale.
          </Typography>
        </div>
        <div className="w-full">
          <img
            src="./financial services.jpg"
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
            Use cases of Autogon
          </Typography>
          <Typography variant="body" className="mt-8 lg:w-[80%]">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Public Health</span><br />
                The significance of Artificial Intelligence (AI) in public health continues
                to grow, and AutoGon is leading the charge in utilizing AI's limitless potential
                to enhance productivity, patient treatment, and overall general health and safety.
                AutoGon is crucial in revolutionizing public health with AI by assisting healthcare
                organizations.
              </li>
              <li>
                <span className="font-semibold">Military</span><br />
                There is no doubt that Artificial Intelligence will have a profound impact on future
                military operations. AutoGon is assisting the armed forces in swiftly incorporating AI
                and taking the lead in its application for national security purposes to ensure readiness
                and maintain a competitive advantage. By doing so, DataRobot is enabling the armed forces
                to safeguard their strategic position on the ever-evolving battlefield.
              </li>
            </ul>
          </Typography>
          <Button className="mt-9">Request a demo</Button>
        </div>
        <div className="w-full">
          <Typography variant="body" className="mt-8">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-semibold">Intelligence Community</span><br />
                AutoGon's proficiency in Artificial Intelligence and its cutting-edge technologies are vastly
                boosting the ability of the Intelligence Community (IC) to examine, combine and make sense of
                diverse data sources, draw conclusions, and make informed decisions based on a comprehensive
                analysis of all accessible data. Through its AI capabilities, AutoGon is helping the IC achieve
                its mission more efficiently. 
              </li>
              <li>
                <span className="font-semibold">Law Enforcement Agencies</span><br />
                Artificial Intelligence is playing a crucial role in enhancing the ability of security and
                law enforcement agencies to deal with incidents effectively, anticipate potential dangers,
                plan responses, allocate resources judiciously, and examine and scrutinize criminal activity.
                Whether in cybersecurity or forensic science, AI enables these teams to operate more effectively
                and securely.
              </li>
              <li>
                <span className="font-semibold">Federal and State Governments</span><br />
                AutoGon's Artificial Intelligence (AI) no-code Platform provides reliable and understandable
                solutions to tackle complex issues faced by state and local government entities. With its AI
                technology, DataRobot delivers effective and trustworthy results.
              </li>
              <li>
                <span className="font-semibold">IT Security</span><br />
                Discover how AutoGon's AI technology can enhance your cybersecurity defenses by integrating your
                existing systems. With this integration, you can boost your intelligence gathering, prioritize
                vulnerability management, and make more informed decisions quicker and more precisely, thereby
                strengthening your collective defense efforts.
              </li>
            </ul>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default PublicSector