import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { secondaryColor, tertiaryColor, Layout } from 'styles/variables';
import FavoritesList from 'components/Favorites/FavoritesList';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Likes = () => {
  return (
    <Layout>
      <Header color={secondaryColor} bgColor={tertiaryColor} />
      <main>
        <FavoritesList />
      </main>
      <ScrollUpButton ToggledStyle={{ bottom: 75 }} />
      <Footer color={secondaryColor} bgColor={tertiaryColor} />
    </Layout>
  );
};

export default Likes;
