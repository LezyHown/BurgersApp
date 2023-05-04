import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./home.scss";

import ProductList from "./Product/ProductList";
import cardData from "./Card/cardList";
import productsAPI from "./Product/productsAPI";
import IconsAPI from "../../content/icons/iconsAPI";

export default function Home() {
  const refProductList = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    setX(event.pageX);
    setY(event.pageY);
  };

  return (
    <main className="home-page">
      <div className="home-header" onMouseMove={handleMouseMove}>
        <motion.div
          className="elements"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <IconsAPI category="HOME" name="spot" style={{ translateX: -x / 27, translateY: -y / 25 }} />
          <IconsAPI category="HOME" name="burger" style={{ translateX: x / 32, translateY: -y / 32 }} />
        </motion.div>
        <div className="main-title text-upper-head">
          Be the fastest <br /> in delivering <br /> your
          <span className="text-upper-head">food</span>
        </div>
        <p className="description">
          We cook and deliver the tastiest food right away to your designated location
        </p>
        <button
          className="header-button text-upper-head"
          onClick={() => refProductList.current.scrollIntoView({ behavior: "smooth" })}
        >
          Get started
        </button>
      </div>

      <div className="mini-title">What we serve</div>
      <div className="title text-upper-head">
        your favourite food <br /> delivery partner
      </div>
      <ul className="card-list">
        {cardData.map((card) => (
          <li className="card">
            {card.image}
            <div className="title text-upper-head">{card.title}</div>
            <div className="description">{card.description}</div>
          </li>
        ))}
      </ul>

      <div className="mini-title left-side step" ref={refProductList}>
        our menu
      </div>
      <div className="title text-upper-head left-side">
        menu that always <br /> make you fall in love
      </div>
      <ProductList products={productsAPI.chikenList} productsPerPage={6} />
    </main>
  );
}
