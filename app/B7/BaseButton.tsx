import React, { Children } from 'react';
import classNames from "classnames";
import styles from './B7.module.css'
type Props={
    type:"primary"|"danger"|'warning'|'success';
    children:string

}
export default function BaseButton({type,children}:Props) {
  return (
    <button className={classNames(styles.button,{
        [styles.primary]:type==="primary",
        [styles.danger]:type==="danger",
        [styles.warning]:type==="warning",
        [styles.success]:type==="success",
    })}>
        {children}
    </button>
  )
}