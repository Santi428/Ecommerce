import Logo from '../../../assets/logo.svg'
import Cart from '../../../assets/cart.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'
import CartModal from '../CartModal/CartModal'

const Navbar = () => {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={Logo} alt="Logo Ecommerce" width={50} height={50} />
            <div>
                <span>DH Ecommerce</span>
            </div>
        </div>
        <div className={styles.nabarCartContainer}>
            <p className={styles.navbarTextAmount}>32</p>
            <img onClick={handleShow} src={Cart} alt="Logo Carrito" />
        </div>
        {show && <CartModal setShow={handleShow}/>}
    </div>
  )
}

export default Navbar