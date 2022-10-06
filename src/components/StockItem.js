import React from 'react'
import StockList from './StockList'
import "./stockItem.css"
function StockItem( {data, handleDelete}) {
    console.log(data)
  return (
    <table className='ta'>
        <tbody className='tb'>
            <tr className='tc'>
                <th>
                    <h2 >Description</h2>
                </th>
                <th>
                    <h2>Quantity : pcs</h2>
                </th>
                <th>
                    < h2 className='table'>Price ksh/=</h2>
                </th>
                <th>
                    <h2>Delete</h2>
                </th>
            </tr>
            {data && data.map(item => <StockList key ={item.id} item ={item} handleDelete = {handleDelete}/>)}
        </tbody>
    </table>
  )
}

export default StockItem