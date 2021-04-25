import React from 'react';
import { graphql } from 'gatsby';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  // const siteData = data.allContentfulSiteSettings.edges[0].node;
  const post = data.contentfulBlogPost;
  
  return(
    <div>{post.title}</div>
  )
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`;
