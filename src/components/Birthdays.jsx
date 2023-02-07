import React, { useState } from "react";
import Birthdayitem from './Birthdayitem'

export default function Birthdays({showAll,birthdaysArr}) {
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
  {birthdaysArr.slice(0,!showAll?6:birthdaysArr.length).map((item) => {
    const date = new Date();
    const itemDate = new Date(item.dob);
    const age = date.getFullYear() - itemDate.getFullYear();
    if (date.getMonth() === itemDate.getMonth()) {
      return <Birthdayitem key={item.name+item.dob} name={item.name} age={age} src={item.image}/>
    }
  })}
   
    </div>
  )
}