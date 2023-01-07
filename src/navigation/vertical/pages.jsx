import { Home, CloseSquare, PaperPlus } from "react-iconly";

const pages = [
  {
    header: "MAIN",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home set="curved" className="remix-icon" />,
    navLink: "/",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <PaperPlus set="curved" className="remix-icon" />,
    navLink: "/marketing",
  },
];

export default pages;
