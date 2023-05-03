import React from "react";

export default function Card({ item, country, img }) {
  return (
    <>
      <div className="card--div">
        <img className="location--img" src={`images/${item.img}`} />
        <div>
          <img className="card--pin" src="images/pin.png" />
          <span className="country" > {item.country}</span>
          <a className="card--mapslink" href={item.maps} >Google Maps Link</a>
          <br/>
          <span className="city" >{item.city}</span>
          <br/>
          <span className="date" >{item.date}</span>
          <br />
          <span className="description" >{item.description}</span>
        </div>
      </div>
    </>
  );
}
