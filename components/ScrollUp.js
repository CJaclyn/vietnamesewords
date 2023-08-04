import React, { useEffect, useState } from 'react';

export default function ScrollUp() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;

    if (offset > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return <>{scrolled && <button onClick={scrollToTop}>Scroll Up</button>}</>;
}
