import React from 'react'
import "./search.css"
function SearchBar() {
  return (
    <div className='a6'>
        <form className='sb'>
            <input type = "text" placeholder='search'></input>
            <button type='sumbit' className='btn'><img className='img' src ="../assets/search.svg"/></button>
        </form>
        <form className='svg'>
            <input type text name='description' placeholder='description'></input>
            <input type text name='quantity' placeholder='quantity'></input>
            <input type text name ="price" placeholder='price'></input>
<button type ="submit">Add an Item</button>
        </form>
    </div>
  )
}

export default SearchBar