import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCartIcon({ size, wind = false, ...rest }) {
  const infinite = { duration: 0.6, repeat: Infinity, repeatType: 'reverse',  ease: 'easeInOut' };
  
  return (
    <div className="animated-cart-icon" {...rest}>
        <svg viewBox="0 0 40 26" width="27" height="65" className='absolute right-5 filter blur-[2px]' style={{ visibility: wind ? 'visible' : 'hidden' }}>
          <defs>
            <linearGradient id="wind-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="100%" height="100%" fill={`url(#wind-gradient)`} />
            </mask>
          </defs>
          <motion.path d="M12,10.5L5,10.5L5,13.5L12,13.5L12,10.5Z" fill="#212135" 
           animate={{ x:[-9, 35], scaleX: [1, 8] }}
           transition={{...infinite, duration: 1.2}}
           mask="url(#mask)"
          />
          <motion.path d="M12,15.5L5,15.5L5,18.5L12,18.5L12,15.5Z" fill="#212135" 
           animate={{ x:[-9, 45], scaleX: [1, 9] }}
           transition={{...infinite, duration: 1.5}}
           mask="url(#mask)"
          />
        </svg>

        <svg width={size} height={size} viewBox={`0 0 35 35`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.ellipse cx="9.26315" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135" 
                 animate={{ scale: [1, 1, 1.2], x: [-1, 0] }}
                 transition={infinite}
            />
            <motion.ellipse cx="15.3283" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135"
                animate={{ scale: [1, 1.2, 1], x: [0, 1] }}
                transition={infinite}
            />
            <motion.path d="M1.04761 1.04761C2.89111 1.96936 3.8045 2.77516 3.8045 5.01754M3.8045 5.01754C3.8045 14.1153 6.23057 15.9348 12.2957 15.9348C18.3609 15.9348 20.787 14.1153 20.787 6.83708C20.787 5.81565 20.1804 5.01754 18.9674 5.01754C17.7544 5.01754 7.845 5.01754 3.8045 5.01754Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                animate={{ y: [0, 1], rotateY: [-2, -15] }}
                transition={infinite}
            />
        </svg>
    </div>
  )
}