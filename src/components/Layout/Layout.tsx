import { Route, Routes } from "react-router-dom"
import { App } from "../../App"
import Login from "../../pages/Login/Login"
import Checkout from "../../pages/Checkout/Checkout"
import Navbar from "../ui/Navbar/Navbar"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/dashboard" element={} />  */}
      </Routes>
    </div>
  )
}

export default Layout