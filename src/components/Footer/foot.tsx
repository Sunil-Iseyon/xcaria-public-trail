'use client'

import Link from 'next/link'
import classes from './footer.module.css'
import {delay, motion} from 'framer-motion'
export default function foot(){
  
const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: .8,
     delay:2
    },
  },
 

};
  return (
    <motion.footer 
    className={classes.footer}
    initial={{ opacity: 0,
      y: -30,}}
    animate={{ opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: .8,
       delay:2
      },}}
    
    whileInView={ {y: 0, opacity: 1} }
    viewport={{ once: true }}
    >
    <div >
      <Link href='/' ><h1 className={classes.footerLogo}>Xcaria</h1></Link>
      <ul>
        <li>
          New York l New Jersey | Minnesota l California l Florida l
          Bangalore
        </li>
      </ul>
    </div>
   
    <div   className='footer-title'>
    <h1>Xcaria</h1>
     
      <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}>
        <Link href='/home' className={classes.link}><li>Home</li></Link>
        <Link href='/aboutus' className={classes.link}><li>About Us</li></Link>
  
      </motion.ul>
    </div>
    
    <div  className='footer-title'>
   <h1>Contact Us</h1>

      
      <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}>
       <Link href='#' className={classes.link}> <li>Email</li></Link>
       <Link href='#' className={classes.link}> <li>Linkdin</li></Link>
       <Link href='#' className={classes.link}> <li>Instagram</li></Link>
       <Link href='#' className={classes.link}> <li>Twitter</li></Link>

      </motion.ul>
    </div>
    <div  className='footer-title'>
      <h1>Terms & Conditions</h1>
      <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation} >
      <Link href='/terms&conditions' className={classes.link}><li>Terms & Conditions</li></Link>
        <Link href='/privacypolicy' className={classes.link}><li>Privacy Policy</li></Link>
      </motion.ul>
    </div>
  
    
    <div className={classes.inputs}>
    <h1>Email: info@iseyon.comPhone: (651) 503-9126</h1>
    <div>
      <input type="email" placeholder="Enter your email" />
      <button>Send</button>
      </div>
    </div>
  </motion.footer>
  )
}

