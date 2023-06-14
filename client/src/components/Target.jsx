import React from 'react'

function Target() {
    return (
    <main className="bg-white px-10 py-5">    
        <section className="flex justify-center">
            <div className="grid grid-cols-3 gap-6">    
                <div className="bg-white shadow-lg py-8 px-6">
                    <img src="./src/assets/arbol.svg" alt="Arbolito"/>
                    <h3>Ecologia</h3>
                </div>
                <div className="shadow-lg bg-white py-8 px-6">
                    <img src="./src/assets/manos.svg" alt="Manos"/>
                    <h3>Compromiso</h3>
                </div>
                <div className="shadow-lg bg-white py-8 px-6">
                    <img src="./src/assets/bombilla.svg" alt="Bombillos"/>
                    <h3>Innovación</h3>
                </div>
            </div>    
        </section>
    </main>
    )
}

export default Target