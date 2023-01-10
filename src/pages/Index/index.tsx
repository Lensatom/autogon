import { Container } from "../../components";
import { Header } from "../../Layouts/Header";
import { HeroPage } from "./Layouts/Hero";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <Container></Container>
    </>
  );
};
