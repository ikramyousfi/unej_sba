import React, { useState } from 'react';
import { api } from '../../axiosConfig';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('login', { username, password })
      .then(response => {
        console.log("Successfully Logged in ");
        window.location = "/";
      })
      .catch(error => {
        const errorMessage = error.response.data.detail;
        setErrorMessage(errorMessage);
        console.log(error.response.data.detail);
        
      });
  }
  
  return ( 
    <div className='m-10'>
      <h1 className="mb-5 text-5xl font-bold text-center">Login</h1>
      {errorMessage && <div className="alert alert-danger" >{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-control mt-5">
          <label className='input-group flex flex-col items-center justify-center'>
            <label>
              <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Votre username" className="input input-bordered ml-5 mb-3" required/>
            </label>
            <label>
              <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="votre mot de passe" className="input input-bordered ml-5 mb-3" required />
            </label>
            <button className="btn bg-primary text-black border-none">Submit</button>
          </label>
        </div>
      </form>
    </div>
  );
}
 
export default Login;
