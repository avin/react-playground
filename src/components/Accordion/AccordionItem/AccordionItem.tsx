import React from 'react';
import styles from './AccordionItem.module.scss';
import cn from 'clsx';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import WrappedUp from '@/components/WrappedUp/WrappedUp';

interface Props {
  open?: boolean;
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AccordionItem = ({ id, title, content, onClick, open }: Props): JSX.Element => {
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

      <WrappedUp open={open} duration={200} className={styles.content}>
        <div className={styles.inner}>{content}</div>
      </WrappedUp>
    </div>
  );
};

export default AccordionItem;
