const Header = (props) => {
    const {money}= props
    return (
        <div className="max-w-screen-xl mx-auto pt-12 pb-5 flex justify-between">
            <div className="">
                <img src="assets/logo.png" alt="" />
            </div>
            <div className="flex space-x-12 items-center">
                <p>Home</p>
                <p>Picture</p>
                <p>Teams</p>
                <p>Schedules</p>
               <button className="btn">{money} Coin <img src="assets/dollar.png" alt="" /></button>
            </div>
        </div>
    );
};

export default Header;