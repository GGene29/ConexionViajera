import { useEffect, useState } from "react"
import FounderCard from "./FounderCard"

function Founders() {
    
    const [founders, setFounders] = useState([])

    useEffect(() => {
        const searchFounders = () => {
            fetch('/public/json/founders.json')
                .then(data => data.json())
                .then(res => setFounders(res))
                .catch(err => console.log(err))
            
        }

        searchFounders();
    }, [])

    return (
        <>
            <section className="container flex justify-around my-5">
                <div className="grid grid-cols-2 gap-32 my-5">    
                    { founders.map( founder => <FounderCard key={founder.id} nombre={founder.nombre} rol={founder.rol}/>)}
                </div>
            </section>
        </>

    )
}

export default Founders