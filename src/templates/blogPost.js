import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText/RichText';
import Heading from '../components/heading/Heading';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  // const siteData = data.allContentfulSiteSettings.edges[0].node;
  const post = data.contentfulBlogPost;
  
  return(
    <>
      <Heading>{post.title}</Heading>
      <RichText document={post.body} />
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
    }
  }
`;
