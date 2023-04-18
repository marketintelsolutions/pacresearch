import { SiConsul, SiGoogleanalytics, SiHandshake } from "react-icons/si";
import {
  GiArchiveResearch,
  GiMineWagon,
  GiRollingEnergy,
} from "react-icons/gi";
import { DiGoogleAnalytics } from "react-icons/di";
import { VscLightbulbAutofix } from "react-icons/vsc";
import {
  RiCoinsFill,
  RiFileSearchFill,
  RiLightbulbFlashFill,
  RiShieldKeyholeFill,
} from "react-icons/ri";
import { BsBank2, BsFillHouseCheckFill, BsLightbulb } from "react-icons/bs";
import { FaRobot, FaIndustry, FaKeycdn } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiDumbbell } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import {
  MdAgriculture,
  MdEmojiTransportation,
  MdOutlineMedicalInformation,
  MdOutlineTour,
} from "react-icons/md";

export const links = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "business processes",
    path: "/business",
  },
  {
    text: "resources",
    path: "/resources",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const services = [
  {
    icon: <DiGoogleAnalytics />,
    heading: "Analytics",
    items: [
      "data management",
      "data services",
      "content management",
      "online survey management",
    ],
    text: "At PAC Research, we deploy the latest analytical methods to identify patterns, trends, and insights that can help businesses make informed decisions and gain a competitive advantage. Our analytics solutions help businesses gain a deep understanding of their customers and competitors. We have the ability to offer customized solutions tailored to the unique needs of each client. Our team of experts will work with you to develop a solution that meets your specific needs and budget.",
  },
  {
    icon: <VscLightbulbAutofix />,
    heading: "Business Intelligence",
    items: ["Product Development", "market intelligence"],
    text: "We recognize the importance of data-driven decision-making in today's rapidly evolving business landscape. At PAC Research, our comprehensive Business Intelligence Services offer a wide range of solutions to help businesses extract maximum value from data. We understand that data is the backbone of modern businesses. Our services are designed to help businesses extract maximum value from their data and gain the insights they need to make informed decisions. Whether you are looking to optimize your operations, improve customer satisfaction, or gain a competitive edge, we have the expertise and experience to help you achieve your goals.",
  },
  {
    icon: <SlPeople />,
    heading: "consulting",
    items: ["private businesses", "public sector", "training"],
    text: "We acknowledge that businesses face a wide range of challenges in today's rapidly evolving business landscape. Our Consultancy Services are designed to help businesses navigate these challenges and develop effective strategies that drive growth and success. Our team of experienced consultants brings a wealth of knowledge and expertise to the table, having worked with businesses across various industries and geographies. We work closely with our clients to understand their unique challenges and goals and develop customized solutions that meet their specific needs.",
  },
  // {
  //   icon: <GiArchiveResearch />,
  //   heading: "macro research",
  //   items: [
  //     "economic research",
  //     "commodities research",
  //     "FX/Emerging Markets Research",
  //   ],
  // },
  {
    icon: <RiFileSearchFill />,
    heading: "investment research",
    items: [
      "thematic research",
      "fixed income",
      "portfolio strategy",
      "equity research",
    ],
    text: "Making informed investment decisions is essential for businesses and individuals looking to maximize their returns and achieve their financial goals. Our Investment Research is designed to provide businesses with the insights and analysis they need to make sound investment decisions. We employ contemporary analytical tools and techniques to identify market trends, assess risk, and evaluate investment opportunities. Our Investment Research Services cover a wide range of areas, including equity research, fixed-income research, macroeconomic analysis, and more.",
  },
  {
    icon: <SiGoogleanalytics />,
    heading: "industry analysis",
    items: [
      "specialised report",
      "industry focused report",
      "public sector focused report",
    ],
    text: "We understand the importance of staying up to date with the latest industry trends and developments. Our Industry and Specialized Report Services are designed to provide businesses with in-depth insights and analysis into specific industries, markets, and regions. We use the latest analytical tools and techniques to produce high-quality reports that provide valuable insights and actionable recommendations. Our Industry and Specialized Report Services cover a wide range of areas, including market research, competitive analysis, regulatory analysis and more.",
  },
];

export const aboutItems = [
  {
    icon: <BsLightbulb />,
    text: "ideas",
  },
  {
    icon: <SiHandshake />,
    text: "patnerships",
  },
  {
    icon: <RiLightbulbFlashFill />,
    text: "solutions",
  },
];

export const businessHome = [
  {
    icon: <FaRobot />,
    text: "Artificial Intelligence, IoT & ICT",
  },
  {
    icon: <RiCoinsFill />,
    text: "FINTECH & Blockchain",
  },
  {
    icon: <BsBank2 />,
    text: "Financial Services (Banking, Insurance, PFA & Other Financial Services)",
  },
  {
    icon: <GiRollingEnergy />,
    text: "Energy (Oil & Gas, Power, Energy Utilities, Renewable Energy)",
  },
  {
    icon: <GiMineWagon />,
    text: "Solid Mineral/Mining ",
  },
  {
    icon: <BsFillHouseCheckFill />,
    text: "Real Estate & Housing",
  },
  {
    icon: <FaIndustry />,
    text: "Construction & Industrial Goods",
  },
  {
    icon: <MdOutlineTour />,
    text: "Hospitality & Tourism ",
  },
  {
    icon: <MdEmojiTransportation />,
    text: "Transportation (Aviation, Road, Rail & Water)",
  },
  {
    icon: <MdAgriculture />,
    text: "Agriculture/Agro-processing & FMCG",
  },
  {
    icon: <MdOutlineMedicalInformation />,
    text: "Healthcare & Pharmaceutical",
  },
  {
    icon: <IoIosStats />,
    text: "Logistics",
  },
];

export const whyPac = [
  "Extensive experience in developing industry reports, specialized reports, macroeconomic reports, market sizing and opportunity assessment. ",
  "Worked on projects with various private clients, government and regulatory bodies across sectors and have developed deep understanding of the trends, opportunities and challenges in different sectors.",
  "Team of relevant subject matter experts and project team drawn from a pool of experienced professionals who have deep and specialized experience in various markets.",
  "Deep understanding of industries across economies and leading through on diverse subjects",
  "Time-tested tools and methodologies are pivotal in tailor-suiting our services to meet clients’ needs.",
  "Leverage our partnership with industry-leading data providers, people, tools and methodologies to provide world-class service.",
];

export const aboutMore = [
  {
    icon: <RiShieldKeyholeFill />,
    heading: "KEY PARTNERS",
    items: [
      "Data Companies",
      "Multilateral Organizations",
      "Governments",
      "Private Entities",
      "Individuals",
      "Learning Institutions",
      "PAC Group",
    ],
  },
  {
    icon: <BiDumbbell />,
    heading: "OUR VALUE PROPOSITIONS",
    items: [
      "Intelligent Analytic Platform",
      "Real-time data services",
      "Clean & Credible Data",
      "Insight Services",
      "Independent and objective data/information",
    ],
  },
  {
    icon: <FaKeycdn />,
    heading: "KEY RESOURCES",
    items: ["People", "Technology", "Proprietary Software Platforms"],
  },
];
