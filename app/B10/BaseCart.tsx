import React from 'react'
import './B10.module.css'
type Props={
    content:string,
    children:any
    image:string,
    title:string,
}
export default function BaseCart({image,title,content,children}:Props) {
  return (
    <div className='cart_component'>
        <img className='cart_img' src={image} alt="" />
        <hr />
        <div className='cart-bottom'>
            <p className='title_cart'>{title}</p>
            <p>{content}</p>
            <div>{children}</div>
        </div>
    </div>
  )
}