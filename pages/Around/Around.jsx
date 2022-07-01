import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { secondaryColor, tertiaryColor, Layout } from 'styles/variables';
import { AroundType, AroundCardList } from 'components/Around/index';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Around = () => {
  return (
    <Layout>
      <Header color={secondaryColor} bgColor={tertiaryColor} />
      <main>
        <AroundType />
        <AroundCardList />
      </main>
      <ScrollUpButton ToggledStyle={{ bottom: 75 }} />
      <Footer color={secondaryColor} bgColor={tertiaryColor} />
    </Layout>
  );
};

export default Around;
