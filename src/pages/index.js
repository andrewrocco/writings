import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Heading from "../components/heading/Heading";

const IndexPage = (props) => {
  const siteData = props.data.allContentfulSiteSettings.edges[0].node;

  return (
    <Layout siteData={siteData}>
      <Heading>Hold on here...</Heading>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query SiteQuery {
    allContentfulSiteSettings(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          siteTitle
        }
      }
    }
  }

`
