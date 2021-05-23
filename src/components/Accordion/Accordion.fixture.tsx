import React from 'react';
import Accordion from './Accordion';

const blocks = [
  {
    id: 'b1',
    title: 'Title 1',
    content: (
      <div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    ),
  },
  {
    id: 'b2',
    title: 'Title 2',
    content: (
      <div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    ),
  },
  {
    id: 'b3',
    title: 'Title 3',
    content: (
      <div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    ),
  },
];

export default (): JSX.Element => {
  return (
    <div className="content">
      <Accordion blocks={blocks} />
    </div>
  );
};
