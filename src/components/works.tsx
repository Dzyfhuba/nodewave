import styles from './works.module.css'
import RayuMotor from '@/images/Thumnail 4.png'
import RayuMotorBg from '@/images/Rectangle 20.png'
import Jasabung from '@/images/Thumnail 5.png'
import JasabungBg from '@/images/Rectangle 20 (1).png'
import Image from 'next/image'

const data = [
  {
    title: 'Rayu Motor',
    image: <Image src={RayuMotor} alt="Rayu Motor" width={450} />,
    // background: <Image src={RayuMotorBg} alt="Rayu Motor" width={600} className={styles.background}/>,
    background: '/images/work1.png',
    description: `AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales`,
  },
  {
    title: 'Jasabung',
    image: <Image src={Jasabung} alt="Jasabung" width={450} />,
    // background: <Image src={JasabungBg} alt="Jasabung" width={600} className={styles.background}/>,
    background: '/images/work2.png',
    description: `A platform that connects cockfighting enthusiasts with cockfighting service providers`,
  }
]

const Works = () => {
  return (
    <section>
      <h1 className={styles.h1}>Our Works</h1>
      <div className={styles.container}>
        {[...data, ...data, ...data, ...data].map((item, index) => {
          return (
          <div key={index} className={styles.cardBox} style={{
            backgroundImage: `url(${item.background})`,
          }}>
            {item.image}
            <article>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </article>
          </div>
        )})}
      </div>
    </section>
  )
}

export default Works