import React from 'react'
import StockItem from './StockItem'
import "./stockItem.css"
function StockList({item, handleDelete}){
    return(
            <tr key = {item.id} >
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <tr className='tr'><button className='delbtn' onClick={()=>{handleDelete(item.id)}}>x</button></tr>
            </tr>
       

            
        




    )
}

export default StockList