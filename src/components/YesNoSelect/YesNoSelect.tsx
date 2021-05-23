import React, { useCallback, useRef, useState } from 'react';
import cn from 'clsx';
import styles from './YesNoSelect.module.scss';

interface Props {
  yes: boolean;
  onChange: (val: boolean) => void;
}

const YesNoSelect = ({ yes, onChange }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const yesButtonRef = useRef<HTMLButtonElement | null>(null);
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickYes = useCallback(() => {
    onChange(true);
    setIsOpen((v) => !v);
  }, [onChange]);

  const handleClickNo = useCallback(() => {
    onChange(false);
    setIsOpen((v) => !v);
  }, [onChange]);

  return (
    <div className={cn(styles.container, { [styles.open]: isOpen })}>
      <button
        type="button"
        className={cn(styles.button, { [styles.active]: yes })}
        onClick={handleClickYes}
        tabIndex={!isOpen && !yes ? -1 : undefined}
        ref={yesButtonRef}
      >
        Yes
      </button>
      <button
        type="button"
        className={cn(styles.button, { [styles.active]: !yes })}
        onClick={handleClickNo}
        tabIndex={!isOpen && yes ? -1 : undefined}
        ref={noButtonRef}
      >
        No
      </button>
    </div>
  );
};

export default YesNoSelect;
