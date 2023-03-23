import React from 'react'
import Logo from '../../Images/logoo.png'
import map from '../../Images/map.png'
import pres from '../../Images/photo.png'
export default function Presentation() {
  return (
    <div>
      <div className="hero py-6 bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Logo} className="max-w-sm rounded-lg " alt=''/>
    <div>
      <h1 className="text-4xl font-bold">Union Nationale des Experts Judiciaires (UNEJ)</h1>
      <p className="pt-6 pr-10">L’Union Nationale des Experts Judiciaires Algériens (UNEJ) est née officiellement le 13 février 2017. <br />
Les membres fondateurs de cette union, conscients de l’immense responsabilité de fédérer les experts judiciaires...</p><p className='font-bold'>en savoir plus</p>

    </div>
  </div>
</div>
<div >
<div className="hero py-6  bg-base-100">
  <div className="hero-content text-left">
    <div className="max-w">
      <h1 className="text-4xl font-bold">Union Nationale des Experts Judiciaires de Sidi Bel Abbes (UNEJ-SBA)</h1>
      <p className="py-2">L’Union Nationale des Experts Judiciaires Algériens (UNEJ) est née officiellement le 13 février 2017. <br />
Les membres fondateurs de cette union, conscients de l’immense responsabilité de fédérer les experts judiciaires...</p><p className='font-bold'>en savoir plus</p>
    </div>
  </div>
</div>
</div>
<div>
<div className="hero py-6 bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={map} className="max-w-sm rounded-lg " alt=''/>
    <div>
      <h1 className="text-4xl font-bold">Trouvez nous</h1>
      <p className="pt-6 pr-10">Adresse Bureau UNEJ Sidi Bel Abbès <br /> : Bureau n°19 Boulevard EMIR Abdelkader Bâtiment des 04 Horloges (5ème Etage) – SIDI BEL ABBES <br /> Tel /Fax : 048 74 20 34 N°Mobile : 0557 60 60 42
Ajouté : 17/03/2019 à 11h33</p>
    </div>
  </div>
</div>
</div>
<div>
<div className="hero py-6 bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={pres} className="max-w-sm rounded-lg " alt=''/>
    <div>
      <h1 className="text-4xl font-bold">President unej-sba</h1>
      <p className="pt-6 pr-10">Le president de l’unej sidi bel abbes est Monsieur Ghrib Abdelwahab  ...
en savoir plus</p>
    </div>
  </div>
</div>
</div>
    </div>
 
  )
}
