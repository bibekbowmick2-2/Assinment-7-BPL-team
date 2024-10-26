import Card from "../Card/Card";

const Cards = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mb-[100px] ">
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
        </div>
    );
};

export default Cards;