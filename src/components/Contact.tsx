import React, { useRef } from "react";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import contactmeicon from "../assets/img/contact.png";

const Contact: React.FC = () => {



  
  const { ref } = useSectionInView("Contact");



  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);











  //   const codeSnippet2 = `
  // // 🚀 Initiating Quantum Email Transmission 🪐
  // const launchEmail = async () => {
  //   try {
  //     const response = await fetch('https://alpaycelik.dev/send',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //      sender,
  //      recipient,
  //      subject,
  //      message
  //     })
  //    });

  //    if (response.ok) {
  //    console.log('🌌 Transmission successful!');
  //    } else {
  //    console.error('🌠 Cosmic glitch encountered...');
  //    }
  //   } catch (error) {
  //   console.error('🌪 Quantum disturbance detected:', error);
  //   }
  // };
  // // 🚀 Ready for Liftoff? 🛸
  // launchEmail();`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1000px]:px-[55rem] mt-16 mb-10"
        id="contact"
      >
                <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="d-flex align-items-center justify-content-center vh-100">
        <img
                      src={contactmeicon}
                      alt={`contact-me`}
                      className={`img-fluid mw-50 
                      `}
                                          />
        </div>

      </section>
    </React.Fragment>
  );
};

export default Contact;
