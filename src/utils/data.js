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
} from "react-icons/ri";
import { BsBank2, BsFillHouseCheckFill, BsLightbulb } from "react-icons/bs";
import { FaRobot, FaIndustry } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
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
    path: "/business-processes",
  },
  {
    text: "resources",
    path: "/resources",
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
  },
  {
    icon: <VscLightbulbAutofix />,
    heading: "Business Intelligence",
    items: ["Product Development", "market intelligence"],
  },
  {
    icon: <SiConsul />,
    heading: "consulting",
    items: ["private businesses", "public sector", "training"],
  },
  {
    icon: <GiArchiveResearch />,
    heading: "macro research",
    items: [
      "economic research",
      "commodities research",
      "FX/Emerging Markets Research",
    ],
  },
  {
    icon: <RiFileSearchFill />,
    heading: "investment research",
    items: [
      "thematic research",
      "fixed income",
      "portfolio strategy",
      "equity research",
    ],
  },
  {
    icon: <SiGoogleanalytics />,
    heading: "industry analysis",
    items: [
      "specialised report",
      "industry focused report",
      "public sector focused report",
    ],
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
