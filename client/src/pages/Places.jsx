import { useEffect, useState } from "react"
import PlaceCard from "../components/PlaceCard"


const Places = () => {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        const searchPlaces = () => {
            fetch('/public/json/places.json')
                .then(data => data.json())
                .then(res => setPlaces(res))
                .catch(err => console.log(err))
            
        }

        searchPlaces();
    }, [])


    return (
        <>
            <div className="w-full">
                <div className="w-4/6 h-96 mx-auto bg-green-500 rounded-lg flex p-7 justify-between content-center shadow-2xl my-10">    
                    <div className="w-4/6 h-full">
                        <img className="rounded-lg w-5/6 h-full mx-auto" src="/public/img/places/morros.jpg" alt=""/>
                    </div>

                    <div className="w-2/5 h-full flex flex-col justify-evenly">
                        <div className="bg-black rounded-full font-bold text-white w-24 text-center p-2">
                            <p>
                                Popular
                            </p>
                        </div>

                        <div className="w-full text-white text-6xl font-bold">
                            <h2>
                                Los Morros
                            </h2>
                        </div>

                        <div className="w-full text-white">
                            <p>
                            El Monumento Natural Arístides Rojas, conocido como Los Morros de San Juan, es un sistema de roca caliza formado por la deposición de sedimentos marinos ubicado en los alrededores de San Juan de los Morros.
                            </p>
                        </div>
                    </div>
                </div>  

                <hr className="my-10"/>

                <div className="container flex justify-around my-10 w-full">
                    <div className="grid grid-cols-3 gap-20 my-5 mx-auto w-5/6">    
                        {places.map( place => <PlaceCard key={place.id} place={place}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Places