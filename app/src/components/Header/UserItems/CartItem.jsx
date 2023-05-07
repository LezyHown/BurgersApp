import React, { useState } from "react";
import Sticky from 'react-sticky-el';
import IconsAPI from "../../content/icons/iconsAPI";

export default function CartItem({ cart, modals, handleCartClick }) {
  const foodCount = cart.products?.length;
  const isNotifyActive = modals.cartNotify.isShow;
  const [isSticky, setSticky] = useState(false);

  if ((isSticky && modals.cart.isShow) || isNotifyActive) {
    return null;
  }

  return (
    <Sticky stickyClassName="sticky-cart" onFixedToggle={(fixed) => setSticky(fixed)}>
      <button className="user-item cart" onClick={handleCartClick}>
        {foodCount > 0 && (
          <div className="flex justify-center items-center text-purple-200 bg-gray-800 p-4 absolute translate-x-8 -translate-y-8 rounded-full w-2 h-2 opacity-95">
            <span className="animate-pulse">{foodCount}</span>
          </div>
        )}
        <IconsAPI category="HEADER" name="cart" />
      </button>
    </Sticky>
  );
}