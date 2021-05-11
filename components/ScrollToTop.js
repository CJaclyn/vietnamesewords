import React, { useState, useEffect } from 'react';

const ScrollToTop = () =>{
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400){
              setShowScroll(true)
            } else if (showScroll && window.pageYOffset <= 400){
              setShowScroll(false)
            }
          };
        
          const scrollTop = () =>{
            window.scrollTo({top: 0, behavior: 'smooth'});
          };
        
          window.addEventListener('scroll', checkScrollTop)
    })
  
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="icon icon-tabler icon-tabler-arrow-bar-to-up scrollTop" 
        width="44" 
        height="44" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="#272727" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        onClick={ scrollTop }
        style={ {height: 40, display: showScroll ? 'flex' : 'none'} }
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="10" x2="12" y2="20" />
        <line x1="12" y1="10" x2="16" y2="14" />
        <line x1="12" y1="10" x2="8" y2="14" />
        <line x1="4" y1="4" x2="20" y2="4" />
        </svg>
    );
  }
  
  export default ScrollToTop;