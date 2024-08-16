import React from 'react';
import classNames from "classnames";
import  styles  from './B9.module.css'
type Props={
    type:"success"|"info"|"warning"|"error",
    children:string;
}
export default function BaseAlert({type,children}:Props) {
  return (
    <button className={classNames(styles.alert,{
        [styles.success]:type==="success",
        [styles.info]:type==="info",
        [styles.warning]:type==="warning",
        [styles.error]:type==="error",
    })}>
      {children}
    </button>
  )
}