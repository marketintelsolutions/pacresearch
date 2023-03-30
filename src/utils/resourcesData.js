import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { SiOnlyoffice, SiSpringsecurity } from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";

export const headings = [
  {
    id: 1,
    text: "Business marketing",
    icon: <AiOutlineAppstoreAdd />,
    items: [
      {
        head: "app development",
        text: "76 pages",
      },
      {
        head: "web design",
        text: "16 pages",
      },
      {
        head: "landing page",
        text: "43 pages",
      },
      {
        head: "business compare",
        text: "216 pages",
      },
      {
        head: "comerce checkout",
        text: "706 pages",
      },
      {
        head: "data staging",
        text: "73 pages",
      },
      {
        head: "campaign store",
        text: "2976 pages",
      },
      {
        head: "acquisition mitra",
        text: "376 pages",
      },
    ],
  },
  {
    id: 2,
    text: "expand SEO",
    icon: <TbSeo />,
  },
  {
    id: 3,
    text: "office management",
    icon: <HiOutlineOfficeBuilding />,
  },
  {
    id: 4,
    text: "client managing",
    icon: <SiOnlyoffice />,
  },
  {
    id: 5,
    text: "data collection",
    icon: <BsDatabaseFillCheck />,
  },
  {
    id: 6,
    text: "secured system",
    icon: <SiSpringsecurity />,
  },
];
