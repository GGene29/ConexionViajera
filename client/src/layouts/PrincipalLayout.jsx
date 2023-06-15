// Imports
import { Outlet, useLocation } from "react-router-dom"

// Components
import Header from "../components/Header.jsx"
import Wave from "../components/Wave.jsx"
import Footer from "../components/Footer.jsx"

const PrincipalLayout = () => {
	const location = useLocation();
	const { pathname } = location;
	const page = pathname === "/" ? "home" : pathname.replace("/", "");

    return (
        <>
            <Header />
		
			<main className={`w-5/6 mx-auto ${page}`}>
				<Outlet/>
			</main>


			<div className="">
				<Wave location={'top'} color={'#000'}/>
				<Footer />
			</div>
        </>
    )
}

export default PrincipalLayout