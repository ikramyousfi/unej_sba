/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './styles.css'




function Orders() {

  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

 
  const [imagee, setImagee] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);
 


  useEffect(() => {
    fetch("http://127.0.0.1:8000/adhesion-all")
      .then((response) => response.json())
      .then((data) => {
        const totalOrders = data;
        setOrders(totalOrders);
        const urls = data.map((item) => item.photo);
        setImagee(urls);
      })
      .catch((error) => console.error(error));
  }, [page, triggerFetch]);



    return (
      <div className="dashboard-content">
       
          <div className="dashboard-content-container">
            <div className="dashboard-content-header">
              <p>Adherents</p>
            </div>

            <table>
              <thead>
                <th>Photo de profil</th>
                <th>nom</th>
                <th>prenom</th>
                <th>email</th>
                <th>phone number</th>
                <th>date de naissance</th>
                <th>adresse</th>
              </thead>

              {orders.length !== 0 ? (
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>
                     
                        {imagee[index] && (
                        <img src={imagee[index]} alt={order.name} />
                      )}
                      
                  
                      </td>
                      <td>
                        <span>{order.nom}</span>
                      </td>
                      <td>
                        <span>{order.prenom}</span>
                      </td>
                      <td>
                        <span>{order.email}</span>
                      </td>
                      <td>
                        <span>{order.phone_number}</span>
                      </td>
                      <td>
                        <span>{order.dateNaissance}</span>
                      </td>
                      <td>
                     
                        <span>{order.adresse} </span>    </td>
<td>

</td>
                   </tr>
                    
                  ))}
                </tbody>
              ) : <p>No data was found</p> }
            </table>

         
               
            </div>
          </div>
    )
                        }


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default Orders;
