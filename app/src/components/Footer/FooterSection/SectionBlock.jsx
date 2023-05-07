import React from "react";
import { Link } from "react-router-dom";

/**
 * @param title - Заголовок блока String
 * @param links - массив ссылок [ { name, link }, { name, link } ]
 */
export default function Block({ title, links }) {
  return (
    <div className="section-block">
      <h2 className="title text-uppercase">{title}</h2>
      <ul className="link-list">
        {links.map((item, index) => (
          <li key={index} className="list-item">
            {item.name && item.link ? (
              <Link to={item.link} className="link text-uppercase">
                {item.name}
              </Link>
            ) : (
              <div className="child">{item}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
