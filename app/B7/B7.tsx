import React from 'react'
import BaseButton from './BaseButton'

export default function Bai7() {
  return (
    <div className=''>
       <BaseButton type='danger' children='Danger'/>
      <BaseButton type='primary' children='Primary' />
      <BaseButton type='success'  children='Success'/>
      <BaseButton type='warning' children='Warning'/>
    </div>
  )
}