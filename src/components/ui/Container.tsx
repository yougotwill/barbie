import React, { ReactNode } from 'react';

import UI from '@/constants/ui';
import { cn } from '@/utils';

export const containerStyles = {
  paddingLeft: `${UI.CONTAINER_PADDING_X}vw`,
  paddingRight: `${UI.CONTAINER_PADDING_X}vw`,
  maxWidth: `${UI.CONTAINER_MAX_WIDTH}px`,
};

type Props = {
  children: ReactNode;
  fullWidth?: boolean;
  classes?: string;
  id?: string;
};

export default function Container(props: Props) {
  const { children, fullWidth = false, classes, id } = props;

  return (
    <section className={cn('w-full')}>
      <div
        id={id}
        className={cn('mx-auto my-0 w-full', classes)}
        style={
          !fullWidth
            ? {
                maxWidth: containerStyles.maxWidth,
                paddingLeft: containerStyles.paddingLeft,
                paddingRight: containerStyles.paddingRight,
              }
            : undefined
        }
      >
        {children}
      </div>
    </section>
  );
}
