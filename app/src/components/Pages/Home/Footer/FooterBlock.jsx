import React from "react";
import { Link } from "react-router-dom";

/**
 * @param title - Заголовок блока String
 * @param links - массив ссылок [ { name, link }, { name, link } ]
 * @returns
 */
export default function FooterBlock({ title, links }) {
  return (
    <div className="footer-block">
      <div className="title text-upper-head">{title}</div>
      <ul>
        {links.map((item) =>
          item.name && item.link ? (
            <li className="link text-upper-head">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ) : (
            <li className="child">{item}</li>
          )
        )}
      </ul>
    </div>
  );
}
