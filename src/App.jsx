import './App.css'
import { useState,useEffect } from 'react'
import Birthdays from './components/Birthdays'
export default function App() {
  let birthdays=[
    {
      "name": "Arun Khatri",
      "dob": "2010-02-01",
      "image":"https://source.unsplash.com/random/40x40/?man,hero"
    },
    {
      "name": "Karun Chetri",
      "dob": "2016-10-02",
      "image":"https://source.unsplash.com/random/40x40/?man,woman"
    },
    {
      "name": "Rarun Kumar",
      "dob": "2013-02-03",
      "image":"https://source.unsplash.com/random/40x40/?designer,hollywood"
      
    },
    {
      "name": "Larun Dojo",
      "dob": "2018-02-03",
      "image":"https://source.unsplash.com/random/40x40/?car,hero"
    },
    {
      "name": "Varun Dhawan",
      "dob": "2010-02-03",
      "image":"https://source.unsplash.com/random/40x40/?girl,hero"
      
    },
    {
      "name": "Varun Dhawan 1",
      "dob": "2010-02-03",
      "image":"https://source.unsplash.com/random/40x40/?girl,hero"
      
    },
    {
      "name": "Varun Dhawan 2",
      "dob": "2010-02-03",
      "image":"https://source.unsplash.com/random/40x40/?girl,hero"
      
    },
    {
      "name": "Searun Linda",
      "dob": "2011-02-03",
      "image":"https://source.unsplash.com/random/"      
    },
    {
      "name": "Qarun Gaitonde",
      "dob": "2000-10-04",
      "image":"https://source.unsplash.com/random/"      
    }
  ]
  let [data,setData]=useState(birthdays)
  
  let [showAll,setShowAll]=useState(false)
  let [button,setButton]=useState(true)
  const handleMore=()=>{
    setShowAll(true)
    setButton(false)
  }
  const handleLess=()=>{
    setShowAll(false)
    setButton(true)
  }
  const handleClear=()=>{
    setData([]);
     
  }
  return (
    <main>
      <div className='wrapper'>
      <div className='container'>
        <Birthdays birthdaysArr={data}showAll={showAll}/>
      </div>
         <div className="btncontainer">
   { data.length>0 && <button onClick={button?handleMore:handleLess} className='view-btn'>{button?'View All':'View less'}</button>}
    <button className='clear-btn' onClick={handleClear}>Clear All</button>
    </div>
        </div>
    </main>
  )
}
