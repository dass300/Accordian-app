/* eslint-disable react/prop-types */
//import axios from 'axios';
import '../App.css'

export default function UserList({userData, deleteUser}) {

    
  return (
    <>
    <ul>
    {userData.map((data) => (
        <>
        <li key={data.id}>{data.name} </li>
        
        <button onClick={()=> deleteUser(data.id)}>Delete</button>
        </>
        ))}
    </ul>
    </>
  )
}
