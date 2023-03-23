import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Articles() {

  const [posts, setPosts] =useState([])
  useEffect(()=>{
    
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NTA3NjU3LCJpYXQiOjE2NzY5MTU2NTcsImp0aSI6Ijg3MjE0NDRjOTUzNzRkNWM5OGY2MTFkOWUxZjlhNDJiIiwidXNlcl9pZCI6MX0.XSRvDcZoMTeVJp2oN0VpJxCB5AgdU1ag-jOvRTLW7uA';
    axios.get('http://127.0.0.1:8000/api/article',{
   
    })
    .then(res =>{
        console.log(res)
        setPosts(res.data)
        
      
      })
    .catch(err=>{console.log(err)})
    
  })


return (
<div>
  <h1 className="mb-5 text-5xl font-bold text-center m-5">Articles</h1>
  <div className='carousel rounded-box'>
    { posts.map(post=> (
      <div id="slide1" className="carousel-item ">
        <div className="card w-96 bg-base-200 shadow-xl m-5 ">
            <figure>
                <img src={'http://127.0.0.1:8000'+post.photo} alt="img"/>
                {console.log('http://127.0.0.1:8000'+post.photo)}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>
                   {post.description}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
      </div>   
    ))} 
  </div>
</div>
)
}
