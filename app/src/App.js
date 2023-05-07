import "./App.scss";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import MainRouter from "./components/Header/Navigation/MainRouter";
import Footer from "./components/Footer/Footer";
import { ScrollToTopOnRouteChange } from "./components/Pages/Tools/contentChange";

// ---------------
// Модальные окна
// ---------------
import ScrollLock from "./components/Header/Tools/ScrollLock";
import UserModal from "./components/Header/Modals/User/UserModal";
import CartModal from "./components/Header/Modals/Cart/CartModal";
import BurgerModal from "./components/Header/Modals/HeaderBurger/HeaderBurger";
import CartNotifyModal from "./components/Header/Modals/Dialog/CartNotifyModal";
import getModalSetting from "./components/Header/Modals/Tools/ModalSetting";

function App() {
  const modals = useSelector((state) => state.modals);
  ScrollToTopOnRouteChange();

  return (
    <div className="App">
      <ScrollLock isActive={modals.burger.isShow || modals.user.isShow || modals.cart.isShow} />
      <UserModal {...getModalSetting(modals, "user")} />
      <CartModal {...getModalSetting(modals, "cart")} />
      <CartNotifyModal {...getModalSetting(modals, "cartNotify")} />
      <BurgerModal {...getModalSetting(modals, "burger")} />

      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;