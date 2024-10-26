
const Subcribe = () => {
    return (
        <div className="max-w-screen-lg mx-auto relative h-[300px] border-2 border-gray-300 p-5 rounded-lg my-5">
            <div className="w-full h-full"><img className="w-full h-full rounded-lg"src="assets/bg-shadow.png" alt="" /></div>
            <div className="hero absolute top-0 bottom-0 left-0 right-0">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="py-6">
                        Get the latest updates and news right in your inbox!
                        </p>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;