import React, { useEffect, useState } from 'react'
import CardAPI from './CardAPI'
import "./style.css";
import axios from "axios";

const AppAPI = () => {
    const[users,setUsers] =useState([]);
    useEffect (()=>{
           async function fetchData(){
                // let res =await fetch('https://dummyjson.com/users');
                // let data =await res.json();
                // console.log(data.users);

                let res =await axios.get('https://dummyjson.com/users');
                console.log(res.data.users);

                setUsers(res.data.users);
            }
            fetchData();
    }, [])

  return (
    <>
       <h2>Users Page</h2>
       {users.map ((item, ind)=>{
       return <CardAPI key={ind} user={item}/>
       })}
    </>
  )
}

export default AppAPI