import { useDispatch } from "react-redux";
import { closeModal } from "../../../Redux/Modals/modalsSlice";

/**
 * Выполняет настройку модального окна под параметры из ModalsSlice
 * @param {Object} modals - объекты из modals state
 * @param {String} modalName - имя модального окна
 * @returns {{show: Boolean, close: dispatch }}
 */
const ModalSetting = (modals, modalName) => {
  const dispatch = useDispatch();
  return {
    show: modals[modalName]?.isShow,
    close: () => dispatch(closeModal(modalName)),
  };
};

export default ModalSetting;