import React from 'react'

function Target() {
    return (
    <main className="bg-white px-10 py-5">    
        <section className="flex justify-center">
            <div className="grid grid-cols-3 gap-6">    
                <div className="w-52 h-52 bg-white shadow-xl py-8 px-6 flex flex-col justify-center text-center text-green-600 text-2xl font-bold">
                    <img className='mx-auto my-2' src="./src/assets/arbol.svg" alt="Arbolito" width={'45px'}/>
                    <h3>Ecologia</h3>
                </div>
                <div className="w-52 h-52 bg-white shadow-xl py-8 px-6 flex flex-col justify-center text-center text-green-600 text-2xl font-bold">
                    <img className='mx-auto my-2' src="./src/assets/manos.svg" alt="Manos" width={'45px'}/>
                    <h3>Compromiso</h3>
                </div>
                <div className="w-52 h-52 bg-white shadow-xl py-8 px-6 flex flex-col justify-center text-center text-green-600 text-2xl font-bold">
                    <img className='mx-auto my-2' src="./src/assets/bombilla.svg" alt="Bombillos" width={'45px'}/>
                    <h3>Innovación</h3>
                </div>
            </div>    
        </section>
    </main>
    )
}

export default Target