
import './App.css'
import Header from './components/header/header'
import Banner from './components/Banner/Banner'
import SwitchButton from './components/switchButton/SwitchButton'
import Cards from './components/Cards/Cards'
import Subcribe from './components/Subscribe/Subcribe'
import Footer from './components/Footer/Footer'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import  { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [data, setData] = useState([]);
  const [money, setMoney] = useState(0);
  const [switc, setSwitc] = useState("available");
  const [player, setPlayer] = useState([]);


  


  
  useEffect(() => {
    
    fetch('./api.json')
    .then(res => res.json())
    .then(data =>{
      
       setData(data)
    })
  },); 



  const claimFreeCredit = (value) => {
    setMoney(money+value);
    toast.success("Added Credit Successfully")
  };


  const handleSwitchbutton = (value) => {
    setSwitc(value);
  };


  const handleChoosePlayer = (value,each_player) => {


    if(player.length>=6)
    {
      toast.error("Can Not add 7 players");
      return;
    }


    if (player.some((p) => p.playerId === each_player.playerId)) {

      toast.warning("player already selected");
      return;
    }

    if(money && money>value ){
      
      setMoney(money-value);

      const new_player = [...player,each_player];

      

      setPlayer(new_player);
      toast.success("Added Player Successfully")


    }
    else{
      toast("Insufficient Money")
    }
    
  };


  
  const handleDelete = (playerIda) => {
   
    const filtered_player = player.filter(p => p.playerId!==playerIda);
    setPlayer(filtered_player);
    toast.error("Player Deleted Successfully");
  };


  
  
  
      


 
  return (


  
 
    
    <>


  <ToastContainer
    autoClose={1300}
    theme="dark"
  />


     <Header money={money}></Header>
     <Banner  claimFreeCredit={claimFreeCredit}  ></Banner>
     <SwitchButton  handleSwitchbutton={handleSwitchbutton} switc={switc}  player={player}></SwitchButton>
     <div className='h-[1800px]'>

     
     {switc === "available" ? <Cards data={data} handleChoosePlayer={handleChoosePlayer} ></Cards> : <SelectedPlayer 
     player={player} handleDelete={handleDelete} handleSwitchbutton={handleSwitchbutton} />}
     
     

     </div>
    
     <div className='relative'>
     <Subcribe></Subcribe>
     <Footer></Footer>
     </div>



     
    </>
  )
}

export default App
