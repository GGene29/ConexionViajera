// Importaciones
import { useEffect, useState } from "react";
import Valor from "../components/Valor.jsx";
import Founders from "../components/Founders.jsx";

const About = () => {

    const [valores, setValores] = useState([])

    useEffect(() => {
        const searchValores = () => {
            fetch('/public/json/valores.json')
                .then(data => data.json())
                .then(res => setValores(res))
                .catch(err => console.log(err))
            
        }

        searchValores();
    }, [])
    
    return (
        <>
            {/* Imagen de la empresa */}
            <div className="w-full flex justify-center my-5">
                <img src="/public/img/conexion-viajero-jgr.png" alt="" className="w-5/6"/>
            </div>

            {/* Valores */}
            <div className="w-full flex my-5">
                {/* Imagen */}
                <div className="section-valores w-1/2" style={{height: '550px'}}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-rotate-90 h-20">
                        <path fill="#0099ff" fill-opacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
                    </svg> */}
                </div>

                {/* Valores */}
                <div className="h-1/2 bg-green-600 w-1/2 flex flex-col content-center text-white" style={{height: '550px'}}>
                    <div className="w-5/6 mx-auto py-10">
                        <div className="text-white my-5">
                            <h2 className="text-6xl font-bold">VALORES</h2>
                        </div>
                        
                        <div>
                            <ul className="list-disc">
                                { valores.map( valor => <Valor key={valor.id} valor={valor.value}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5">
                <div className="w-full">
                    <h2 className="ml-10 font-bold text-6xl">FUNDADORES</h2>
                </div>
                
                <div>
                    <Founders/>
                </div>
            </div>

        </>
    )
}

export default About