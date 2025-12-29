import { Outlet } from "react-router-dom"
import Footer from "../../assets/ui/footer/Footer"
import BreadcrumbComponent from "../../components/breadcrumbComponent/BreadcrumbComponent"

const ServicePage = () => {
  return (
    <>
        <BreadcrumbComponent />
        <Outlet />
        <Footer />
    </>
  )
}

export default ServicePage