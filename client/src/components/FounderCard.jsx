const FounderCard = ({nombre, rol}) => {
    return (
        <>
            <div className="shadow-lg border-2 py-5 px-7 rounded-xl w-full flex flex-col justify-center text-center">   
                <img src="/public/img/usuario-generico.png" alt="misión" className="w-24 m-5 shadow-stone-600 rounded-full mx-auto"/> 
                <p className="font-bold">  
                    <h2 className="text-xl">{nombre}</h2> 
                    <br/> {rol}
                </p>
            </div>
        </>
    )
}

export default FounderCard