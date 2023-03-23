import React from 'react'
import adhesion from '../../Images/adhesion.png'
import { Link } from 'react-router-dom'
export default function Adhesion() {

  return (
    <div>
<div className="hero mt-20 mb-20" >
    <img src={adhesion} alt="" />
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-right text-white">
    <div>
      <h1 className=" text-5xl font-bold">Soumettez votre adhésion à UNEJ-SBA</h1>
      <p className="mb-5 text-black">Rejoignez nous</p>
      <Link className='btn btn-primary' to='Adhesions'>Deposer ici</Link>
    </div>
  </div>
</div>
    </div>
  )
}
