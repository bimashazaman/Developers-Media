'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Developers Media' textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>Developers Media</span> a
        unique platform designed for developers by developers! At Developers
        Media, we provide a space for developers to interact with other
        developers directly, sell their services, showcase their skills and use
        the platform as their social media and get hired by companies.
        <span className='font-extrabold text-white'> Explore</span> the world of
        the developers by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
)

export default About
