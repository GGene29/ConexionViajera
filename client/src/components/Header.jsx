

function Header() {
    
    return (
        <>
            <h1 className="text-6xl font-extrabold text-gray-100">TURISMO<span className="text-green-500 hover:text-gray-100 cursor-pointer transition-all"> ECOLOGICO</span></h1>
            <img src="/public/img/Sanjuan.jpeg" alt="Fondo" className='w-full'/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000000" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,165.3C1120,160,1280,224,1360,256L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        
        </>
    )

}

export default Header;