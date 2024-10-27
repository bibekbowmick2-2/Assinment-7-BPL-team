import Card from "../Card/Card";

const Cards = (props) => {
    const {data,handleChoosePlayer}=props;
    return (
        <>
        <div className="">
                <h1 className="text-lg ml-28">Available Player</h1>
            </div>
        <div className="  max-w-screen-xl mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mb-[100px] ">

        {
            data.map((d) => (
            <Card key={d.playerId} data={d} handleChoosePlayer={handleChoosePlayer}  />
          ))
        }
           
        </div>
        </>
    );
};

export default Cards;