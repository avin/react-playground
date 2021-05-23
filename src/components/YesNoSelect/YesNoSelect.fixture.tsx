import React, { useCallback, useState } from 'react';
import YesNoSelect from './YesNoSelect';

export default (): JSX.Element => {
  const [isYes, setIsYes] = useState(false);

  const handleChange = useCallback((val) => {
    setIsYes(val);
  }, []);

  return (
    <div className="content" style={{ backgroundColor: '#ddd' }}>
      <YesNoSelect yes={isYes} onChange={handleChange} />
    </div>
  );
};
