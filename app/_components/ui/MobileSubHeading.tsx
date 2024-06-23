import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

const subHeading = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: String;
}) => {
  return (
    <h2
      className={clsx(
        `text-[28px] text-center mx-auto font-bold uppercase ${style}`
      )}
    >
      {children}
    </h2>
  );
};

export default subHeading;
