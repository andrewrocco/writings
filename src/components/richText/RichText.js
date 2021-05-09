import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Paragraph from '../paragraph/Paragraph';

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
};

const RichText = ({ document }) => {
  return <div>{document && renderRichText(document, options)}</div>
};

export default RichText;
