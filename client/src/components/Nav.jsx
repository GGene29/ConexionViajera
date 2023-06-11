

function Nav() {
    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div>
                        <img src="#" alt="Logo"/>
                    </div>
                    <div className="flex my-auto p-2">
                        <a href="#" className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:text-green-500">INICIO</a> 
                        <a href="#" className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:text-green-500">ACERCA DE</a> 
                        <a href="#" className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:text-green-500">SITIOS</a> 
                        <a href="#" className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:text-green-500">RESEÑAS</a> 
                    </div>
            </nav>
        </div>
    )
    }

export default Nav
