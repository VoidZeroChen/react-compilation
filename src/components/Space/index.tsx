import clsx from 'clsx';
import React from 'react';

import type { SpaceProps } from './type';

export default function Space(props: SpaceProps) {
  const {
    className,
    children,
    gapX = 0,
    gapY = 0,
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const cn = clsx(
    'flex',
    {
      'flex-col': direction === 'vertical',
      'flex-wrap': wrap,
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-baseline': align === 'baseline',
      [`gap-x-[${gapX}px]`]: typeof gapX === 'number',
      [`gap-y-[${gapY}px]`]: typeof gapY === 'number',
    },
    className,
  );

  const childNodes = React.Children.toArray(props.children);
  const nodes = childNodes.map((child, index) => {
    const key = React.isValidElement(child) ? child.key : index;
    return <div key={key}>{child}</div>;
  });

  return (
    <div className={cn} {...otherProps}>
      {nodes}
    </div>
  );
}
