import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    return(
        <>
            <Sidebar/>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
        </>
    )
}

export default Layout