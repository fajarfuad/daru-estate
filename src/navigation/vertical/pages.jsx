import {
  Category,
  TwoUsers,
  User,
  Home,
  Filter,
  Wallet,
  Ticket,
} from "react-iconly";

const pages = [
  {
    header: "UTAMA",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Category set="curved" className="remix-icon" />,
    navLink: "/",
  },
  {
    id: "house",
    title: "House",
    icon: <Home set="curved" className="remix-icon" />,
    navLink: "/house",
  },
  {
    id: "customer",
    title: "Customer",
    icon: <User set="curved" className="remix-icon" />,
    navLink: "/customer",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <TwoUsers set="curved" className="remix-icon" />,
    navLink: "/marketing",
  },
  {
    id: "modification",
    title: "Modification",
    icon: <Filter set="curved" className="remix-icon" />,
    navLink: "/modification",
  },
  {
    header: "TRANSAKSI",
  },
  {
    id: "payment",
    title: "Payment",
    icon: <Ticket set="curved" className="remix-icon" />,
    navLink: "/payment",
  },
  {
    id: "scheme",
    title: "Skema",
    icon: <Wallet set="curved" className="remix-icon" />,
    navLink: "/scheme",
  },
];

export default pages;
