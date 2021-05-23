import React, { useCallback, useState } from 'react';
import ClickOutside from './ClickOutside';

export default (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleClickOutside = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div className="content" style={{ display: 'flex' }}>
      <ClickOutside
        onClick={handleClick}
        onClickOutside={handleClickOutside}
        style={{ backgroundColor: isActive ? '#0f0' : '#f00', width: 150, height: 200 }}
      >
        ClickOutside here
      </ClickOutside>

      <div style={{ backgroundColor: '#ff0', width: 150, height: 200 }}>other area</div>
    </div>
  );
};
