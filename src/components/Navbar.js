import React from 'react'

export default function Navbar(props) {
  console.log(props)


  function searchbycoin(name){
    // console.log(name)
    let tempname=props.coinsprop?.filter((coinname,index)=>{
      return coinname.name.toLowerCase().includes(name.toLowerCase())
    })

    if(name!=="")
    { //console.log(tempname)
        props.set(props.coinsprop);
        props.setsear(tempname);
    }
    else{
      props.set(props.coinsprop);
        props.setsear(props.coinsprop);

    }
    
  }

  function searchProfit(){
    let profit=props.coinsprop?.filter((coinname,index)=>{
      return coinname.changePercent24Hr>0;
    })

    if(profit.length>0){
      props.set(props.coinsprop);
        props.setsear(profit);
    }
    else{
      props.set(props.coinsprop);
        props.setsear(props.coinsprop);

    }
  }


  return (
    <div className='nav'>
            <div className='logo'>
                <h1>CryptoTracker</h1>

            </div>

            <input type="text" placeholder="search coin" className="search" onChange={(event)=>{searchbycoin(event.target.value)}}/>
            <button className='btn' type='text' onClick={searchProfit}>Profit Crypto</button>
    </div>
  )
}
