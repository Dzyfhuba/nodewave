import styles from './example.module.css'
import ListIcon from '@/images/material-symbols_list.png'
import SportIcon from '@/images/fluent_sport-basketball-20-regular.png'
import BookingIcon from '@/images/ph_book-bold.png'
import Image from 'next/image'
import Ecommerce from '@/images/ant-design_shop-outlined.png'
import Company from '@/images/mdi_company.png'
import Cashier from '@/images/streamline_money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine.png'
import Chat from '@/images/ph_chat-bold.png'
import Workshop from '@/images/streamline_money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine.png'
import Construction from '@/images/fluent-emoji-high-contrast_man-mechanic.png'

const data = [
  {
    title: 'Online Attendance',
    icon: <Image src={ListIcon} alt='online attendance' width={40} />,
    description: `With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:`,
    list: [
      'Clock in and Clock Out attendance',
      'Face Photo',
      'Face Recognition',
      'Accurate time stamp down to seconds',
      'GPS location of employees'
    ]
  },
  {
    title: 'Sport Center',
    icon: <Image src={SportIcon} alt='sport center' width={40} />,
    description: 'Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to',
    list: [
      'Choose a booking schedule',
      'Online payments',
      'Automatic scheduling system',
      'Search for Friends feature',
      'Split Payment with team members',
      'Information and announcements from you'
    ]
  },
  {
    title: 'Booking',
    icon: <Image src={BookingIcon} alt='booking' width={40} />,
    description: 'Offer your services in your own application to place orders to delivery directly to the client\'s house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:',
    list: [
      'Choose the type and category of service desired',
      'Make online reservations and payments with digital payment methods',
      'Scheduling with field teams',
      'Special application for the team',
      'Promotions and special voucher codes'
    ]
  }
]

const others = [
  {
    icon: <Image src={Ecommerce} alt='ecommerce' width={32} />,
    title: 'E-commerce',
  },
  {
    icon: <Image src={Company} alt='company' width={32} />,
    title: 'Company Profile',
  },
  {
    icon: <Image src={Cashier} alt='cashier' width={32} />,
    title: 'Cashier',
  },
  {
    icon: <Image src={Chat} alt='chat' width={32} />,
    title: 'Chat',
  },
  {
    icon: <Image src={Workshop} alt='workshop' width={32} />,
    title: 'Workshop',
  },
  {
    icon: <Image src={Construction} alt='construction' width={32} />,
    title: 'Construction',
  }
]

const Examples = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Application that can be made</h1>
      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index} className={styles.cardBox}>
            <div className='flex items-center'>
              {item.icon}
              <h2 className={styles.h2}>{item.title}</h2>
            </div>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.list}>
              {item.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.otherContainer}>
        {
          others.map((item, index) => (
            <div key={index} className={styles.other}>
              {item.icon}
              <h2>{item.title}</h2>
            </div>
          ))
        }
        <div className={styles.other}>
          and many others
        </div>
      </div>
    </section>
  )
}

export default Examples
