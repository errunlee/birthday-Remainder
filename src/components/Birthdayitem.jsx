import React, { useEffect, useState } from "react";
export default function Birthdayitem({ name, age,src }) {
  return (
    <>
      <div className="item">
        <img src={src}></img>
        <div className="details">
          <p>{name}</p>
          <p>{age} years</p>
        </div>
      </div>
    </>
  )
}