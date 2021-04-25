import React from 'react';
import { graphql } from 'gatsby';
import BlogPostBody from '../components/blogPostBody/BlogPostBody';
// import { Helmet } from 'react-helmet';
// import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  // const siteData = data.allContentfulSiteSettings.edges[0].node;
  const post = data.contentfulBlogPost;
  
  return(
    <>
      <h1>{post.title}</h1>
      <BlogPostBody document={post.body} />
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
