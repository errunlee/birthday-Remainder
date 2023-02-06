import React, { useState } from "react";
import Birthdayitem from './Birthdayitem'

export default function Birthdays() {
  const birthdaysArr = [
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
  let count=0;
  birthdaysArr.forEach((item)=>{
    const date = new Date();
      const itemDate = new Date(item.dob);
      if (date.getMonth() === itemDate.getMonth()) {
       count++;
      }
  })
  return (
  <div>
    <h2 style={{"margin":"0 0 26px 0"}}>{count} birthdays today</h2>
  {birthdaysArr.map((item) => {
    const date = new Date();
    const itemDate = new Date(item.dob);
    const age = date.getFullYear() - itemDate.getFullYear();
    if (date.getMonth() === itemDate.getMonth()) {
      return <Birthdayitem key={item.name+item.dob} name={item.name} age={age} src={item.image}/>
    }
  })}
    <div className="btncontainer">
    <button className='view-btn'>View All</button>
    </div>
    </div>
  )
}