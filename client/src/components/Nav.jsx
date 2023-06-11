import React from 'react'

function Nav() {
    return (
        <div>
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div>
                        <img src="#" alt="Logo"/>
                    </div>
                    <div class="flex my-auto p-2">
                        <a href="#" class="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">INICIO</a> 
                        <a href="#" class="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">ACERCA DE</a> 
                        <a href="#" class="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">SITIOS</a> 
                        <a href="#" class="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">RESEÑAS</a> 
                    </div>
            </nav>
        </div>
    )
    }

export default Nav