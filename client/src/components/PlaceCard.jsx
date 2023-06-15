const PlaceCard = ({place}) => {
    const {title, description, img} = place;
    return (
        <>
            <div className="w-full bg-white shadow-xl rounded-lg">
                <img src={img} alt="" className="rounded-t-lg h-52 w-full"/>

                <p className="p-2 m-2 font-bold">{title}</p>
            </div>
        </>
    )
}

export default PlaceCard