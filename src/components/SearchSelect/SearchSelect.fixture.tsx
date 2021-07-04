import React, { useCallback, useState } from 'react';
import SearchSelect from './SearchSelect';

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
  const [value, setValue] = useState(null);

  const handleChange = useCallback((v) => {
    setValue(v);
  }, []);

  return (
    <div className="content" style={{ width: 500 }}>
      <div>value: {value}</div>

      <SearchSelect options={options} onChange={handleChange} value={value} />
    </div>
  );
};
