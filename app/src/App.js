import "./App.scss";

//-----------------
// Иконки
// ----------------
import Sticky from 'react-sticky-el';
import IconsAPI from "./components/content/icons/iconsAPI";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Spin as BurgerSpin } from "react-burgers";
// ----------------
// Контент
// -----------------
import { PAGES } from "./components/Header/Navigation/navigationAPI";
import NavMenu from "./components/Header/Navigation/NavMenu";
import FooterBlock from "./components/Footer/FooterBlock";
import footerAPI from "./components/Footer/footerAPI";
import Page from "./components/Header/Navigation/Routing";
// ----------------
// Модальные окна
// ----------------
import UserModal from "./components/Header/Modals/User/UserModal";
import CartModal from "./components/Header/Modals/Cart/CartModal";
import BurgerModal from "./components/Header/Modals/HeaderBurger/HeaderBurger";
import CartNotifyModal from './components/Header/Modals/Dialog/CartNotifyModal';
import ScrollLock from "./components/Header/Tools/ScrollLock";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, hideAllModals, showModal, toggleShowModal } from './components/Redux/Modals/modalsSlice';

function App() {
  const navigationMenu = <NavMenu pages={PAGES} onClick={() => dispatch(hideAllModals())} />;
  const [cart, modals] = useSelector((state) => [state.cart, state.modals]);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ScrollLock isActive={ modals.burger.isShow || modals.user.isShow || modals.cart.isShow } />
      <UserModal show={modals.user.isShow} close={() => dispatch(closeModal('user'))} />
      <CartModal show={modals.cart.isShow} close={() => dispatch(closeModal('cart'))} />
      <CartNotifyModal show={modals.cartNotify.isShow} close={() => dispatch(closeModal('cartNotify'))}/>
      <BurgerModal navigationMenu={navigationMenu} show={modals.burger.isShow} />
      
      <header>
        <div className="_container">
          {/* -----------ЛОГОТИП----------- */}
          <IconsAPI category="HEADER" name="mainLogo" className="main-logo" />
          {/* -----------НАВИГАЦИЯ----------- */}
          {navigationMenu}
          {/* -----------ПОЛЬЗОВАТЕЛЬСКИЕ ИКОНКИ----------- */}
          <div className="user-items">
            <button className="user-item search" onClick={() => null}>
              <IconsAPI category="HEADER" name="search" />
            </button>

            <Sticky stickyClassName="sticky-cart">
              <button className="user-item cart" onClick={() => dispatch(showModal('cart'))} style={{ visibility: modals.cartNotify.isShow ? 'hidden' : 'visible' }}>
                {cart.products?.length > 0 && (
                  <div className="flex justify-center items-center text-purple-200 bg-gray-800 p-4 absolute translate-x-8 -translate-y-8 rounded-full w-2 h-2 opacity-95">
                    <span className="animate-pulse">{cart.products.length}</span>
                  </div>
                )}
                <IconsAPI category="HEADER" name="cart" />
              </button>
            </Sticky>

            <button className="user-item user" onClick={() => dispatch(showModal('user'))}>
              <IconsAPI category="HEADER" name="user" />
            </button>

            <div className="burger" onClick={() => dispatch(toggleShowModal('burger'))}>
              <BurgerSpin width={32} lineSpacing={8} borderRadius={10} active={modals.burger.isShow} />
            </div>
          </div>
        </div>
      </header>

      {/*--------Текущая страница---------*/}
      <Page />

      <footer>
        <div className="footer-section">
          <IconsAPI category="HEADER" name="mainLogo" className="main-logo -z-10" />
          <p className="description">
            We cook and deliver the tastiest food right away to your designated location
          </p>
          <div className="media-icons">
            <button onClick={() => window.open(process.env.REACT_APP_INSTAGRAM_SOCIAL)} className="social">
              <AiFillInstagram size={55} />
            </button>
            <button onClick={() => window.open(process.env.REACT_APP_FACEBOOK_SOCIAL)} className="social">
              <BsFacebook size={50} />
            </button>
            <button onClick={() => window.open(process.env.REACT_APP_TWITTER_SOCIAL)} className="social">
              <BsTwitter size={50} />
            </button>
          </div>
        </div>
        <div className="footer-blocklist">
          {footerAPI.map((footerBlock, index) => (
            <FooterBlock key={index} title={footerBlock.title} links={footerBlock.links} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;