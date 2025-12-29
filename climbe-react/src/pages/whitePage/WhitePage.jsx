import { Outlet } from "react-router-dom"
import Header from "../../assets/ui/header/Header"
import Footer from "../../assets/ui/footer/Footer"

const WhitePage = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer/>
    </>
  )
}

export default WhitePage