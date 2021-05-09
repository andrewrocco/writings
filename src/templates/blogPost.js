import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText/RichText';
import Heading from '../components/heading/Heading';
import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;

  const blogPostSEO = {
    seoTitle: post.title,
    seoDescription: post.seoDescription,
  };
  
  return(
    <Layout seoData={blogPostSEO}>
      <Heading>{post.title}</Heading>
      <RichText document={post.body} />
    </Layout>
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
      seoDescription {
        seoDescription
      }
    }
  }
`;
