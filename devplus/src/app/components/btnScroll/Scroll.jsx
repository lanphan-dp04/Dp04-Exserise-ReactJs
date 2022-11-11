import "./Scroll.scss"
import React from 'react'
import { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa"

export default function BtnScrollToTop() {
    const [scrollToTop, setScrollToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='wc-scroll'>
        {scrollToTop && (
            <button className='btn-scroll' onClick={scrollUp}>
                <FaAngleUp/>
            </button>
        )}
    </div>
  )
}
