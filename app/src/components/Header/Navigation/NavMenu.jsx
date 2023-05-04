import React from 'react'
import { NavLink } from 'react-router-dom';

/**
 * Компонента разделяет массив строк на пункты меню навигации 
 * @param {String[]} pages 
 */
export default function NavMenu({ pages, onClick = () => null, className = "menu", containerClass = "header-nav", elementClass = "text-upper-head" }) {
  const navList = Object.values(pages).map((page) => (
    <li className={elementClass} onClick={onClick}>
      <NavLink to={page} className={({ isActive }) => (isActive ? "active" : "")}>
        {page}
      </NavLink>
    </li>
  ));

  return (
    <nav className={className}>
      <ul className={containerClass}>{navList}</ul>
    </nav>
  )
}