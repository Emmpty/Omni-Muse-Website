import Image from 'next/image';
import { useState } from 'react';

import Modal from '@/components/modal/Modal';

import { CenteredFooter } from '../footer/CenteredFooter';
import { Logo } from './Logo';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
      {/* <div className="mt-8 text-center text-sm">
      <FooterCopyright />
    </div> */}
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <a
              href="https://twitter.com/OmniMuseAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/footer/twtter 2.png"
                alt=""
                width={30}
                height={30}
              />
            </a>

            <a
              href="https://discord.gg/E828avjFym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/footer/discore 2.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a>
              <Image
                onClick={handleOpenModal}
                src="/assets/images/footer/tg 1.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a>
              <Image
                onClick={handleOpenModal}
                src="/assets/images/footer/youtube.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a>
              <Image
                onClick={handleOpenModal}
                src="/assets/images/footer/ins.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
          </>
        }
      >
        {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Docs</Link>
        </li>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li> */}
      </CenteredFooter>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="mt-8 flex size-full h-[100px] w-full  items-center justify-center bg-[url('/assets/images/home/coming_bg.png')] bg-[length:100%_100%] bg-no-repeat text-xl font-bold">
          <p>Coming soon</p>
        </div>
      </Modal>
    </div>
  );
};

export { Footer };
