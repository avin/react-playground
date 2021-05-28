/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useState } from 'react';
import cn from 'clsx';
import { ReactComponent as ChevronDownIcon } from './icons/chevron-down.svg';
import styles from './Select.module.scss';
import ClickOutside from '@/components/ClickOutside/ClickOutside';
import SelectItem from './SelectItem/SelectItem';
import { CSSTransition } from 'react-transition-group';

export interface Option {
  value: any;
  label: React.ReactNode;
}
interface Props {
  value: unknown;
  options: Option[];
  onChange: (v: any) => void;
  className?: string;
}

const Select = ({ options, value, className, onChange }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const handleSelectItem = useCallback(
    (v) => {
      onChange(v);
      setIsOpen(false);
    },
    [onChange],
  );

  const activeOption = useMemo(() => {
    return options.find((i) => i.value === value);
  }, [options, value]);

  return (
    <ClickOutside onClickOutside={handleClose} className={cn(styles.container, className)}>
      <button type="button" onClick={toggleOpen} className={cn(styles.openButton, { [styles.open]: isOpen })}>
        <div>{activeOption ? activeOption.label : <div className={styles.emptyLabel}>Select...</div>}</div>

        <ChevronDownIcon className={styles.openIcon} />
      </button>

      <CSSTransition in={isOpen} classNames={styles} timeout={100} unmountOnExit>
        <div className={styles.menu}>
          {options.map((option) => {
            return <SelectItem option={option} onSelect={handleSelectItem} active={value === option.value} />;
          })}
        </div>
      </CSSTransition>
    </ClickOutside>
  );
};

export default Select;
