import styles from './products.module.css'
import Mobile from '@/images/ui-design 1.svg'
import Website from '@/images/web-design (1) 1.svg'
import MobileBig from '@/images/iPhone 14 Pro Space Black Mockup.png'
import Image from 'next/image'

const data = [
  {
    image: <Image src={Mobile} alt='mobile apps' width={60} />,
    title: 'Mobile Apps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    image: (
      <div className="flex justify-center">
          <Image src={MobileBig} alt='mobile apps big' width={50} />
          <Image src={MobileBig} alt='mobile apps big' width={50} />
          <Image src={MobileBig} alt='mobile apps big' width={50} />
      </div>
    ),
    title: 'Mobile Apps',
    description: 'Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.'
  },
  {
    image: <Image src={Website} alt='website' width={60} />,
    title: 'Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

const Products = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Our Product</h1>

      <div className={styles.cardContainer}>
        {
          data.map((item, idx) => (
            <div key={idx} className={styles.cardBox}>
              {item.image}
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Products