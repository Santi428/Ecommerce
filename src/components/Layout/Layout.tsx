import { Route, Routes } from "react-router-dom"
import { App } from "../../App"
import Login from "../../pages/Login/Login"

const Layout = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={} />  */}
    </Routes>
  )
}

export default Layout