import Image from 'next/image'
import styles from './hero.module.css'
import Head from '@/images/mdi_head-idea.png'
import Code from '@/images/ph_code-bold.png'

const text = {
  title: `Make Your Own
  Website and Mobile Application
  With Nodewave`,
  description: `Create Mobile Applications and Websites for Companies or Your Business
  Have a transparent pricing, easy and straightforward development process`
}

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h1 className={styles.title}>
          {text.title}
          <Image src={Head} alt='head' />
          <Image src={Code} alt='code' className={styles.code} />
        </h1>
        <button className={styles.start}>
          Get Started Now
        </button>
        <p className={styles.description}>
          {text.description}
        </p>
      </section>
      <div className={styles.shadow}></div>
    </div>
  )
}

export default Hero