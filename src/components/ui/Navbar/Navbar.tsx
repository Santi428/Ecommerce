import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from '../../../assets/cart.svg'
import Logo from '../../../assets/logo.svg'
import useCartContext from '../../../context/CartProvider'
import CartModal from '../CartModal/CartModal'
import styles from './Navbar.module.css'
import { Toaster } from 'sonner'

const Navbar = () => {

  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  const [show, setShow] = useState(false)

  const {state} = useCartContext()

  const handleShow = () => {
    setShow(!show)
  }

  const showCart = () => {
    if(location.pathname === '/'){
      return true
    }else {
      return false
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <Toaster richColors/>
        <div className={styles.navbarDetail} onClick={handleNavigateHome}>
            <img src={Logo} alt="Logo Ecommerce" width={50} height={50} />
            <div>
                <span>DH Ecommerce</span>
            </div>
        </div>
        <div className={styles.nabarCartContainer}>
            <p className={styles.navbarTextAmount}>{state.cartItems.length && showCart() ? state.cartItems.length: null}</p>
            {showCart() && <img onClick={handleShow} src={Cart} alt="Logo Carrito" />}
        </div>
        {show && <CartModal setShow={handleShow}/>}
    </div>
  )
}

export default Navbar