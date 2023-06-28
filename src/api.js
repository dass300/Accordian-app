import axios from "axios";

export const fetchUser = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return response.data
  };