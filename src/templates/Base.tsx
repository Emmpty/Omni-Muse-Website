import { useEffect, useRef } from 'react';

import { MotionDiv } from '@/components/motion/motion-div';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Header } from './Header';
import { Home } from './Home';
import { Introduce } from './Introduce';
import { Join } from './Join';

const Base: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const introduceRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // 新增

  // const [currentSection, setCurrentSection] = useState<string>('Home');

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    offset: number = 0,
  ) => {
    if (ref.current && containerRef.current) {
      const topPosition = ref.current.offsetTop + offset;
      containerRef.current.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    // if (window.innerWidth < 640) {
    //   return;
    // }
    // if (!containerRef.current) return;
    // const scrollPosition = containerRef.current.scrollTop;
    // if (
    //   homeRef.current &&
    //   aboutRef.current &&
    //   introduceRef.current &&
    //   joinRef.current
    // ) {
    // const homePosition = homeRef.current.offsetTop;
    // const aboutPosition = aboutRef.current.offsetTop;
    // const introducePosition = introduceRef.current.offsetTop;
    // const joinPosition = joinRef.current.offsetTop;
    // if (scrollPosition >= joinPosition - 450) {
    //   setCurrentSection('Join');
    // } else if (scrollPosition >= introducePosition - 100) {
    //   setCurrentSection('Introduce');
    // } else if (scrollPosition >= aboutPosition - 170) {
    //   setCurrentSection('About');
    // } else {
    //   setCurrentSection('Home');
    // }
    // }
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-scroll bg-[#080117] text-white antialiased"
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        introduceRef={introduceRef}
        joinRef={joinRef}
      />
      <MotionDiv animate={'ZoomIn'}>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </MotionDiv>
      <div className="introduce-bg bg-[#0F0521] bg-[url('/assets/images/introduce/Screenshot.png')] bg-top bg-no-repeat sm:bg-[length:100%_100%]">
        <div ref={introduceRef}>
          <Introduce />
        </div>
        <div ref={joinRef}>
          <Join />
        </div>
      </div>
    </div>
  );
};

export { Base };
