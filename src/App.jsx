import { useEffect, useState } from "react";
import "./App.css";
//import axios from "axios";
import UserList from "./component/userList";
import { fetchUser } from "./api";
import axios from "axios";
//import { Link } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState([]);
  const [toggle,setToggle] = useState()

  const toggleSwitch = () => {
    setToggle((prev)=> (!prev))
  }


  useEffect(() => {
    (async () => {
      const response = await fetchUser();
      //console.log(response);
      setUserData(response)
    })();
  }, []);
  
  console.log(userData, "oiuyt");

  const deleteUser = async (id) => {
    
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then(() => {
        setUserData(users => {
          return users.filter(item => item.id !== id)});
         //console.log(users);
        console.log("deleted!");
        alert(`Deleted`)
    })
  }

  return (
    <div>
    
    <p>{toggle ? 'ON' : "OFF"} </p>
    <button onClick={toggleSwitch}>Toggle</button>
   
   <UserList deleteUser={deleteUser} userData={userData} />
    </div>
  )
}

export default App;
