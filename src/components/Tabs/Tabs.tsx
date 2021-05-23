import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import styles from './Tabs.module.scss';

interface Item {
  value: string;
  label: string;
}

const Tabs: React.FC<{
  items: Item[];
  onChange: (v: string) => void;
  value: string;
  itemClassName?: string;
  activeItemClassName?: string;
}> = ({ items, onChange, value, activeItemClassName = 'active', itemClassName }) => {
  const indicatorWrapperRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorWrapperStyle, setIndicatorWrapperStyle] = useState({});

  const setIndicatorPosition = useCallback(() => {
    const activeButton = containerRef.current?.querySelector<HTMLElement>('.active');
    let newIndicatorWrapperStyle: React.CSSProperties = { display: 'none' };
    if (activeButton !== null && activeButton !== undefined) {
      const { clientHeight, clientWidth, offsetLeft, offsetTop } = activeButton;
      newIndicatorWrapperStyle = {
        height: clientHeight,
        transform: `translateX(${Math.floor(offsetLeft)}px) translateY(${Math.floor(offsetTop)}px)`,
        width: clientWidth,
      };
    }
    setIndicatorWrapperStyle(newIndicatorWrapperStyle);
  }, []);

  const handleClickItem = useCallback(
    (e) => {
      onChange(e.currentTarget.dataset.value);
    },
    [onChange],
  );

  const [isDisabledAnimation, setIsDisabledAnimation] = useState(true);

  useEffect(() => {
    setIndicatorPosition();

    const timerId = setTimeout(() => {
      setIsDisabledAnimation(false);
    }, 10);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={cn(styles.indicatorWrapper, { [styles.noAnimation]: isDisabledAnimation })}
        ref={indicatorWrapperRef}
        style={indicatorWrapperStyle}
      >
        <div className={styles.indicator} />
      </div>

      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={handleClickItem}
          data-value={item.value}
          className={cn(styles.item, itemClassName, {
            active: item.value === value,
            [activeItemClassName]: item.value === value,
          })}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
