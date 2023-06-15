// Importacion de Componentes
import Target from "../components/Target"
import Goals from "../components/Goals"
import Vision from "../components/Vision"



const Home = () => {
    return (
        <>
            <div className="card">
                <Target />
            </div>
            <div className="card">
                <Goals />
            </div>
            <div className="card">
                <Vision />
            </div>
        </>
    )
}

export default Home