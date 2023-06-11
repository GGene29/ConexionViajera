import React from 'react'

function Target() {
    return (
    <main className="bg-white px-10 py-5">    
        <section className="flex justify-center">
            <div className="space-y-5">    
                <div className="bg-white shadow-lg justify-items-center">
                    <img src="./src/assets/arbol.svg" alt="Arbolito"/>
                    <h3>Ecologia</h3>
                </div>
                <div className="shadow-lg bg-white">
                    <img src="./src/assets/manos.svg" alt="Manos"/>
                    <h3>Compromiso</h3>
                </div>
                <div className="shadow-lg bg-white">
                    <img src="./src/assets/bombilla.svg" alt="Bombillos"/>
                    <h3>Innovación</h3>
                </div>
            </div>    
        </section>
    </main>
    )
}

export default Target