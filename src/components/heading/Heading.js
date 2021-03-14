import React from "react";
import classnames from 'classnames';
import * as styles from "./Heading.module.css";

const classes = classnames([styles.heading, 'text-gray-50']);

const Heading = ({children}) => <h1 className={classes}>{children}</h1>;

export default Heading;
