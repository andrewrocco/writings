import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Layout from '../components/Layout';

const BlogPostTemplate = () => {
  const post = get(this.props, 'data.contentfulBlogPost');
  // const siteTitle = get(this.props, 'data.site.siteMetadata.title');
  
  return(
    <Layout>Hello, World</Layout>
  )
};

export default BlogPostTemplate;
