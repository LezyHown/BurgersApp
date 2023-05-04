import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function CloseBtn({ size = 30, onClose }) {
  return (
    <div className="close-modal" onClick={onClose}>
        <IoMdClose size={size} className="cursor-pointer"/>
    </div>
  )
}