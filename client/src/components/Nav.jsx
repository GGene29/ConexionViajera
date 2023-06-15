// Importaciones
import { Link } from "react-router-dom"


function Nav() {
    return (
        <div>
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 w-5/6">
                    <div className="w-1/4">
                        {/* <img src="/public/img/Sanjuan.jpeg" width='150' alt="Logo" className="w-1/12"/> */}
                        <Link to={'/'}>
                            <img src="/public/img/logonegro.png" width='80' alt="Logo"/>
                        </Link>
                    </div>
                    <div className="flex justify-center my-auto p-2 w-1/2">
                        <Link 
                            to={'/'} 
                            className="transition-all mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-green-500 hover:underline">
                                INICIO
                        </Link>
                        <Link 
                            to={'/about'} 
                            className="transition-all mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-green-500 hover:underline">
                                ACERCA DE
                        </Link>
                        <Link 
                            to={'/sites'} 
                            className="transition-all mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-green-500 hover:underline">
                                SITIOS
                        </Link>
                        <Link 
                            to={'/reviews'} 
                            className="transition-all mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-green-500 hover:underline">
                                RESEÑAS
                        </Link>
                    </div>
            </nav>
        </div>
    )
    }

export default Nav
