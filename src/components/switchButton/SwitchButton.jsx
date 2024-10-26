const SwitchButton = () => {
    return (
        <div className="max-w-screen-xl mx-auto  grid grid-cols-3 text-center">
            <div className="text-left">
                <h1 className="text-lg">Available Player</h1>
            </div>
            <div className="">
                <button className="btn bg-yellow-300 text-gray-800">Available</button>
                <button className="btn">Selected(0)</button>
            </div>
        </div>
    );
};

export default SwitchButton;