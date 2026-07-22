import React from 'react'

const CardAPI = ({user}) => {

  return (
     <div className="boxxx">
        <img src={user.image} alt="image"/>
//         <h3>Name: {user.firstname}</h3>
//         <p>Email:{user.email}</p>
//         <p>Gender:{user.gender}</p>
//     </div>
  )
}

export default CardAPI;