import React from 'react';
import unej from '../../Images/People.png'
import { Link } from 'react-router-dom';
export default function Container() {
 
  return (
    <div>
<div className="hero" >
    <img src={unej} alt="" />
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 text-5xl font-bold">Union Nationale des Experts Judiciaires</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene.<strong><Link to='Presentation'>en savoir plus</Link></strong></p>

 
    </div>
  </div>
</div>
    </div>
  )
}
