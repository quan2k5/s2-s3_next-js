
"use client"
import React, { useState } from 'react'
import Select from './Select'
export default function () {
    const [yourOption,setYourOption]=useState<string>('Javascrip');
    const onChange=(str:string)=>{
        console.log('run');
        setYourOption(str);
    }

  return (
    <div>
        <Select
        yourOption={yourOption} onChange={onChange} options={[
            'Javascrip','C++','Ruby','Python'
        ]}></Select>
    </div>
  )
}
