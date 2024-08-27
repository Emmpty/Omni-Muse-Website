import Image from 'next/image';
import { useState } from 'react';

import Modal from '@/components/modal/Modal';
import { MotionDiv } from '@/components/motion/motion-div';

const Join = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: any) => {
    if (!item.href) {
      setIsModalOpen(true);
    }
  };
  const handleCloseModal = () => setIsModalOpen(false);
  const iconList = [
    {
      icon: '/assets/images/footer/twtter 2.png',
      href: 'https://twitter.com/OmniMuseAI',
    },
    {
      icon: '/assets/images/footer/discore 2.png',
      href: 'https://discord.gg/E828avjFym',
    },
    {
      icon: '/assets/images/footer/tg 1.png',
    },
    {
      icon: '/assets/images/footer/youtube.png',
    },
    {
      icon: '/assets/images/footer/ins.png',
    },
  ];
  return (
    <MotionDiv animate={'ZoomIn'}>
      <div className=" flex h-[562px] justify-center bg-[url('/assets/images/join/bg.png')] bg-[length:100%_100%] bg-scroll  bg-no-repeat sm:bg-[url('/assets/images/join/bg-1440.png')]">
        <div className="flex w-full flex-col px-[24px] pt-16 sm:w-[1200px] sm:items-center sm:px-0">
          <h3 className="title-font mt-[50px] text-left  text-[24px] sm:text-center sm:text-[48px]">
            Join the community
          </h3>
          <p className="mt-[32px] w-[288px] text-left text-[13px] leading-[28px] text-[#fff] sm:w-[75%] sm:text-center sm:text-[18px]">
            Become a part of the OmniMuse ecosystem and contribute to the
            democratization of AI. Contact us to learn more about the
            opportunities available.
          </p>
          <div className="mt-[50px] flex justify-center rounded-[44px] bg-[rgba(255,255,255,0.10)] px-[24px] py-[12px] backdrop-blur-[20px] sm:px-[36px]">
            <div className="flex min-w-[270px] flex-wrap justify-between sm:min-w-[312px]">
              {iconList.map((item) => {
                return (
                  <MotionDiv
                    key={item.icon}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOpenModal(item)}
                    >
                      <Image
                        className="size-[24px] sm:size-[32px]"
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </a>
                  </MotionDiv>
                );
              })}
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="mt-8 flex size-full h-[100px] w-full  items-center justify-center bg-[url('/assets/images/home/coming_bg.png')] bg-[length:100%_100%] bg-no-repeat text-xl font-bold">
            <p>Coming soon</p>
          </div>
        </Modal>
      </div>
    </MotionDiv>
  );
};
export { Join };
