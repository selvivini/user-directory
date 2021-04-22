import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Employees from './Employees';
import Api from '../utils/Api'
class Container extends Component {
    
    state= {
        search : "",
        employees: [],
        filteredEmployees:[],
        filtered: false
    }
    
    componentDidMount=()=>{
      Api.getUsers().then(response =>{
          console.log(response.data.results)
          this.setState({employees: response.data.results})
      }).catch(err=> console.log(err))
    }

    sortByFirstName = ()=>{
        const sortedEmployees= this.state.employees;
        sortedEmployees.sort((a,b)=>a.name.first> b.name.first? 1: -1);
        this.setState({employees: sortedEmployees});
    }
    sortByLastName = ()=>{
        const sortedEmployees= this.state.employees;
        sortedEmployees.sort((a,b)=>a.name.last> b.name.last? 1: -1);
        this.setState({employees: sortedEmployees});
    }
    sortByEmail = ()=>{
        const sortedEmployees= this.state.employees;
        sortedEmployees.sort((a,b)=>a.email> b.email? 1: -1);
        this.setState({employees: sortedEmployees});
    }

    sortByDob= ()=>{
        const sortedEmployees= this.state.employees;
        sortedEmployees.sort((a,b)=>b.dob.age - a.dob.age);
        this.setState({employees: sortedEmployees});
    }
    
    //filters the employees based on first name in search input
filterEmployees = (e)=>{
    const {employees,search} = this.state;
   this.setState({search: e.target.value})
    const filteredEmployees = employees.filter(
        (employee)=>employee.name.first.toLowerCase().indexOf(search.toLowerCase())>-1 ||
        employee.name.last.toLowerCase().indexOf(search.toLowerCase())>-1 ||
        employee.email.toLowerCase().indexOf(search.toLowerCase())>-1 
        )
   
    this.setState({filteredEmployees:filteredEmployees, filtered: true})
    
}

// filterEmp = () => {
//     let { employees, search } = this.state;
//     let filteredEmployees = employees.filter((employee) => {
//       return (
//         employee.name.first.toLowerCase().includes(search.toLowerCase()) ||
//         employee.name.last.toLowerCase().includes(search.toLowerCase()) ||
//         employee.email.toLowerCase().includes(search.toLowerCase())
//       );
//     });
    
//     this.setState({filteredEmployees: filteredEmployees });
//   };

//   // grab search term, activate sorted
//   startFilter = (event) => {
//     this.setState({ search: event.target.value }, () => {
//       this.filterEmp();
//       this.setState({ sorted: true });
//     });
//   };
    

render() {
        return (
            <div>
             <SearchInput startFilter = {this.filterEmployees}  name= "search" />
             <div className="container-fluid mt-5" style={{background:" #FDEDEC "}}>
                 <table className="table table-striped">
                 <thead>
                 <tr>
            <th scope="col" >Avatar</th>
            <th scope="col">Gender</th>
            <th scope="col" className="dropdown-toggle" onClick={this.sortByFirstName}>FirstName</th>
            <th scope="col" className="dropdown-toggle" onClick={this.sortByLastName}>LastName</th>
            <th scope="col"className="dropdown-toggle" onClick = {this.sortByDob}>Dob</th>
            <th scope="col"className="dropdown-toggle" onClick={this.sortByEmail}>Email</th>
            <th scope="col">Phone number</th>
                </tr>
                 </thead>
                 <tbody>
                {
                !this.state.filtered?
                this.state.employees.map(employee=> (
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
                ))
              :
              this.state.filteredEmployees.map(employee=> (
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
              ))
            }
                 </tbody>
                 </table>
             </div>
            </div>
        );
    }
}

export default Container;
