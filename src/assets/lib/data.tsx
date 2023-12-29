import jiraicon from "../../assets/icons/jira.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import phpicon from "../../assets/icons/php.jpg";
import reacticon from "../../assets/icons/reacticon.svg";
import mysqlicon from "../../assets/icons/mysql.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import awsicon from "../../assets/icons/awsb.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import bitbucketicon from "../../assets/icons/bitbucket.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import giticon from "../../assets/icons/git.svg";

import axiosicon from "../../assets/icons/axiosicon.svg";

import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";

import profilepicture from "../img/nethmi.webp";
import caricon from "../../assets/icons/car-icon.svg";
import bootstrapicon from "../icons/bootstrap.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";

import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import awsiconwhite from "../../assets/icons/aws.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";


import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.png";
export const headerIntroData = {
  title: {
    de: "Hi, ich bin Alpay",
    en: "Hi, I'm Nethmi",
  },
  subtitle: "CSE Undergraduate from University of Moratuwa ",
  description: {
    
    en: "A highly enthusiastic young spirit who has a passion for computer science and loves to try new different technologies. Seeking an opportunity to gain more experience and become a qualified professional in the industry.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "UMiSF",
    
    description_EN:
      "The Official web application of UMISF (University of Moratuwa  International Shuttlers Fest) which will be used for player registration, draws creation, umpiring, and displaying results",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "NodeJS", icon: nodejsicon },
      {name:"MongoDB", icon: mongodbicon},
      { name: "Figma", icon: figmaicon},
      { name: "Render", icon: rendericon },
      
    ],
    image: p1,
    deploymenturl: "",
    githuburl: "https://github.com/orgs/UMiSF/repositories",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Person Verification Digital Platform",
    
    description_EN:
      "A web and mobile application; developed to maintain distributed digital ID which can be used to authenticate own-self for trusted online banking services .",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: p2,
    deploymenturl: "",
    githuburl:
      "https://github.com/orgs/PersonVerfication-Digital-Platform/repositories",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "COVID Details Handling System",
    
    description_EN:
      "A system where all the hospitals in the country can access the COVID details of any citizen. All the COVID-related details of people including vaccination, PCR and Antigen test results, COVID positives, and deaths are maintained and statistically analyzed by the system.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: "PHP", icon: phpicon},
      { name: "MYSQL", icon: mysqlicon},

     
    ],
    image: p3,
    deploymenturl: "",
    githuburl: "https://github.com/neth99-coder/hospital-system",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Web Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      // {
      //   title: "Next.js",
      //   hash: "#Next.js",
      //   icon: [nextjsicon, nextjsiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicon,
        color: "#a378fa",
      },
      // {
      //   title: "Tailwind",
      //   hash: "#Tailwind",
      //   icon: tailwindcssicon,
      //   color: "#38B2AC",
      // },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#007ACC",
      },
      // {
      //   title: "Vue.js",
      //   hash: "#Vue.js",
      //   icon: vuejsicon,
      //   color: "#4FC08D",
      // },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: [awsicon, awsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Project Management",
    skills: [
      {
        title: "Bitbucket",
        hash: "#Bitbucket",
        icon: bitbucketicon,
        color: "#007ACC",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#F24E1E",
      },
     
      {
        title: "Jira",
        hash: "#Jira",
        icon: jiraicon,
        color: "#007ACC",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  {  en: "Skills", hash: "#skills", icon: GoStack },
  {  en: "Projects", hash: "#projects", icon: GoProject },
  {  en: "About me", hash: "#about-me", icon: GoPerson },
  {  en: "Contact", hash: "#contact", icon: GoMail },
] as const;



export const sideBarRightMail = {
  link: "mailto:nethmik99@gmail.com",
  text: "contactMeViaEmail",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/nethmi-jayakody/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/neth99-coder",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:nethmik99@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    
    en: `"If you want to learn to ride a bike, you don't read a book on two-wheeled dynamics. You get on a bike and ride."`,
    author: "Sir Richard Branson",
  },
  {
    
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  
  description_EN: "A small code snippet about me",

  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
   
    en: "Contact",
  },
  description: {
    
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        
        en: "Your Name",
      },
      type: "text",
      validation: {
        
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        
        en: "Your Subject",
      },
      type: "text",
      validation: {
        
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
   
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
   
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
