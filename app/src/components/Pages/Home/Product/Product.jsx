import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'; 
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/CartSlice';
import { showModal } from '../../../Redux/Modals/modalsSlice';
import './product.scss';

/**
 * @param {ImageData} image Изображение продукта 
 * @param {String} description О продукте
 * @param {String} price Цена $
 * @returns {JSX} JSX Компонент с классом product
 */
export default function Product({ id, image, price, description, isInViewList }) {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <motion.div className="product">
      <motion.img src={image} 
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: imageLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, type: "spring", damping: 20, stiffness: 150 }}
        onLoad={() => setImageLoaded(true)}
      />
        <div className='container'>
          <div className='description line-clamp-3'>{description}</div>
          <div className='_container'>
            <span className='price'>{price}</span>
            <div className='add' onClick={() => { 
              dispatch(addProduct({ productId: id }));
              dispatch(showModal('cartNotify'));
            }}>
              <BiPlus color="#FFFFFF" size={45}/>
            </div>
          </div>
        </div>
    </motion.div>
  )
}