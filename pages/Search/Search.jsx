import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout, secondaryColor, tertiaryColor } from 'styles/variables';
import SearchContent from 'components/Search/SearchContent';

const Search = () => {
  return (
    <Layout>
      <Header color={secondaryColor} bgColor={tertiaryColor} isSearching />
      <main>
        <SearchContent />
      </main>
      <Footer color={secondaryColor} bgColor={tertiaryColor} />
    </Layout>
  );
};

export default Search;