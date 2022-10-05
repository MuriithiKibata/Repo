import React from 'react'
import StockList from './StockList'
import "./stockItem.css"
function StockItem() {
  return (
    <table className='t1'>
        <tbody className='t2'>
            <tr className='t3'>
                <th>
                    <h2 className='table'>Description</h2>
                </th>
                <th>
                    <h2 className='table'>Quantity</h2>
                </th>
                <th>
                    < h2 className='table'>Price</h2>
                </th>
            </tr>
            <StockList />

            {/*Map the table data here */}
        </tbody>
    </table>
  )
}

export default StockItem