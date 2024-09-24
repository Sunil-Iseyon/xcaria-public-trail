'use client'
import classes from './landingpage.module.css'
import Image from 'next/image'
import logo1 from '@/public/logo1.png'
import logo2 from '@/public/logo2.png'
import logo3 from '@/public/logo3.png'
import logo4 from '@/public/logo4.png'
import logo5 from '@/public/logo5.png'
import logo6 from '@/public/logo6.png'
import logo7 from '@/public/logo7.png'
import {animate, delay, motion} from 'framer-motion'


import AiRobotMachine from '@/public/AiRobotMachine.png'
const landingpage = () => {
    const fadeInUpAnimation = {
        hidden: {
          opacity: 0,
          x: -100,
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            delay:0.8,
            staggerChildren: 0.2,
            duration: .8,
          },
        },
      };
   
  return (
    <main className={classes.bg}>
        <motion.div className={classes.light}
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1.5,delay:0.8}} ></motion.div>
       
        <div className={classes.glassBg}>
        <motion.div className={classes.gridContainer}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2,delay:1}}
        >
        
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        </motion.div>
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1.5,delay:2}}
        >
        <Image src={AiRobotMachine} alt='' className={classes.aiRobot}/></motion.div>
        <div className={classes.heroTitle}>
        <motion.div
           className={classes.heading}
           
           initial='hidden'
          animate='show'
          variants={fadeInUpAnimation}

           
           >
            <motion.h3>Empowering Innovation with </motion.h3>
            <motion.h1 className="glowing-text">Intelligent Solutions using AI</motion.h1>
            <motion.p>Firefly models and services power generative Al features in Adobe creative apps. Learn about the latest
            features in Photoshop, Illustrator, Lightroom, and the Firefly web app.</motion.p>
            <motion.div
             className={classes.btn}
             
             initial='hidden'
          animate='show'
          variants={fadeInUpAnimation}
             >
                <motion.button className={classes.solidBtn}>Lern more</motion.button>
                <motion.button className={classes.strokeBtn}>Sign in</motion.button>


            </motion.div>
            <div className={classes.hexagonContainer}>
        <div className={classes.hexagon}>
            <Image src={logo1} alt="Supply Chain Management"  className={classes.img}/>
           
        </div>
        <div className={classes.hexagon}>
            <Image src={logo2} alt="Retail" className={classes.img}/>
            
        </div>
        <div className={classes.hexagon}>
            <Image src={logo3} alt="Manufacturing" className={classes.img}/>
           
        </div>
        <div className={classes.hexagon}>
            <Image src={logo4} alt="Healthcare" className={classes.img}/>
           
        </div>
        <div className={classes.hexagon}>
            <Image src={logo5} alt="Insurance" className={classes.img}/>
           
        </div>
        <div className={classes.hexagon}>
            <Image src={logo6} alt="Financial Services" className={classes.img}/>
            
        </div>
        <div className={classes.hexagon}>
            <Image src={logo7} alt="Telecom" className={classes.img}/>
            
        </div>
    </div>

          </motion.div>
        </div>
        



        </div>


    </main>
  )
}

export default landingpage