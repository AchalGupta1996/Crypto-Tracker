import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import Coins from './components/Coins'
import Navbar from './components/Navbar';

function App() {

  let [coins,setCoins]=useState([]);
  let [searchcoins,setSearchcoins]=useState([]);
  setInterval(()=>fetchData(),30000);

  // const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`
  const url=`https://api.coincap.io/v2/assets`;


  async function fetchData() {
    await axios.get(url).then((response)=>{
      setCoins(response.data.data);
      setSearchcoins(response.data.data);
      console.log(response.data.data);

    })
    // let data = await response.data;
  
  }


  useEffect(() => {
    fetchData();
    
  },[]); 




  return (
    <div className="App">
      <Navbar coinsprop={coins} set={setCoins} sear={searchcoins} setsear={setSearchcoins}/>
      <Coins coinsprop={coins} set={setCoins} sear={searchcoins} setsear={setSearchcoins}/>
    </div>
  );
}

export default App;
