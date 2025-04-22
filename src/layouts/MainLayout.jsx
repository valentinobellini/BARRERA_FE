// Import functions from React
import { Outlet } from "react-router-dom";

// Import page_main_components
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout() {

    // RENDER
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}