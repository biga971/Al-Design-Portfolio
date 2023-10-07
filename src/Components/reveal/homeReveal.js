import React,{ useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const HomeReveal = ({ children , delay }) => {
  const ref = useRef(null)
  const isInView = useInView( ref, { once: true })
  const mainControls = useAnimation()
  
  useEffect(() =>{
    if (isInView) {
      mainControls.start("visible")
    }
  },[isInView])
  return (
      <div ref={ref} style={{ positon: "relative", /* width: "fit-content", */ overflow: "hidden" }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75},
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delay }}
          >
              {children}
          </motion.div>
      </div>
  )
}

export default HomeReveal