// Imports
import { Outlet } from "react-router-dom"

// Components
import Header from "../components/Header.jsx"
import Wave from "../components/Wave.jsx"
import Footer from "../components/Footer.jsx"

const PrincipalLayout = () => {
    return (
        <>
            <Header />
		
			<main className='w-5/6 mx-auto'>
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