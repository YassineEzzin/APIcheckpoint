import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'


function UserListe() {
  const [ndata,setNdata]=useState([])

 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then( user => {setNdata(user.data)} )
  .catch(err=>console.log(err))
 }
 
 )
  

  return (
    <div  className='userListe'  >
                 {ndata.map((el) => <User el={el} key = {el.id}/>)}
    </div>
  )
}

export default UserListe
