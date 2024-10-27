

const Card = ({data,handleChoosePlayer}) => {
    const {playerId,name,country,image,price,role,expertise,type}= data;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-gray-300">
                <figure className="px-5 pt-5">
                    <img 
                        src={image}
                        alt="Shoes"
                        className="rounded-xl " />
                </figure>
                <div className="p-5 flex gap-4">
                    <div className=""><img className="max-w-full" src="assets/Group.png" alt="" /></div>
                    <div className=""><p className="text-xl">{name}</p></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="px-5 flex gap-2">
                        <div className=""><img className="max-w-full" src="assets/Vector.png" alt="" /></div>
                        <div className=""><p>{country}</p></div>
                    </div>
                    <div className="pr-5"><button className="btn">{type}</button></div>
                </div>
                <hr />
                <div className="flex justify-between p-5">
                    <div className="font-bold text-sm space-y-3">
                        <p>Rating</p>
                        <p>{role}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className="">
                        <p className="text-center text-sm pt-6">{expertise}</p>
                        <button onClick={()=>handleChoosePlayer(price,data)} className="btn">Choose Player</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;