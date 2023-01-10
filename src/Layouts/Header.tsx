import { Container, Typography } from "../components";

export const Header = () => {
  return (
    <>
      <Container
        flex
        justify="between"
        align="center"
        as="span"
        className="bg-[#B090EF] w-full py-2"
      >
        <Typography variant="caption" className="uppercase">
          Interested to learn how SAP trains ML for Document Information
          Extraction Application? Join our upcoming webinar with SAP's Principal
          Data Scientist to discover it.
        </Typography>
        <Typography
          variant="caption"
          className="uppercase leading-[19.2px] cursor-pointer hover:underline"
        >
          Register Now
        </Typography>
      </Container>
    </>
  );
};
