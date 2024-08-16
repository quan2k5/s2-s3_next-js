import React from 'react'
import "./B6.scss"
import { UserOutlined } from '@ant-design/icons'
export default function B6() {
  return (
    <div className='navigation_part'>
        <div className='logo'><h4>logoispum</h4></div>
        <div className='menu'>
            <div className='menu_item'>Home</div>
            <div className='menu_item'>Updates</div>
            <div className='menu_item'>Services</div>
            <div className='menu_item'>Features</div>
            <div className='menu_item'>About us</div>
        </div>
        <div className='account_part'>
            <UserOutlined className='user_icon' />
        </div>
    </div>
  )
}
