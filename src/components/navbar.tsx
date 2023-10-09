import Image from "next/image"
import Logo from '@/images/Logo White 1.png'
import styles from './navbar.module.css'
import Link from "next/link"
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

const data = [
  {
    href: '/website',
    label: 'Website'
  },
  {
    href: '/mobile-apps',
    label: 'Mobile Apps'
  },
  {
    href: '/portfolio',
    label: 'Portfolio'
  },
  {
    href: '/make-an-app',
    label: 'Make an App'
  }
]

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className={styles.drawerButton}>
            <BiMenuAltLeft size={44} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className={styles.drawerMenu}>
            <li className="w-fit ml-auto">
              <button>
                <MdClose size={24} />
              </button>
            </li>
            {
              data.map((item, index) => {
                return (
                  (
                    <li key={index}>
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  )
                )
              })
            }
          </ul>
        </div>
      </div>
      <Image src={Logo} alt="nodewave" height={44} />

      <div className={styles.navMenu}>
        {
          data.map((item, index) => {
            return (
              (
                <Link href={item.href} key={index}>
                  {item.label}
                </Link>
              )
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar