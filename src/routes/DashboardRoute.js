import { Navbar } from "../components/Navbar"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<HomePage />}/>
                <Route path="acerca" element={<AboutPage />}/>
            </Routes>
        </>
    )
}