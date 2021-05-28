import React from 'react';
import Spinner from './Spinner';

export default (): JSX.Element => {
  return (
    <div className="flex-content">
      <Spinner />
      <Spinner size={100} radius={5} />
      <Spinner radius={20} />
    </div>
  );
};
