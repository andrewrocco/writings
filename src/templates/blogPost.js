import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  const siteData = data.allContentfulSiteSettings.edges[0].node;
  // const post = get(this.props, 'data.contentfulBlogPost');
  // const siteTitle = get(this.props, 'data.site.siteMetadata.title');
  
  return(
    <Layout siteData={siteData}>Hello, World</Layout>
  )
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulSiteSettings {
      edges {
        node {
          siteTitle
          seoDescription {
            seoDescription
          }
        }
      }
    }
  }
`;
