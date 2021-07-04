import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cn from 'clsx';
import styles from './SearchSelectMenu.module.scss';

export interface Option {
  label: React.ReactNode;
  value: string | number;
  searchString: string;
}

interface Props {
  options: Option[];
  onSelect: (v: string | number) => void;
  className?: string;
}

const SearchSelectMenu = ({ className, options, onSelect }: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onChangeSearchValue = useCallback((e) => {
    setSearchValue(e.currentTarget.value);
  }, []);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return option.searchString.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className={cn(styles.menu, className)}>
      <input type="text" onChange={onChangeSearchValue} className={styles.searchInput} ref={searchInputRef} />
      {filteredOptions.map(({ label, value }) => {
        const handleSelect = () => {
          onSelect(value);
        };
        return (
          <button type="button" key={value} className={styles.option} onClick={handleSelect}>
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SearchSelectMenu;
