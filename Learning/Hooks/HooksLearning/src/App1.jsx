import React from 'react'
import Card from './Card'

const App1 = () => {
    const users =[
        {
            name:"rahul",
            age:23,
            city:"jaipur"
        },
        {
            name:"ram",
            age:52,
            city:"kota"
        },
        {
            name:"ashish",
            age:20,
            city:"jaipur"
        }
    ]

  return (
   <> 
     <Card users={users[0]}/>
     <Card users={users[1]}/>
     <Card users={users[2]}/>
     
   </>
  )
}

export default App1