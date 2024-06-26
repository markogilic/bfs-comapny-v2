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
        `md:text-[36px] text-center mx-auto font-bold uppercase text-[28px] ${style}`
      )}
    >
      {children}
    </h2>
  );
};

export default subHeading;
