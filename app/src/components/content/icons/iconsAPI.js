import React from 'react';
import { motion } from 'framer-motion';

import mainLogo from './pages/Home/header/main-logo/kfc.svg';
import cart from './pages/Home/header/user/Cart.svg';
import search from './pages/Home/header/user/Search.svg';
import user from './pages/Home/header/user/User.svg';
import burger from './pages/Home/header/elements/burger.svg';
import spot from './pages/Home/header/elements/spot.svg';
import delivery from './pages/Home/main/delivery.svg';
import orders from './pages/Home/main/orders.svg';
import shopping from './pages/Home/main/shopping.svg';
import mail from './pages/Home/footer/mail.svg';
import phone from './pages/Contact/phone.svg';
import timer from './pages/Contact/timer.svg';
import mapContactLocation from './pages/Contact/map-location.png';

function IconsAPI({ category, name, ...rest }) {
  const icons = {
    HOME: {
      //Header
      mainLogo, cart, search, user, burger, spot,
      //Main
      delivery, orders, shopping,
      //Footer
      mail
    },
    CONTACT: {
      phone, timer, mapContactLocation
    }
  };

  return <motion.img alt='icon' src={icons[category]?.[name]} style={{ imageRendering: 'optimizeQuality', userSelect: 'none' }} draggable={false} {...rest}/>;
}

export default IconsAPI;