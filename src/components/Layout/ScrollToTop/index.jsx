import { useEffect, useState, useRef } from 'react';
import { ScrollIcon } from '../../UI/Icons'

import cls from './ScrollToTop.module.scss'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const prevScrollpos = useRef(typeof window !== 'undefined' && window?.pageYOffset)

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window?.pageYOffset;
      if (window?.pageYOffset > 300 && prevScrollpos.current < currentScrollPos) {
        setIsVisible(true);
      } else if (window?.pageYOffset < 300 || prevScrollpos.current > currentScrollPos) {
        setIsVisible(false);
      }
      prevScrollpos.current = currentScrollPos
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return isVisible && (
    <button
      className={`${cls.btn} ${isVisible ? cls.open : cls.close}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ScrollIcon />
    </button>
  );
}

export default ScrollToTop;
