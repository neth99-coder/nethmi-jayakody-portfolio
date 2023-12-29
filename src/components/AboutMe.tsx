import React, { useRef } from "react";
import me from "../assets/img/me.webp";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import bd1 from '../assets/img/bd1.jpg';
import bd2 from '../assets/img/bd2.jpg';
import bd3 from '../assets/img/bd3.jpeg';
import hardwareicon from "../assets/icons/hardware-icon.svg";

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("About me");

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 10000)}s`;
    }
  };
  const paragraphs = [bd1,bd3,bd2];
  const paragraph =     {
    title: "The Circuits of My Heart",
    description:
      "A final-year Computer Science & Engineering student at the University of Moratuwa passionate about programming, web development, and keen on exploring Web3 and blockchain. Proficient in Python, Java, and various web technologies like cloud computing, with an interest in Computer Vision. Professional experience includes roles at WealthOS. Outside tech, I thrive on sports, shaping my leadership and teamwork skills, believing that knowledge and experience pave the way to success.",
    icon: hardwareicon,
  }
  return (
    <React.Fragment>
      <section className="about-me relative mt-16 " id="about-me" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {aboutMeData.title_EN}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {aboutMeData.description_EN}
            </h2>
          </motion.div>
        </div>
        <div className="bg-[--darkblue] text-[--white] row justify-center items-center gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left cursor-grab mb-6 w-[60vw] min-[1921px]:px-96 ">
    

          <article className="col-lg-12 col-md-9 col-ms-9">
            <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center mb-12">
                  <div>
                    <img
                      src={paragraph.icon}
                      alt={paragraph.icon}
                      className="w-24 "
                    />
                  </div>
                  <div>
                    <h2>{paragraph.title}</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-12 max-lg:flex-col">
                  <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                    <p className="text-white">
                      <span className="text-orange">&lt;</span>h3
                      <span className="text-orange">/&gt;</span>
                    </p>
                    <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                      <div></div>
                      <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                      <div></div>
                    </div>
                    <p className="text-white">
                      <span className="text-orange">&lt;</span>h3
                      <span className="text-orange">/&gt;</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-2xl">
                      {paragraph.description}
                    </p>
                  </div>
                </div>
          </article>
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2 col-lg-12 col-md-3 col-ms-3"
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide
                className="duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                key={index}
              >
                {/* <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                  <div>
                    <img
                      src={paragraph.icon}
                      alt={paragraph.icon}
                      className="w-24"
                    />
                  </div>
                  <div>
                    <h2>{paragraph.title}</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-10 max-lg:flex-col">
                  <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                    <p className="text-white">
                      <span className="text-orange">&lt;</span>h3
                      <span className="text-orange">/&gt;</span>
                    </p>
                    <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                      <div></div>
                      <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                      <div></div>
                    </div>
                    <p className="text-white">
                      <span className="text-orange">&lt;</span>h3
                      <span className="text-orange">/&gt;</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-4xl">
                      {paragraph.description}
                    </p>
                  </div>
                </div> */}
                      <img
        src={paragraph}
        alt={"image"+ index}
               
      />
              </SwiperSlide>
            ))}
            <div
              className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
