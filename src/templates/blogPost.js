import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const BlogPostTemplate = () => {
  const post = get(this.props, 'data.contentfulBlogPost');
  // const siteTitle = get(this.props, 'data.site.siteMetadata.title');
  
  return(
    <div>Hello, World</div>
  )
};

export default BlogPostTemplate;
