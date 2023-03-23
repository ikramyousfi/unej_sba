import React from 'react'
import Logo from '../../Images/Logo.png'
import Map from '../../Images/map.png'
import { AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Footer() {
    let iconStyles = { color: "5F8D4E", fontSize: "1.5em" };
  return (
    <div>
        <footer className="footer p-10 bg-base-300 text-base-content mt-20">
  <div>
    <img src={Logo} alt="" /><br />
    <p>L’Union Nationale des Experts <br />Judiciaires Algériens 
    (UNEJ) est <br />née officiellement le 13 février 2017.</p> 
    <p> <AiOutlineMail style={iconStyles}></AiOutlineMail>saasup@gmail.com <br />
mail@saasup.com <br /><br />
<AiOutlinePhone style={iconStyles}></AiOutlinePhone> +987 6541 3654 <br />
+001 6547 6589</p>
  </div> 
  <div>
    <span className="footer-title pb-10" >Pages</span> 
    <li><Link to='/'>Accueil</Link></li>
    <li><Link to='Presentation'>Presentation</Link></li>
      <li><Link to='Project'>Articles</Link></li>
      <li><Link to='Adhesion'>Adhesion</Link></li>
      <li><Link to='Contact'>Contact us</Link></li>
  </div> 
  <div>
    <span className="footer-title">Trouvez nous</span> 
    <div >
        <img src={Map} alt="" />
        <span className='card-title'>Union Nationale des Experts Judiciaires Sidi Bel Abbes</span> 
        <p>Adresse Bureau UNEJ Sidi Bel Abbès : <br /> Bureau n°19 Boulevard EMIR Abdelkader <br />
        Bâtiment des 04 Horloges (5ème Etage) – SIDI BEL ABBES</p>
      </div>
  </div>
</footer>
    </div>
  )
}
