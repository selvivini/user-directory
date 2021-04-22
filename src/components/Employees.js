import React from 'react'

//converting the date fetched from api to a valid input
const formatDate = (date)=>{
   return date.split('T',[1])
}

function Employees(props) {
    return (
        <>
            <tr>
            <td>
              <img alt= {props.firstName} src= {props.image} className="rounded-circle img-fluid"/>
            </td>
            <td>
            {props.gender}
            </td>
            <td>
             {props.firstName}
            </td>
            <td>
             {props.lastName}
            </td>
            <td>
             {formatDate(props.dob)}
            </td>
            <td>
             {props.email}
            </td>
            <td>
             {props.phone}
            </td>
            </tr>
        </>
    )
}

export default Employees
