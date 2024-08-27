import Image from 'next/image';

import { MotionDiv } from '@/components/motion/motion-div';

const About = () => {
  const aboutList = [
    {
      title: 'App Trove',
      subTitle: 'App-Driven Data Aggregation',
      image: '/assets/images/about/app-trove.png',
    },
    {
      title: 'Model Trove',
      subTitle: 'Model-Empowered App Innovation',
      image: '/assets/images/about/model-trove.png',
    },
    {
      title: 'Data Trove',
      subTitle: 'Data-Driven Model Innovation',
      image: '/assets/images/about/data-trove.png',
    },
  ];
  return (
    <div className="flex flex-col items-center bg-[#0F0521] px-[24px] pt-[100px] sm:px-0  sm:pt-36">
      <MotionDiv animate={'ZoomIn'}>
        <div className="relative flex w-full justify-between sm:w-[1200px]">
          <Image
            className="absolute left-0 top-[-50px] size-[40px] sm:left-[-105px] sm:top-[-40px] sm:size-[72px]"
            src={'/assets/images/about/about-star.png'}
            alt="Sentry"
            width={72}
            height={72}
          />
          <div className="max-w-full sm:max-w-[600px]">
            <h3 className="title-font text-left text-[24px] font-semibold sm:text-[48px]">
              What is Omnimuse
            </h3>
            <Image
              className="mt-[60px] w-full sm:hidden"
              src="/assets/images/about/about.png"
              alt="Sentry"
              width={498}
              height={363}
            />
            <p className="mt-10 text-left text-base leading-[24px] text-[#ffffffc4] sm:text-lg sm:leading-[28px]">
              We envision a borderless, global AI collaboration network. Our
              goal is to democratize AI by enabling everyone to participate in
              the development, sharing, and application of AI models through a
              token-based incentive mechanism.
            </p>
            <p className="mt-8 text-base leading-[24px] text-[#ffffffc4] sm:mt-10 sm:text-lg sm:leading-[28px] lg:text-center xl:text-left">
              By promoting efficient resource sharing and collaboration, we
              strive to unleash the immense potential of AI and drive
              technological breakthroughs.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hidden h-fit w-full sm:block sm:w-[498px]"
              src="/assets/images/about/about.png"
              alt="Sentry"
              width={498}
              height={363}
            />
          </div>
        </div>
      </MotionDiv>

      <div className="... mt-[60px] w-full columns-1 sm:mt-[108px] sm:w-[1200px] sm:columns-3">
        <MotionDiv animate={'ZoomIn'}>
          {aboutList.map((item) => {
            return (
              <div
                key={item.title}
                className="mb-[50px] flex flex-row items-center sm:mb-0"
              >
                <Image
                  className="mr-4 size-[60px] sm:size-[88px]"
                  src={item.image}
                  alt="Sentry"
                  width={88}
                  height={88}
                />
                <div className="flex flex-col">
                  <h3 className="text-left text-[18px] font-semibold sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-left text-[12px] leading-7 text-[rgba(255,255,255,0.8)] sm:text-base">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </MotionDiv>
      </div>
    </div>
  );
};

export { About };
