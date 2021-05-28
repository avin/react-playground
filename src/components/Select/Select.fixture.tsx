import React, { useCallback, useState } from 'react';
import Select from './Select';

const options = [
  { value: 'v1', label: 'Label1' },
  { value: 'v2', label: 'Label2' },
  { value: 'v3', label: 'Label3' },
  { value: 'v4', label: 'Label4' },
];

export default (): JSX.Element => {
  const [value, setValue] = useState<string>();

  const handleReset = useCallback(() => setValue(undefined), []);

  return (
    <div className="content">
      <div>
        <button type="button" onClick={handleReset}>
          reset
        </button>{' '}
        value: {value}{' '}
      </div>

      <hr />
      <Select options={options} onChange={setValue} value={value} />
    </div>
  );
};
