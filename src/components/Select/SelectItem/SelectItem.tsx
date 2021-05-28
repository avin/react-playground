/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import cn from 'clsx';
import styles from './SelectItem.module.scss';
import type { Option } from '@/components/Select/Select';

interface Props {
  option: Option;
  active: boolean;
  onSelect: (v: any) => void;
}

const SelectItem = ({ option, onSelect, active }: Props): JSX.Element => {
  const handleClick = useCallback(() => {
    onSelect(option.value);
  }, [onSelect, option]);

  return (
    <button type="button" className={cn(styles.selectItem, { [styles.active]: active })} onClick={handleClick}>
      {option.label}
    </button>
  );
};

export default SelectItem;
