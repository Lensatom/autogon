import React from 'react'
import { Container, Typography } from '../../components'
import { Header } from '../../Layouts/Header'
import { Footer } from '../../Layouts/Footer'
const LegalNotice = () => {
  return (
    <>
      <Header />
      <Container
        background
        className="bg-screen pt-44 flex-col items-start lg:px-44 lg:pb-10"
        flex
        id="legalNotice"
      >
        <Typography
          align="center"
          variant="display"
          className="mx-auto pb-16 lg:w-[80%]"
        >
          Legal Notice
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          This Legal Notice ("Notice") is issued on behalf of Autogon Inc. ("Autogon") and is addressed to the public at large.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          Autogon is a technology company that specializes in providing advanced machine learning and AI solutions. Autogon's products and services are aimed at enabling businesses and organizations to improve their decision-making capabilities, optimize their operations, and enhance their customer experiences.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          Autogon hereby gives notice that it is the owner of all intellectual property rights in and to its products and services, including but not limited to its software, algorithms, source code, and trademarks. Autogon's intellectual property is protected under various laws, including but not limited to copyright laws, trademark laws, and patent laws.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          Autogon takes the protection of its intellectual property very seriously and will take all necessary legal action against any person or entity that infringes upon its intellectual property rights. This may include, but is not limited to, pursuing civil and criminal actions for damages and seeking injunctive relief.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          Any person or entity that wishes to use Autogon's products or services, or any portion thereof, must obtain the express written permission of Autogon. Any unauthorized use of Autogon's intellectual property may result in legal action being taken against the infringing party.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          Autogon reserves the right to modify or update this Legal Notice at any time and without prior notice. By continuing to use Autogon's products or services, you acknowledge and agree to be bound by the terms of this Legal Notice.
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          DATED: 6th April 2023
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          For and on behalf of Autogon Inc.
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default LegalNotice