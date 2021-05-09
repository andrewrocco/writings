import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/nav/Navigation';
import { Helmet } from 'react-helmet';

const Layout = ({ seoData, pageData, children }) => {
  const seoTitle = seoData ? seoData.seoTitle : '';
  const seoDescription = seoData ? seoData.seoDescription.seoDescription: '';

  return (
    <>
      { seoData && 
        <Helmet>
          <html lang="en" />
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
        </Helmet>
      }
      <div className="container mx-auto">
      <Navigation/>
      {children}
      </div>
    </>
  )
}

export default Layout;

Layout.propTypes = {
  pageData: PropTypes.object,
  seoData: PropTypes.shape({
    seoTitle: PropTypes.string,
    seoDescription: PropTypes.object,
  }),
};
