import Image from 'next/image'
import styles from './how.module.css'
import Background from '@/images/Background.png'
import CartBackground from '@/images/3b122720da1ca88799df7ea1d5f7839e.jpeg'
import You from '@/images/Ellipse 1.png'
import Us from '@/images/Ellipse 1 (1).png'

const data = {
  chat: [
    {
      name: 'You',
      message: 'My name is Danny, I\'m looking for profile website company',
    },
    {
      name: 'Us',
      message: 'Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting'
    },
    {
      name: 'You',
      message: 'Sounds good, I have many desires to explain',
    },
    {
      name: 'Us',
      message: 'How do I arrange our meeting on Monday at 10 WIB and my team will contact you again',
    }
  ],
  title: 'Estimate',
  description: 'Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.'
}

const How = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>How We Work</h1>

      <Image src={Background} alt='background' className={styles.background} />

      <article className={styles.cardBox}>
        <Image src={CartBackground} alt='card background' width={500} className={styles.cardBackground} />

        <div className="p-5 z-10">
          <div className={styles.chatBox}>
            {
              data.chat.map((chat, idx) => (
                <div key={idx} className={'z-10 chat carousel-item ' + (chat.name === 'Us' ? 'chat-end' : 'chat-start')}>
                  <div className={'chat-image'}>
                    <Image src={chat.name === 'Us' ? Us : You} alt={chat.name} width={44} />
                  </div>
                  <div className="chat-header text-xs text-primary">
                    {chat.name}
                  </div>
                  <div className="chat-bubble text-xs bg-[#D9D9D9] text-black">
                    {chat.message}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pt-10 p-5'>
          <h3 className='font-semibold'>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </article>
    </section>
  )
}

export default How