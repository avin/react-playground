import React, { useCallback, useState } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './AccordionItem/AccordionItem';

interface Block {
  title: React.ReactNode;
  content: React.ReactNode;
  id: string;
}

interface Props {
  blocks: Block[];
}

const Accordion = ({ blocks }: Props): JSX.Element => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleClickBlock = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { blockId } = e.currentTarget.dataset as { blockId: string };
    setOpenId((val) => {
      if (val === blockId) {
        return null;
      }
      return blockId;
    });
  }, []);

  return (
    <div className={styles.container}>
      {blocks.map(({ title, content, id }) => (
        <AccordionItem
          title={title}
          content={content}
          id={id}
          open={id === openId}
          onClick={handleClickBlock}
          key={id}
        />
      ))}
    </div>
  );
};

export default Accordion;
