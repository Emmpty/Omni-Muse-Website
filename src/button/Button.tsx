import classNames from 'classnames';
import type { ReactNode } from 'react';

interface IButtonProps {
  xl?: boolean;
  classProp?: string; // classProp 可以是字符串或对象
  children: ReactNode;
}

const Button = (props: IButtonProps) => {
  // 使用 classNames 处理所有类名
  const btnClass = classNames(
    "bg-[url('/assets/images/btn-bg.png')] bg-[length:100%_100%] bg-no-repeat", // 基础按钮类
    props.classProp, // 直接从 props 添加额外的类（可以是字符串或对象）
  );

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
