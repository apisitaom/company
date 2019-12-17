import React, { Component } from 'react'
import EmployeeForm from '../../../.././components/EmployeeForm/EmployeeForm'
import AddressForm from '../../../.././components/EmployeeForm/AddressForm'
export default class Add extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                    <EmployeeForm />
                    <AddressForm />
            </div>
        )
    }
}
