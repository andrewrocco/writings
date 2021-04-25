import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/Layout';
import Heading from '../components/heading/Heading';

const IndexPage = (props) => {
  const siteData = props.data.allContentfulSiteSettings.edges[0].node;
  const posts = get(this, 'props.data.allContentfulBlogPost.edges')

  return (
    <Layout siteData={siteData}>
      <Heading>Hold on here...</Heading>
      <div className="article-list">
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              hello
            </li>
          )
        })}
      </div>
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
          seoDescription {
            seoDescription
          }
        }
      }
    }
  }

`
