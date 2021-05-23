import React, { useCallback, useState } from 'react';
import VerticalSelect from './VerticalSelect';

const options = [
  { label: 'Eng', value: 'eng' },
  { label: 'Rus', value: 'rus' },
  { label: 'Esp', value: 'esp' },
];

export default (): JSX.Element => {
  const [value, setValue] = useState('eng');

  const handleSelect = useCallback((v) => {
    setValue(v);
  }, []);

  return (
    <div className="content" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <VerticalSelect options={options} value={value} onSelect={handleSelect} buttonWidth={60} />

      <div style={{ height: 20 }} />

      <VerticalSelect options={options} value={value} onSelect={handleSelect} buttonWidth={60} direction="right" />
    </div>
  );
};
