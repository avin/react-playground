import React, { useMemo } from 'react';
import cn from 'clsx';
import styles from './styles.module.scss';

const PATH_LENGTH = 280;
const MIN_SIZE = 10;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;

interface Props {
  size?: number;
  headColor?: string;
  trackColor?: string;
  className?: string;

  radius?: number;
}

const Spinner = ({
  size = 50,
  headColor = '#000',
  trackColor = '#ddd',
  className,

  radius: R = 45,
}: Props): JSX.Element => {
  const spinnerTrack = useMemo(
    () => `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${R * 2} a ${R},${R} 0 1 1 0,-${R * 2}`,
    [R],
  );

  const normalizedSize = useMemo(() => Math.max(MIN_SIZE, size), [size]);

  const realStrokeWidth = useMemo(
    () => Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * 100) / normalizedSize),
    [normalizedSize],
  );
  const strokeOffset = PATH_LENGTH - PATH_LENGTH * 0.25;

  const viewBox = useMemo(() => {
    const radius = R + realStrokeWidth / 2;
    const viewBoxX = (50 - radius).toFixed(2);
    const viewBoxWidth = (radius * 2).toFixed(2);

    return `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
  }, [R, realStrokeWidth]);

  return (
    <div className={cn(styles.spinner, className)}>
      <div className={styles.spinnerAnimation}>
        <svg width={normalizedSize} height={normalizedSize} strokeWidth={realStrokeWidth.toFixed(2)} viewBox={viewBox}>
          <path className={styles.spinnerTrack} d={spinnerTrack} stroke={trackColor} />
          <path
            className={styles.spinnerHead}
            d={spinnerTrack}
            pathLength={PATH_LENGTH}
            strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
            strokeDashoffset={strokeOffset}
            stroke={headColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
