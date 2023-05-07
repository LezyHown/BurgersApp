import React from 'react';
import { useDispatch } from "react-redux";
import './header.scss';

import Icon from "../content/icons/iconsAPI";
import NavMenu from "./Navigation/NavMenu";
import UserItems from './UserItems/UserItems';
import { PAGES } from "./Navigation/navigationAPI";
import { hideAllModals, showModal, toggleShowModal } from '../Redux/Modals/modalsSlice';

/**
 * Содержит навигацию и основные пользовательские иконки
*/
const Header = () => {
  const dispatch = useDispatch();

  const onCartClick = () => dispatch(showModal('cart'));
  const onUserClick = () => dispatch(showModal('user'));
  const onBurgerClick = () => dispatch(toggleShowModal('burger'));

  return (
    <header>
      <div className="_container">
        <Icon category={"HEADER"} name="mainLogo" className="main-logo" />
        <NavMenu pages={PAGES} onClick={() => dispatch(hideAllModals())} />
        <UserItems handles={{onBurgerClick, onCartClick, onUserClick}}/>
      </div>
    </header>
  );
};

export default Header;