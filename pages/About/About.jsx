import React from 'react';
import { Layout, secondaryColor, tertiaryColor } from 'styles/variables';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AboutContent from 'components/About/AboutContent';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const About = () => {
  return (
    <Layout>
      <Header color={secondaryColor} bgColor={tertiaryColor} />
      <main>
        <AboutContent />
      </main>
      <ScrollUpButton ToggledStyle={{ bottom: 75 }} />
      <Footer color={secondaryColor} bgColor={tertiaryColor} />
    </Layout>
  );
};

export default About;
