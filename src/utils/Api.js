import axios from 'axios';

export const getUsers = ()=>{
    axios.get("https://randomuser.me/api/?results=100")
}
