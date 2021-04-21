import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Employees from './Employees';
import Api from '../utils/Api'
class Container extends Component {
    
    state= {
        search : "",
        employees: [],
        filteredEmployees:[]
    }
    
    componentDidMount=()=>{
      Api.getUsers().then(response =>{
          console.log(response.data.results)
          this.setState({employees: response.data.results})
      })
    }
    
    render() {
        return (
            <div>
             <SearchInput/>
             <div className="container-fluid mt-5" style={{background:" #FDEDEC "}}>
                 <table className="table table-striped">
                 <thead>
                 <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Gender</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Dob</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
                </tr>
                 </thead>
                 <tbody>
                {this.state.employees.map(employee=> (
                    <Employees 
                    key = {employee.phone}
                    gender = {employee.gender}
                    firstName = {employee.name.first}
                    lastName = {employee.name.last}
                    dob = {employee.dob.date}
                    email= {employee.email}
                    phone = {employee.phone}
                    image = {employee.picture.medium }
                    />
                ))}
                 </tbody>
                 </table>
             </div>
            </div>
        );
    }
}

export default Container;
