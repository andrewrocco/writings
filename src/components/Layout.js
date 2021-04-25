import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Layout = ({ siteData, pageData, children }) => {
  const siteTitle = siteData.siteTitle;
  const seoDescription = siteData.seoDescription.seoDescription;
  
  console.log(siteData);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default Layout;

Layout.propTypes = {
  pageData: PropTypes.object,
  siteData: PropTypes.object.isRequired,
};
