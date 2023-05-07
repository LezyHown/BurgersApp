import IconsAPI from "../../content/icons/iconsAPI";
import MailInput from "./MailInput";

const footerBlocks = [
  {
    title: "About",
    links: [
      { name: "About us", link: "/about" },
      { name: "Features", link: "/features" },
      { name: "News", link: "/news" },
      { name: "Menu", link: "/menu" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Why Burger King?", link: "/why-burger-king" },
      { name: "Partner with us", link: "/partner-with-us" },
      { name: "FAQ", link: "/faq" },
      { name: "Blog", link: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Account", link: "/account" },
      { name: "Support center", link: "/support-center" },
      { name: "Feedback", link: "/feedback" },
      { name: "Contact us", link: "/contact-us" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "Question or feedback?", link: "/question-or-feedback" },
      { name: "We’d love to hear from you", link: "/contact-form" },
      <MailInput/>
    ],
  },
];

export default footerBlocks;