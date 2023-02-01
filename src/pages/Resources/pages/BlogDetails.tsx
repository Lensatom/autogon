import { Container, Typography } from "../../../components";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { Header } from "../../../Layouts/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const BlogDetails = () => {
  return (
    <Container background className="bg-surface pt-[10rem] lg:pt-[8rem] pb-28">
      <Header />
      <BreadCrumb />

      <Typography variant="subdisplay" className="w-[80%] mt-5">
        Revolutionizing Business Operations: How Autogon's AI/ML Platform is
        Transforming Industries
      </Typography>
      <div className="flex mt-20">
        <Container as="article" className=" ml-36 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            Autogon is an artificial intelligence and machine learning (AI/ML)
            brand that is revolutionizing the way businesses operate. The
            company's innovative platform allows businesses of all sizes to
            easily build, deploy, and manage machine learning models, without
            the need for extensive coding or deep technical expertise. With
            Autogon, businesses can gain valuable insights from their data,
            automate processes, and stay ahead of the competition.
            One of
            the key advantages of Autogon is its automated machine learning
            capabilities. The platform automates the process of building,
            testing, and deploying machine learning models, making it easy for
            businesses to quickly build models and put them into production.
            This can save businesses time and effort and allow them to focus on
            more complex modeling tasks.
          </ReactMarkdown>
        </Container>
        <Container as="aside" className="w-[200rem] bg-pink-600 h-full">
          hello
        </Container>
      </div>
    </Container>
  );
};
