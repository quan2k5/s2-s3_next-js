'use client'
import React, { useState } from "react";
import moment from "moment";
import styles from "./B12.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const handleDateClick = (date: any) => {
    setCurrentDate(date);
  };

  const renderCalendar = () => {
    const startOfMonth = currentDate.clone().startOf("month").day();
    const daysInMonth = currentDate.clone().daysInMonth();
    let days = [];
    let day = 1;

    // Các ngày trắng trước ngày đầu tiên của tháng
    for (let i = 0; i < startOfMonth; i++) {
      days.push(
        <div key={`empty-start-${i}`} className={styles.calendarDay}>
          &nbsp;
        </div>
      );
    }
    for (let i = 0; i < daysInMonth; i++) {
      const date = currentDate.clone().date(day);
      const isToday = moment().isSame(date, "day");
      days.push(
        <div
          key={`day-${day}`}
          className={`${styles.calendarDay} ${isToday ? styles.today : ""}`}
        >
          {day}
        </div>
      );
      day++;
    }
    const lastDayOfMonth = currentDate.clone().endOf("month").day();
    for (let i = lastDayOfMonth; i < 6; i++) {
      days.push(
        <div key={`empty-end-${i}`} className={styles.calendarDay}>
          &nbsp;
        </div>
      );
    }

    return days;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePreviousMonth} className={styles.arrowButton}>
          prev
        </button>
        <span className={styles.monthYear}>
          {currentDate.format("MMMM YYYY")}
        </span>
        <button onClick={handleNextMonth} className={styles.arrowButton}>
          next
        </button>
      </div>
      <div className={styles.calendarWeekdays}>
        <div className={styles.calendarWeekday}>Su</div>
        <div className={styles.calendarWeekday}>Mo</div>
        <div className={styles.calendarWeekday}>Tu</div>
        <div className={styles.calendarWeekday}>We</div>
        <div className={styles.calendarWeekday}>Th</div>
        <div className={styles.calendarWeekday}>Fr</div>
        <div className={styles.calendarWeekday}>Sa</div>
      </div>
      <div className={styles.calendarDays}>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
