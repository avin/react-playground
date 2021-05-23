import React, { useCallback, useMemo, useState } from 'react';
import cn from 'clsx';
import styles from './VerticalSelect.module.scss';
import { CSSTransition } from 'react-transition-group';
import ClickOutside from '@/components/ClickOutside/ClickOutside';

interface Option {
  label: React.ReactNode;
  value: string;
}

interface Props {
  options: Option[];
  value?: string;
  onSelect: (v: string) => void;
  buttonWidth: number;
  spaceBetween?: number;
  direction?: 'left' | 'right';
}

const VerticalSelect = ({
  options,
  value,
  onSelect,
  buttonWidth,
  spaceBetween = 10,
  direction = 'left',
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const optionsCount = useMemo(() => options.length, [options]);

  const activeOption = useMemo(() => {
    return options.find((i) => i.value === value) || options[0];
  }, [options, value]);

  const optionsWithoutActive = useMemo(() => {
    return options.filter((option) => option !== activeOption);
  }, [options, activeOption]);

  const handleClickOption = useCallback(
    (e) => {
      setIsOpen((v) => !v);
      onSelect(e.currentTarget.dataset.value);
    },
    [onSelect],
  );

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  const buttonPositionName = direction === 'left' ? 'right' : 'left';

  return (
    <ClickOutside className={styles.container} onClickOutside={handleClickOutside}>
      <button
        type="button"
        className={cn(styles.optionButton, styles.active)}
        onClick={handleClickOption}
        data-value={activeOption.value}
      >
        {activeOption.label}
      </button>

      {optionsWithoutActive.map((option, idx) => (
        <CSSTransition in={isOpen} timeout={100} classNames={styles} unmountOnExit>
          <button
            type="button"
            className={cn(styles.optionButton, styles.additional)}
            key={option.value}
            data-value={option.value}
            onClick={handleClickOption}
            style={{ [buttonPositionName]: (idx + 1) * (buttonWidth + spaceBetween) }}
          >
            {option.label}
          </button>
        </CSSTransition>
      ))}

      <CSSTransition in={isOpen} timeout={100} classNames={styles} unmountOnExit>
        <div
          className={styles.background}
          style={{
            width: optionsCount * (buttonWidth + spaceBetween) - spaceBetween,
            left: direction === 'left' ? -(optionsCount - 1) * (buttonWidth + spaceBetween) : 0,
          }}
        />
      </CSSTransition>
    </ClickOutside>
  );
};

export default VerticalSelect;
