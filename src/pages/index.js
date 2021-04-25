import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Heading from '../components/heading/Heading';

const IndexPage = (props) => {
  const siteData = props.data.allContentfulSiteSettings.edges[0].node;
  const posts = props.data.allContentfulBlogPost.edges;

  return (
    <Layout siteData={siteData}>
      <Heading>Hold on here...</Heading>
      <div className="article-list">
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <Link to={`blog/${node.slug}`}>{node.title}</Link>
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }

`
