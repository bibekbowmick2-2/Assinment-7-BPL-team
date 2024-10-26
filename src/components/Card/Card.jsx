

const Card = () => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-gray-300">
                <figure className="px-5 pt-5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="p-5 flex gap-4">
                    <div className=""><img className="max-w-full" src="assets/Group.png" alt="" /></div>
                    <div className=""><p className="text-xl">Viral Kohli</p></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="px-5 flex gap-2">
                        <div className=""><img className="max-w-full" src="assets/Vector.png" alt="" /></div>
                        <div className=""><p>India</p></div>
                    </div>
                    <div className="pr-5"><button className="btn">All-Rounder</button></div>
                </div>
                <hr />
                <div className="flex justify-between p-5">
                    <div className="font-bold text-sm space-y-3">
                        <p>Rating</p>
                        <p>Left-Hand-Bat</p>
                        <p>Price: $1500000</p>
                    </div>
                    <div className="">
                        <p className="text-center text-sm pt-6">Left-Hand-Bat</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;