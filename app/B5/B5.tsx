import React from 'react'
import "./B5.scss"
export default function B5() {
  return (
    <div className='delete_part'>
        <h4>Delete blog post</h4>
        <p>Are you sure want to delete this post?This action can not be undone</p>
        <div className='bottom_part'>
            <button className='cancel_btn'>Cancle</button>
            <button className='delete_btn'>Delete</button>
        </div>
    </div>
  )
}
