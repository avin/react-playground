import React from 'react';
import SearchSelectMenu from './SearchSelectMenu';

const options = [
  {
    label: <span>Label1</span>,
    value: 'label1',
    searchString: 'Label1',
  },
  {
    label: <span>Label2</span>,
    value: 'label2',
    searchString: 'Label2',
  },
  {
    label: <span>Label3</span>,
    value: 'label3',
    searchString: 'Label3</',
  },
];

export default (): JSX.Element => {
  return (
    <div className="content">
      <SearchSelectMenu options={options} onSelect={(v) => console.info(v)} />
    </div>
  );
};
