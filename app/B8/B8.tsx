'use client'
import React, { useState } from 'react';
import styles from './B8.module.css';
const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 20;
    const pagesToShow = 5;

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page:number) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };
    const findPage=()=>{
        const find=renderPageNumbers().find((e:any)=>{
            return e===20;
        })
        if(find){
            return true;
        }
        return false;
    }
    const findPage1=()=>{
        const find=renderPageNumbers().find((e:any)=>{
            return e===1;
        })
        if(find){
            return true;
        }
        return false;
    }
    return (
        <div className={styles.pagination}>
            <button 
                className={styles.navButton} 
                onClick={handlePrevClick} 
                disabled={currentPage === 1}
            >
                ← Prev
            </button>
            {findPage1()===true?<></>:<>
                <button
                    className={`${styles.pageButton} ${currentPage === 1 ? styles.active : ''}`}
                    onClick={() => handlePageClick(1)}
                >
                    1
                </button>
                <button className={styles.pageButton}>...</button>
            </>}
            {renderPageNumbers().map((page) => (
                <button
                    key={page}
                    className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </button>
            ))}
            {findPage()===true?<></>:<>
                <button className={styles.pageButton}>...</button>
            <button
                    className={`${styles.pageButton} ${currentPage === 20 ? styles.active : ''}`}
                    onClick={() => handlePageClick(20)}
                >
                    20
                </button>
            <button 
                className={styles.navButton} 
                onClick={handleNextClick} 
                disabled={currentPage === totalPages}
            >
                Next →
            </button>
            </>}
        </div>
    );
};

export default Pagination;
