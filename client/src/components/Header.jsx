import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import Wave from "./Wave.jsx";

function Header() {
    
    return (
        <>

            <div id="banner-principal" className="flex flex-col justify-between content-center bg-slate-600 w-full">
                <header className="text-white transition-all">
                    <Nav/>
                </header>
                <h1 className="text-6xl font-extrabold text-gray-100 text-end w-5/6 mx-auto">
                    TURISMO
                    <Link to={'/'} className="text-green-500 hover:text-gray-100 cursor-pointer transition-all"> ECOLOGICO</Link></h1>
                <Wave location={'top'} color={'#fff'}/>
            </div>
        </>
    )

}

export default Header;