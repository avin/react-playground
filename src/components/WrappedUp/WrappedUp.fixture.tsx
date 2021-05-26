import React, { useCallback, useState } from 'react';
import WrappedUp from './WrappedUp';
import styles from './WrappedUp.module.scss';

export default (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClickToggleVisible = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <div className="content">
      <button type="button" onClick={handleClickToggleVisible}>
        ToggleOpen
      </button>

      <hr />

      <WrappedUp open={open} duration={200} className={styles.content} cssTransitionClassNames={styles}>
        <div>
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
        </div>
      </WrappedUp>
    </div>
  );
};
