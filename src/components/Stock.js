import React from 'react'
import StockItem from './StockItem'
import SearchBar from './SearchBar'
import {useEffect, useState} from "react"
function StockContainer() {
const [display, setDisplay]= useState()
  useEffect (()=>{
    fetch("http://localhost:3000/stock")
    .then(res => res.json())
    .then(setDisplay)
  },[])

  function handleDelete (id) {
    setDisplay(value => value.filter(val => id !== val.id))
    fetch(`http://localhost:3000/stock/${id}`,{
      method: "DELETE"
    })
  }

  console.log(display)

  function  search (x) {
setDisplay(display => display.filter(val => val.description.startsWith(x)))
  }
  
  return (
    <div>
      <SearchBar stuff ={setDisplay} search ={search} />
      <StockItem  data ={display} handleDelete={handleDelete}/>

    </div>
  )
}

export default StockContainer