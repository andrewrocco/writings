import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

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
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default Layout;

Layout.propTypes = {
  pageData: PropTypes.object,
  seoData: PropTypes.object,
};
