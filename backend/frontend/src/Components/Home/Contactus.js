import React from 'react';
import phone from  '../../Images/phone.png'
import mail from  '../../Images/Mail.png'
const Contactus = () => {
    return ( 
        <div>
            <h1 className="m-5 text-5xl font-bold text-center">Contactez-nous!</h1>
            <div className='flex flex-row items-center justify-center mb-5'>
            <img src={phone} alt="" />
            <p className='m-5 text-2xl'>unej.gmail.com</p>
            <img src={mail} alt="" /><p className='m-5 text-2xl'>0553458568348</p>
            </div>
            <form >
            <div className="card shadow-inner ">
          <label className="input-group grid grid-cols-2 ">
          <input type="text" placeholder="Votre nom" className="input input-bordered ml-5 mb-3" required/>
          <input type="text" placeholder="Votre Prenom" className="input input-bordered ml-5 mb-3" required/>
          <input type="email" placeholder="email" className="input input-bordered ml-5 mb-3" required/>
          <input type="text" placeholder="Sujet" className="input input-bordered ml-5 mb-3" required />
          <textarea className="textarea input-bordered ml-5 mb-3" placeholder="Message"></textarea></label>
        </div>
            </form>
        </div>
     );
}
 
export default Contactus;