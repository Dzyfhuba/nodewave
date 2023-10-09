import Logo from '@/images/Logo White 1.png'
import Image from 'next/image'
import styles from './footer.module.css'
import { MdFacebook } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const socialMedias = [
  {
    icon: <MdFacebook size={32} />,
    link: 'https://www.facebook.com/nodewave.id',
  },
  {
    icon: <FaTwitter size={32} />,
    link: 'https://twitter.com/nodewaveid',
  },
  {
    icon: <FaYoutube size={32} />,
    link: 'https://www.youtube.com/channel/UC1xVnDlQqL8U0r3Z9GqQJ3Q',
  },
  {
    icon: <FaLinkedin size={32} />,
    link: 'https://www.linkedin.com/company/nodewave',
  },
  {
    icon: <FaInstagram size={32} />,
    link: 'https://www.instagram.com/nodewave.id',
  }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={Logo} alt="Logo" height={44} className='mx-auto' />

      <div>PT NODE WAVE SOLUSI TEKNOLOGI</div>

      <div>
        <div>Graha Pena Surabaya</div>
        <div>Jl. Ahmad Yani no. 88 Surabaya</div>
        <div>Phone: +62811258280</div>
        <div>Email: support@nodewave.id</div>
      </div>

      <div className='flex justify-center gap-4'>
        {
          socialMedias.map((socialMedia, index) => (
            <a href={socialMedia.link} key={index} target='_blank' rel='noreferrer'>
              {socialMedia.icon}
            </a>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer