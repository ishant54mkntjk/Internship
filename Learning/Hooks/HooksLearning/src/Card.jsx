import React from 'react'

const Card = ({users}) => {
  return (
    <div className="box">
        <h3>Name: {users.name}</h3>
        <p>Age:{users.age}</p>
        <p>City:{users.city}</p>
    </div>
  )
}

export default Card