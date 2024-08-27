import type { ReactNode } from 'react';

import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div
    className=" mt-[100px] flex justify-center border-t-[1px] border-solid  py-8 text-center"
    style={{
      borderImage: 'linear-gradient(to right, #9A5DFF, #7760FF) 1 / 1 stretch',
    }}
  >
    <div className="flex w-[1200px] items-center justify-between ">
      {props.logo}
      <nav>
        <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      <div className=" flex justify-center">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
