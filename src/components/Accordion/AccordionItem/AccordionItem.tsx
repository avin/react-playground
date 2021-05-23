import React, { useEffect, useRef } from 'react';
import styles from './AccordionItem.module.scss';
import cn from 'clsx';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

interface Props {
  open?: boolean;
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AccordionItem = ({ id, title, content, onClick, open }: Props): JSX.Element => {
  const measureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const changeHeightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (changeHeightTimerRef.current) {
      clearTimeout(changeHeightTimerRef.current);
    }

    if (contentRef.current && measureRef.current) {
      if (open) {
        contentRef.current.style.height = `${measureRef.current.clientHeight}px`;
        changeHeightTimerRef.current = setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.height = 'auto';
          }
        }, 200); // 200 is animation duration
      } else {
        contentRef.current.style.height = `${measureRef.current.clientHeight}px`;
        // wait change in DOM tree
        void contentRef.current.offsetWidth;
        contentRef.current.style.height = `0px`;
      }
    }
  }, [open]);

  return (
    <div className={cn(styles.container, 'accordion-item-container', { [styles.open]: open })}>
      <button
        className={styles.head}
        type="button"
        onClick={onClick}
        data-block-id={id}
        data-state={open ? 'open' : 'closed'}
      >
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.control}>
          <PlusIcon className={styles.controlIcon} />
        </div>
      </button>

      <div className={styles.content} ref={contentRef}>
        <div ref={measureRef}>
          <div className={styles.inner}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
