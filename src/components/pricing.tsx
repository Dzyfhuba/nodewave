import styles from './pricing.module.css'
import WebsiteBackground from '@/images/Rectangle 24.png'
import MobileAppsBackground from '@/images/Rectangle 24 (1).png'
import Image from 'next/image'
import DiscountImage from '@/images/fontisto_shopping-sale.png'

const data = [
  {
    title: 'Website',
    price: 1000000,
    discount: 0.5,
    image: <Image src={WebsiteBackground} alt='website' className={styles.image}/>
  },
  {
    title: 'Mobile Apps',
    price: 999999,
    image: <Image src={MobileAppsBackground} alt='mobile apps' className={styles.image}/>
  }
]

const Pricing = () => {
  return (
    <section className='pt-10'>
      <h1 className={styles.h1}>Start Creating For Website or Mobile Apps For You Now</h1>

      <div className={styles.container}>
        {
          data.map((item, index) => (
            <div className={styles.cardBox} key={index}>
              <div className='w-full p-5 flex flex-col justify-between'>
                <div className="">
                  <h2>{item.title}</h2>
                  <div>
                    Start From
                  </div>
                  <div className={item.discount ? styles.discount : ''}>
                    {`Rp. ${item.price}`}
                    <Image src={DiscountImage} alt='discount' className={item.discount ? styles.saleIcon : 'hidden'} />
                  </div>
                  <div className={!item.discount ? 'hidden' : ''}>
                    {
                      `Rp. ${item.discount ? (item.discount * item.price) : item.price}`
                    }
                  </div>
                </div>
                <button className={styles.order}>
                  Order Now
                </button>
              </div>
              {item.image}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Pricing