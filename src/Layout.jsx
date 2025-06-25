import Header from './Components/Header/Header'
//import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <div className="ml-16 lg:ml-40">
    <Outlet />
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Layout