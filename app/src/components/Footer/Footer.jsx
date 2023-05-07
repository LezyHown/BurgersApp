import React from "react";
import './footer.scss';

import Icon from "../content/icons/iconsAPI";
import SocialLink from "./MediaContainer/SocialLink";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import SectionList from "./FooterSection/SectionList";

/**
 * Основной подвал, где есть все нужные ссылки
*/
export default function Footer() {
  const { REACT_APP_FACEBOOK_SOCIAL, REACT_APP_INSTAGRAM_SOCIAL, REACT_APP_TWITTER_SOCIAL } = process.env;
  const icons = {
    instagram: <AiFillInstagram size={55} />,
    facebook: <BsFacebook size={50} />,
    twitter: <BsTwitter size={50} />,
  };

  return (
    <footer>
      <div className="first-container">
        <Icon category="HEADER" name="mainLogo" className="main-logo -z-10" />
        <p className="description">We cook and deliver the tastiest food right away to your designated location</p>
        <div className="media-icons">
          <SocialLink to={REACT_APP_INSTAGRAM_SOCIAL}>{icons.instagram}</SocialLink>
          <SocialLink to={REACT_APP_FACEBOOK_SOCIAL}>{icons.facebook}</SocialLink>
          <SocialLink to={REACT_APP_TWITTER_SOCIAL}>{icons.twitter}</SocialLink>
        </div>
      </div>
      <SectionList/>
    </footer>
  );
}