import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/button/Button';

const Home = () => {
  // const [spanAnimatekey, setKey] = useState(0);
  // console.log('111');

  // useEffect(() => {
  //   // 一种方式是在组件加载后延迟重设 key
  //   const timer = setTimeout(() => {
  //     setKey((prevKey) => prevKey + 1);
  //   }, 500); // 延迟 500 毫秒

  //   return () => clearTimeout(timer);
  // }, []);
  // // 使用 Framer Motion 的 animate 属性来定义颜色动画
  // const colorVariants = {
  //   animate: {
  //     // color: ['#88D8B0', '#FF6F69', '#FFD3B6', '#FF6F69'],
  //     color: ['#9A5DFFf', '#853CFF', '#731EFF', '#CF7EEB', '#C622FF'],
  //     transition: {
  //       duration: 5,
  //       ease: 'easeInOut',
  //       repeat: Infinity,
  //       repeatDelay: 0,
  //     },
  //   },
  // };

  return (
    <div className="mt-[-80px] h-[752px] w-full bg-[url('/assets/images/home/bg.png')] bg-cover bg-center bg-no-repeat sm:h-[1191px] sm:bg-[url('/assets/images/home/bg-1440.png')] sm:bg-[length:100%_100%]  2xl:bg-[url('/assets/images/home/bg-1920.png')]">
      <div className=" flex size-full flex-col items-center">
        <div
          className={`mt-[120px] h-[108px]  w-[207px] bg-[url('/assets/images/btn-bg-2.png')] bg-[length:100%_100%] bg-no-repeat p-0 text-center font-bold leading-[108px] text-[#D940FF] opacity-0 sm:mt-[224px] sm:opacity-100`}
        >
          {/* <motion.span
            key={spanAnimatekey}
            variants={colorVariants}
            initial="animate"
            animate="animate"
            style={{ display: 'inline' }} // 确保 span 是 inline，这对颜色动画是必要的
          > */}
          OmniMuse
          {/* </motion.span> */}
        </div>

        <div className="title-font mt-[10px] max-w-[1125px]  px-0 text-center text-[31px] leading-[48px] text-white sm:text-[60px] sm:leading-[70px]">
          A New AI Ecosystem for the Web3 Era
        </div>
        <Image
          className="my-[15px] size-[40px] sm:hidden sm:size-[72px]"
          src={'/assets/images/about/about-star.png'}
          alt="Sentry"
          width={72}
          height={72}
        />
        <div className="mb-8 max-w-[260px] text-center text-[12px] leading-[22px] text-white opacity-[0.8] sm:mb-12 sm:mt-[1.85rem] sm:max-w-[unset] sm:text-xl sm:leading-[unset]">
          Unleashing the Potential of Decentralized AI with OmniMuse
        </div>

        <a
          href="https://app.omnimuse.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button classProp="tracking-wide w-[270px] h-[125px] leading-[125px] sm:w-[449px] sm:h-[155px] sm:leading-[155px] text-[18px] sm:text-[22px] title-font">
              Launch App
            </Button>
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export { Home };
