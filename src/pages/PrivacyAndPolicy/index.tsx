import React from 'react'
import { Container, Typography } from '../../components'
import { Header } from '../../Layouts/Header'
import { Footer } from '../../Layouts/Footer'

const PrivacyAndPolicy = () => {
  return (
    <>
      <Header />
      <Container
        background
        className="bg-screen pt-32 flex-col items-start lg:px-44"
        flex
        id="privacyPolicy"
      >
        <Typography
          align="center"
          variant="display"
          className="mx-auto py-16 lg:w-[80%]"
        >
          Privacy Policy
        </Typography>
        <Typography variant="body" className="mt-8 ">
          At Autogon, we are committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and disclose information about our users.
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          Information We Collect
        </Typography>
        <Typography variant="body" className="mt-8">
          We collect information from our users when they interact with our website, use our services, or communicate with us. The information we collect may include:
        </Typography>
        <Typography variant="body" className="mt-8">
          Personal information, such as name, email address, and phone number.
          Usage information, such as IP address, browser type, and operating system.
          Information about your interests and preferences, such as the types of products and services you are interested in.
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          How We Use Information
        </Typography>
        <Typography variant="body" className="mt-8">
          We use the information we collect to provide and improve our services, personalize your experience, communicate with you, and comply with legal obligations. Specifically, we use the information to:
        </Typography>
        <Typography variant="body" className="mt-8">
          Provide and improve our services, such as by analyzing usage patterns and improving our algorithms.
          Personalize your experience, such as by showing you relevant products and services.
          Communicate with you, such as by sending you promotional emails and responding to your inquiries.
          Comply with legal obligations, such as by responding to subpoenas and other legal requests.
          Information We Share
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          We may share your information with third parties in the following circumstances:
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          With your consent.
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          With service providers who perform services on our behalf, such as hosting and data analytics.
          With our business partners, such as when you express interest in their products or services.
          As required by law, such as in response to a subpoena or other legal request.
          Your Choices
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          You can control your personal information in the following ways:
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          You can opt-out of receiving promotional emails by following the instructions in the email.
          You can modify your personal information by contacting us at privacy@autogon.com.
          You can request that we delete your personal information by contacting us at privacy@autogon.com.
          Security
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure.
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          Changes to this Privacy Policy
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website.
        </Typography>
        <Typography
          variant="body"
          className="font-semibold mt-8"
        >
          Contact Us
        </Typography>
        <Typography
          variant="body"
          className="mt-8"
        >
          If you have any questions about this Privacy Policy, please contact us at privacy@autogon.com.
        </Typography>
      </Container>
      <Container
        background
        className="bg-screen pt-28 flex-col items-start lg:px-44 lg:pb-10"
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

export default PrivacyAndPolicy