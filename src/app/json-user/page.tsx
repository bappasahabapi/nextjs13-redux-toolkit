

import Link from 'next/link'
import React from 'react'



const JsonUser = async() => {

  type jsonUser={
    
    id:string | number;
    name:string;
  }

    const response =await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const users:jsonUser =data[0]


  return (
    <>
    <h1 style={{textAlign:'center'}}>This is json user data fetching page</h1>
    
    <Link href='/'><button>Home</button></Link>
     <p> userId: <b>{users.id} || </b> {" "}Name: <b>{users.name}</b> </p>
     {/* {
      users.map((user)=>{
        <span>{user.name}</span>
      })
     } */}
      
    </>
  )
}

export default JsonUser