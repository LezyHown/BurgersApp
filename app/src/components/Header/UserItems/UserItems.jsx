import React from "react";
import { useSelector } from "react-redux";
import { Spin as BurgerSpin } from "react-burgers";
import CartItem from "../UserItems/CartItem";
import Icon from "../../content/icons/iconsAPI";

export default function UserItems({ handles }) {
  const iconCategory = "HEADER";
  const [cart, modals] = useSelector((state) => [state.cart, state.modals]);

  return (
    <div className="user-items">
      <button className="user-item search" onClick={() => null}>
        <Icon category={iconCategory} name="search" />
      </button>
      <CartItem cart={cart} modals={modals} handleCartClick={handles.onCartClick} />
      <button className="user-item user" onClick={handles.onUserClick}>
        <Icon category={iconCategory} name="user" />
      </button>
      <div className="burger" onClick={handles.onBurgerClick}>
        <BurgerSpin width={32} lineSpacing={8} borderRadius={10} active={modals.burger.isShow} />
      </div>
    </div>
  );
}
