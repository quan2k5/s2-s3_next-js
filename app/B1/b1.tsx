import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
export default function b1() {
  return (
    <div className='m-3.5'>
        <div className='text-blue-400'>Label</div>
        <div className='relative w-96 mt-2'>
            <input type="text" className='pl-2 h-10 w-96 rounded border-blue-400 border-2' placeholder='Placeholder' />
            <EyeOutlined className='absolute top-3 right-5' />
        </div>
        <div className='mt-2 text-slate-600'>Helpter text</div>
    </div>
  )
}
