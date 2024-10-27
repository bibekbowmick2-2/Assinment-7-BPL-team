const SwitchButton = (props) => {
    const {handleSwitchbutton,switc,player}= props;
    return (
        <div className="max-w-screen-xl mx-auto  grid  grid-cols-3  text-center">
           
            <div className="">
                <button onClick={()=>handleSwitchbutton("available")} className={switc === "available" ? 'btn bg-yellow-300 text-gray-800' : 'btn'}>Available</button>
                <button onClick={()=>handleSwitchbutton("selected")} className={switc === "selected" ? 'btn bg-yellow-300 text-gray-800' : 'btn'}>Selected({player.length})</button>
            </div>
        </div>
    );
};

export default SwitchButton;