import className from 'classnames';
import React from 'react';

import { MotionDiv } from '@/components/motion/motion-div';

type IVerticalFeatureRowProps = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',

    'flex-wrap',
    'justify-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="flex w-[1200px] justify-center">
        <div className="w-full px-6 text-center xl:-ml-7 xl:mr-7 xl:w-5/12 xl:px-12">
          <MotionDiv animate={'ZoomIn'}>{props.leftChildren}</MotionDiv>
        </div>
        <div className="mt-6 w-full p-6 xl:mt-0 xl:w-1/2">
          <MotionDiv animate={'ZoomIn'}>{props.rightChildren}</MotionDiv>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
