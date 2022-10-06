import React from 'react'
import { useState } from 'react'
import "./search.css"


function SearchBar({stuff, search}) {
  const [add, setAdd] = useState(
    {
    description: "",
    price: "",
    quantity: ""
  })
function handleChange (e) {
  e.preventDefault()
setAdd({...add, [e.target.name]: e.target.value})
}
function handleSubmit(e) {
  e.preventDefault()
  fetch("http://localhost:3000/stock",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(add)
  })
  .then(res => res.json())
  .then(res => stuff(res))
}

const [get, setSearch] = useState("")

function getItem (event) {
  setSearch([event.target.value])
  search(get)
}


  return (
    <div >
      <form className='sb'>
        <input type="text" placeholder='search' onChange={getItem}></input>
      </form>
      <form className='svg'>
        <input type= "text" name='description' placeholder='description' value={add.description} onChange={handleChange}></input>
        <input type= "number" name='quantity' placeholder='quantity' value={add.quantity} onChange={handleChange}></input>
        <input type= "number" name="price" placeholder='price' value={add.price} onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit} className='xy'>Add an Item</button>
      </form>
    </div>
  )
}

export default SearchBar