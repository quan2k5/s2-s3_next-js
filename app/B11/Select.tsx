import React, { useState } from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import "./Select.scss";
export default function Select(Props:any) {
    const [check,setCheck]=useState<boolean>(false);
  return (
    <div>
        <div className='input_part'>
            <input type="text" value={Props.yourOption}  />
            <CaretDownOutlined className='down_icon' onClick={()=>{setCheck(!check)}}/>
        </div>
        {check? <ul>
        {Props.options.map((element:any) => {
            return <li onClick={()=>{Props.onChange(element)}}>{element}</li>       
        })}
        </ul>:<></>}
    </div>
  )
}
