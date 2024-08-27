import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-bold text-3xl' : 'font-bold text-xl';

  // 点击事件处理函数
  const handleLogoClick = () => {
    // 刷新页面
    window.location.reload();
  };

  return (
    <span
      className={`inline-flex items-center text-gray-900 ${fontStyle}`}
      onClick={handleLogoClick}
    >
      <Image
        className="h-[32px] w-[145px] sm:h-[38px] sm:w-[172px]"
        src="/assets/images/home/logo.png"
        alt="Sentry"
        width={172}
        height={38}
        style={{ cursor: 'pointer' }} // 添加鼠标指针样式
      />
      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
