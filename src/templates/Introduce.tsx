import Image from 'next/image';
import { useRef, useState } from 'react';

import { MotionDiv } from '@/components/motion/motion-div';

const Introduce = () => {
  const [hoverState, setHoverState] = useState<{ [key: string]: boolean }>({});
  const [delayedHoverState, setDelayedHoverState] = useState<{
    [key: string]: boolean;
  }>({});
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const resetAllToFalse = (obj: { [key: string]: boolean }) => {
    const newState = Object.keys(obj).reduce(
      (acc, key) => {
        acc[key] = false;
        return acc;
      },
      {} as { [key: string]: boolean },
    );
    return newState;
  };

  const handleHover = (itemId: string, isHovered: boolean) => {
    if (timeoutRefs.current[itemId]) {
      clearTimeout(timeoutRefs.current[itemId]);
    }

    setHoverState((prevState) => ({
      ...prevState,
      [itemId]: isHovered,
    }));

    if (isHovered) {
      timeoutRefs.current[itemId] = setTimeout(() => {
        setDelayedHoverState((prev) => ({ ...prev, [itemId]: isHovered }));
      }, 200);
    } else {
      setHoverState((prevState) => resetAllToFalse(prevState));
      setDelayedHoverState((prev) => resetAllToFalse(prev));
    }
  };

  const itemList = [
    {
      title: 'Smart Contract Templates',
      isHovered: false,
      subTitle: `Accelerate your AI application development with OmniMuse's customizable smart contract templates and frameworks, designed specifically for model minting, trading, and data sharing. The platform also integrates popular blockchain development tools, simplifying your dApp creation process.`,
      image: '/assets/images/introduce/item-bg1.png',
    },
    {
      title: 'Decentralized Storage',
      isHovered: false,
      subTitle:
        'Benefit from the permanence and immutability of AI models and data assets, guaranteed by IPFS and other decentralized storage solutions. OmniMuse prioritizes data privacy while facilitating secure data sharing and transactions.',
      image: '/assets/images/introduce/item-bg2.png',
    },
    {
      title: 'Privacy and Security',
      isHovered: false,
      subTitle: `Trust OmniMuse's cutting-edge privacy and security features, supported by advanced cryptographic tools such as homomorphic encryption, secure multi-party computation, and verifiable computation. The integration of trusted execution environments further enhances the platform's security.`,
      image: '/assets/images/introduce/item-bg3.png',
    },
  ];

  const phoineItemList = [
    {
      title: 'Smart Contract Templates',
      isHovered: false,
      subTitle: `Accelerate your AI application development with OmniMuse's customizable smart contract templates and frameworks, designed specifically for model minting, trading, and data sharing. The platform also integrates popular blockchain development tools, simplifying your dApp creation process.`,
      image: '/assets/images/introduce/item-phone-bg1.png',
    },
    {
      title: 'Decentralized Storage',
      isHovered: false,
      subTitle:
        'Benefit from the permanence and immutability of AI models and data assets, guaranteed by IPFS and other decentralized storage solutions. OmniMuse prioritizes data privacy while facilitating secure data sharing and transactions.',
      image: '/assets/images/introduce/item-phone-bg2.png',
    },
    {
      title: 'Privacy and Security',
      isHovered: false,
      subTitle: `Trust OmniMuse's cutting-edge privacy and security features, supported by advanced cryptographic tools such as homomorphic encryption, secure multi-party computation, and verifiable computation. The integration of trusted execution environments further enhances the platform's security.`,
      image: '/assets/images/introduce/item-phone-bg3.png',
    },
  ];

  return (
    <>
      <div className=" flex justify-center px-[24px] pt-[80px] sm:px-0  sm:pt-[140px]">
        <div className="flex w-full flex-col sm:w-[1200px] sm:items-center">
          <Image
            className="size-[40px] sm:left-[-105px] sm:top-[-40px] sm:size-[72px]"
            src={'/assets/images/about/about-star.png'}
            alt="Sentry"
            width={72}
            height={72}
          />
          <h3 className="title-font mb-[60px] text-left text-[24px] font-semibold sm:mb-[68px] sm:text-center sm:text-[48px]">
            Introduce
          </h3>
          <MotionDiv animate={'ZoomIn'}>
            <div className="relative flex h-[680px] w-full flex-col justify-end overflow-hidden bg-[url('/assets/images/introduce/bg.png')] bg-[length:100%_100%] bg-no-repeat p-7 sm:h-[410px] sm:bg-[url('/assets/images/introduce/bg-1440.png')]">
              <div className="h-[34px] text-left text-[20px] font-semibold sm:text-[26px] sm:leading-[34px]">
                EMC Infrastructure
              </div>
              <div className="mt-[12px] text-left text-[12px] leading-[24px] opacity-[0.6] sm:mt-[20px] sm:text-[17px] sm:leading-7">
                {`Leverage the powerful capabilities of OmniMuse's decentralized AI computing network, which seamlessly integrates global idle computing resources to provide a highly scalable, cost-effective, and easily accessible pool of heterogeneous computing resources.`}
              </div>
            </div>
            <div className="mb-[140px] mt-[45px] hidden w-full columns-1 sm:mt-[70px] sm:block sm:w-[1200px] sm:columns-3">
              {itemList.map((item) => (
                <div
                  className="relative flex h-[570px] w-[368px] flex-row items-center overflow-y-hidden bg-[length:100%_100%] bg-no-repeat sm:mb-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                  key={item.title}
                  onMouseEnter={() => handleHover(item.title, true)}
                  onMouseLeave={() => handleHover(item.title, false)}
                >
                  <div
                    className={`transition-height absolute size-full  bg-[url('/assets/images/introduce/item-hover-bg.png')] bg-bottom bg-no-repeat duration-300 ${
                      hoverState[item.title]
                        ? 'bottom-0'
                        : 'bottom-[-400px] pt-[30px]'
                    }`}
                  >
                    <div
                      className={`flex size-full flex-col items-center  ${
                        hoverState[item.title]
                          ? 'justify-center '
                          : 'justify-start '
                      }`}
                    >
                      <h3 className="text-center text-[18px] font-bold sm:text-[24px]">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-[20px] px-[24px] text-center text-[12px] leading-7 text-[rgba(255,255,255,0.8)] sm:text-base    ${
                          hoverState[item.title]
                            ? 'line-clamp-none'
                            : 'line-clamp-2'
                        }`}
                      >
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
      <div className="hide-horizontal-scrollbar mb-[140px] mt-[45px] flex w-auto flex-nowrap overflow-x-auto px-[24px] sm:hidden">
        {phoineItemList.map((item) => (
          <div
            className="relative mr-[16px] flex w-[307px] shrink-0 flex-col items-center"
            key={item.title}
          >
            <Image src={item.image} alt="Sentry" width={307} height={213} />
            <div className="flex size-full flex-col bg-gradient-to-r from-[rgba(217,64,255,0.1)] to-[rgba(86,58,255,0.1)] px-[18px] py-[24px]">
              <h3 className="font-semiBold text-left text-[18px]">
                {item.title}
              </h3>
              <p
                className={`mt-[12px] text-left text-[12px] leading-[24px] text-[rgba(255,255,255,0.8)] ${
                  delayedHoverState[item.title]
                    ? 'line-clamp-none'
                    : 'line-clamp-2'
                }`}
              >
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
        <style jsx>
          {`
            .hide-horizontal-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }

            .hide-horizontal-scrollbar::-webkit-scrollbar {
              /* Chrome, Safari, Opera */
              display: none;
            }
          `}
        </style>
      </div>
    </>
  );
};

export { Introduce };
