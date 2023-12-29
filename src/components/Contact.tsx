import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import contactmeicon from "../assets/img/contact.png";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");

  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    console.log(error);

    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const response = await axios.post(apiBaseUrl, data);
      console.log(response);
      
        toast.success(toastMessages.successEmailSent.en);
      
    } catch (error) {
      console.log(error);
      
        toast.error(toastMessages.failedEmailSent.en);
      
      setError("An Error occured, try again later");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
  const contact = {
    phone: '+94705246536',
    location: 'Gampaha, Sri Lanka',
    email: 'nethmi.19@cse.mrt.ac.lk',
    github: 'github.com/neth99-coder',
    linkedin: 'linkedin.com/in/nethmi-jayakody',
  };
  
  function Contact() {
    return (
      <div className="contact-info">
        <h2>Connect &rarr;</h2>
        <a href={\`tel:\${contact.phone}\`}>{contact.phone}</a>
        <a href={\`mailto:\${contact.email}\`}>{contact.email}</a>
        <a href={contact.github}>GitHub</a>
        <a href={contact.linkedin}>LinkedIn</a>
      </div>
    );
  }
  
  export default Contact;
  
\``;

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
