import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

interface Props extends React.PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  // is open state
  open?: boolean;
  // animation duration
  duration?: number;
  // container className
  className?: string;
  // classNames object for CSSTransition component
  cssTransitionClassNames?: CSSTransitionClassNames;
}

const WrappedUp = ({
  children,
  open = false,
  duration = 0,
  style,
  cssTransitionClassNames,
  ...props
}: Props): JSX.Element | null => {
  const measureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const changeHeightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = open ? 'auto' : '0px';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        }, duration);
      } else {
        contentRef.current.style.height = `${measureRef.current.clientHeight}px`;
        void contentRef.current.offsetWidth;
        contentRef.current.style.height = `0px`;
      }
    }
  }, [open, duration]);

  return (
    <CSSTransition in={open} timeout={duration} unmountOnExit classNames={cssTransitionClassNames}>
      <div ref={contentRef} style={{ ...style, height: 0, overflow: 'hidden' }} {...props}>
        <div ref={measureRef}>{children}</div>
      </div>
    </CSSTransition>
  );
};

export default WrappedUp;
