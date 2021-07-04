import React, { useCallback, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './SearchSelect.module.scss';
import SearchSelectMenu, { Option } from './SearchSelectMenu/SearchSelectMenu';
import ClickOutside from '@/components/ClickOutside/ClickOutside';

interface Props {
  options: Option[];
  onChange: (v: string | number) => void;
  value: string | number | null;
}

const SearchSelect = ({ options, onChange, value }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSelect = useCallback(
    (val) => {
      onChange(val);
      setIsOpen(false);
    },
    [onChange],
  );

  const handleToggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const selectedOption = useMemo(() => {
    return options.find((i) => i.value === value);
  }, [value, options]);

  return (
    <ClickOutside className={styles.container} onClickOutside={handleClose}>
      <button type="button" className={styles.select} onClick={handleToggle}>
        {selectedOption ? selectedOption.label : <span>Select...</span>}
      </button>
      <CSSTransition in={isOpen} timeout={200} classNames={styles} unmountOnExit>
        <SearchSelectMenu className={styles.menu} options={options} onSelect={handleSelect} ref={menuRef} />
      </CSSTransition>
    </ClickOutside>
  );
};

export default SearchSelect;
