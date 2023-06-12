

function Footer() {
    return (
        <div className='bg-gray-900'>
            <footer className="px-5 py-5">
                <div className='flex justify-between'>
                    <div className="font-bold text-gray-100">
                        <p>CONOCE TU <br/>PRÓXIMO<span className="text-green-500"> DESTINO</span></p> 
                    </div>
                    <div className="flex justify-around text-gray-100 w-24">
                        <a href="#" className="hover:text-green-500 hover:underline" target="_blank">
                            <img src="./src/assets/facebook.svg" alt="Facebook" width={"30px"}/>
                        </a>
                        <a href="#" className="hover:text-green-500 hover:underline" target="_blank">
                            <img src="./src/assets/instagram.svg" alt="Instagram" width={"30px"}/>
                        </a>
                    </div>    
                </div>
                <div>
                    <span className="text-gray-100">Grupo 1 - Control de Proyecto</span>
                </div>
            </footer>
        </div>

    )
}

export default Footer