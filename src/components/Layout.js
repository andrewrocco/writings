import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Layout = ({ siteData, pageData, children }) => {
  const siteMeta = siteData;
  const siteTitle = siteMeta.siteTitle;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        // <link rel="canonical" href="https://mysite.com/example" />
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
