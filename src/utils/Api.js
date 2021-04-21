import axios from 'axios';



//eslint-disable-next-line
 export default {
    getUsers : function(){
      return  axios.get("https://randomuser.me/api/?results=100&nat=us")
    }
    
 } ;