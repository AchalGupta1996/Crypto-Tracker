import React from 'react'
import * as XLSX from 'xlsx'

export default function Coins(props) {


    // const removeFromXlsx = [supply];

    function exportdata(){

        const tableData = props.sear?.map(row => {
            delete row.supply
            delete row.explorer
            delete row.vwap24Hr

            
            return row
        })


        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "MYSavedData.xlsx");
    }

    let changes=document.querySelectorAll('.change');
    for(let i=0;i<=changes.length;i++){
        if(changes[i]?.innerText<0)
        {
            changes[i].style.color='red';
        }
        else if(changes[i]?.innerText>0)
        {
            changes[i].style.color='green';

        }
       
    }
    // console.log(props.coinsprop.data)
  return (
    <div className='container'>

        <button className='export' onClick={exportdata}>Export Data  <img className='exportimage' src="https://www.clker.com/cliparts/6/B/W/l/y/3/small-down-arrow-md.png"/></button>
        <table>
            <thead>
                <tr>
                    <th>Rank#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price (USD)</th>
                    <th>Change %(24 HR)</th>
                    <th>Market Cap(USD)</th>
                </tr>
            </thead>
                {
                props.sear?.map((val, keyindex) => 
                     ( <tbody key={val.id}>
                        <tr  className='line'>
                            <td className='coin-row'>{val.rank}</td>
                            <td className='coin-row'>{val.id}</td>
                            
                            <td className='coin-row'>{val.name}</td>
                            <td className='coin-row'>{val.symbol}</td>
                            <td className='coin-row'>{Math.round(val.priceUsd*1000)/1000}</td>
                            <td className='coin-row change'>{Math.round(val.changePercent24Hr*1000)/1000}</td>
                            <td className='coin-row'>{Math.round(val.marketCapUsd*1000)/1000}</td>

                        </tr>
                        </tbody>
                    )
                    
                )

                }

               
            </table>
    </div>
  )
}
