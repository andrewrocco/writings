import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Heading from "../components/heading/Heading";

const IndexPage = (props) => {
  const siteTitle = props.data.allContentfulSiteSettings.edges[0].node.siteTitle;

  return (
    <Layout>
      <Heading>{siteTitle}</Heading>
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
