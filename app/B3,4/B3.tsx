import React from 'react'
import styles from './B3.module.css';
export default function B3() {
  return (
    <div className=''>
    <form className={styles.signupForm}>
      <h2>Form Sign up</h2>
      <div className={styles.group}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />
      </div>
      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@company.com" />
      </div>
      <div className={styles.group}>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" placeholder="+84 (123) 456-789" />
      </div>
      <div className={styles.group}>
        <label htmlFor="address">Address</label>
        <textarea id="address" placeholder="Tell us a little about the project..."></textarea>
      </div>
      <div className={styles.group}>
        <label>Skills</label>
        <div className={styles.checkboxes}>
          <label><input type="checkbox" /> HTML</label>
          <label><input type="checkbox" /> CSS</label>
          <label><input type="checkbox" /> JavaScript</label>
          <label><input type="checkbox" /> UX design</label>
          <label><input type="checkbox" /> ReactJS</label>
          <label><input type="checkbox" /> Java</label>
        </div>
      </div>
      <button type="submit" className={styles.button}>Sign up</button>
    </form>
  </div>
  )
}
