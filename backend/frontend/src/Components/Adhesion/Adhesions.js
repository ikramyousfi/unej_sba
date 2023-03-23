import React ,{ useState } from 'react';
import axios from 'axios';



function Adhesions() {

  const [showForm1, setShowForm1] = useState(false);
  // const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const showmeForm1 = () => {
    // setShowForm2(false);
    setShowForm1(true);
    setShowForm3(false);
  }
  // const showmeForm2 = () => {
  //   setShowForm1(false);
  //   setShowForm2(true);
  //   setShowForm3(false);
  // }
  const showmeForm3 = () => {
    setShowForm1(false);
    // setShowForm2(false);
    setShowForm3(true);
  }
  

  // const data = {
  //   username: 'admin',
  //   password: 'admin'
  // };
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [nomArabe, setNomArabe] = useState('');
  const [prenomArabe, setPrenomArabe] = useState('');
  const [phone, setPhone] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [communes, setCommunes] = useState('');
  const [adresse, setAdresse] = useState('');
  const [photo, setPhoto] = useState('');
  const [dp, setDiplome] = useState('');
  const [recuPaiement, setRecuPaiement] = useState('');
  
  const data = new FormData();
  data.append('nom', nom);
  data.append('prenom', prenom);
  data.append('nomArabe', nomArabe);
  data.append('prenomArabe', prenomArabe);
  data.append('email', email);
  data.append('phone', phone);
  data.append('dateNaissance', dateNaissance);
  data.append('communes', communes);
  data.append('adresse', adresse);
  data.append('photo', photo);
  data.append('dp', dp);
  data.append('recuPaiement', recuPaiement);
  
  function handleChange(event) {
    setPhoto(event.target.files[0]);
  }
  
  function handleChange1(event) {
    setDiplome(event.target.files[0]);
  }
  
  function handleChange2(event) {
    setRecuPaiement(event.target.files[0]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/adhesion', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }

    return (
      <div>
        <h1 className="mb-5 text-5xl font-bold text-center">Soumettez votre adhésion à UNEJ-SBA</h1>
        <div className="btn-group flex flex-row items-center justify-center">
         <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm1()}>General</button>
         {/* <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm2()}>Professional</button> */}
         <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm3()}>Scan docs</button>
        </div>
        
        {showForm1 && <form  >
        <div className="form-control mt-5 ">
         <label className="input-group grid grid-cols-2 ">
         
          <input type="text" placeholder="Votre nom" name="nom" id="nom" onChange={e => setNom(e.target.value)} className="input input-bordered ml-5 mb-3" />
          <input type="text" placeholder="votre prenom" name="prenom" id="prenom" value={prenom} onChange={e => setPrenom(e.target.value)}  className="input input-bordered ml-5 mb-3"  />
          <input type="text" placeholder="Nom en Arabe" name="nomArabe" id="nomArabe" value={nomArabe} onChange={e => setNomArabe(e.target.value)} className="input input-bordered ml-5 mb-3"  />
          <input type="text" placeholder="Prenom en Arabe" name="prenomArabe" id="prenomArabe" value={prenomArabe} onChange={e => setPrenomArabe(e.target.value)} className="input input-bordered ml-5 mb-3"  />
          <input type="email" placeholder="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered ml-5 mb-3" />
       
          <input type="tel" placeholder="n telephone" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="input input-bordered ml-5 mb-3"  />
          <input type="date" placeholder="date de naissance"  name="dateNaissance" id="dateNaissance" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} className="input input-bordered ml-5 mb-3"  />
          
          <input type="text" placeholder="commune de naissance" name="communes" id="communes" value={communes} onChange={e => setCommunes(e.target.value)} className="input input-bordered ml-5 mb-3"  />
          <input type="text" placeholder="adresse exacte" name="adresse" id="adresse" value={adresse} onChange={e => setAdresse(e.target.value)} className="input input-bordered ml-5 mb-3"  />
         </label>
        </div>
       
        
        </form>}
        {/* {showForm2 && <form>
        <div className="form-control mt-5 ">
         <label className="input-group grid grid-cols-2 ">
         <input type="text" placeholder="Domaine" className="input input-bordered ml-5 mb-3" />
          <input type="text" placeholder="Specialite" className="input input-bordered ml-5 mb-3"  />
          <input type="text" placeholder="Diplome" className="input input-bordered ml-5 mb-3" />
          <input type="text" placeholder="Experience Professionelle" className="input input-bordered ml-5 mb-3"  />
          </label>
        </div>
        </form>} */}
        {showForm3 && <form onSubmit={handleSubmit} >
        
        <div className="form-control mt-5 ml-5">
         <label className="input-group grid grid-cols-2 ">
         
          <label >Photo d'identite 
          <input type="File" placeholder="photo d'identite" name="photo" onChange={handleChange} className="input ml-5 mb-3"  />
          </label>
          <label >Diplome
          <input type="File" placeholder="Diplome" name="dp" id="dp" onChange={handleChange1} className="input ml-5 mb-3" />
          </label>
          <label>Recu de paiement
          <input type="File" placeholder="Recu de paiement" name="recuPaiement"  onChange={handleChange2} className="input ml-5 mb-3"  />
          </label>
         </label>
        </div>
        
        <br/>
        <button className="btn  bg-primary text-black border-none">Submit</button>
        <br/>
        </form>}
        <br/>
        <p className='ml-5'>** <br />
   N° Compte-RIB- : 001 00774 0200 000 530- 61 <br />
   ouvert au nom de : Union National des Experts Judiciaires <br />
   la somme de : 10 000,00 DA</p>
      </div>
      
    )
}

export default Adhesions;