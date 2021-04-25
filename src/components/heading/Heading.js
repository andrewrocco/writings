import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as styles from './Heading.module.css';

const Heading = ({children, level}) => {
  const classes = classnames([styles.heading, 'font-bold']);
  const HeadingTag = `h${level}`;
  
  return(
    <HeadingTag className={classes}>{children}</HeadingTag>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};

Heading.defaultProps = {
  level: '2',
};

export default Heading;

