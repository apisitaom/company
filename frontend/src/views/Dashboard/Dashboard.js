import React, { Component } from 'react';
import Cards from '../../components/Dashboard/Cards'
import Chart from '../../components/Dashboard/Chart'
import { employeeCount, storeCount } from '../../services/api'

class Dashboard extends Component {
  state = {
    employeecount: 0,
    storecount: 0,
    income: 99541665,
    outcome: 12
  }
  UNSAFE_componentWillMount () {
    this.onGetEmployeeCount();
    this.onGetStoreCount();
  }
  onGetEmployeeCount = async () => {
    const resp = await employeeCount();
    resp.code === 200 && this.setState({
      employeecount: resp.data
    })
  }
  onGetStoreCount = async () => {
    const resp = await storeCount();    
    resp.code === 200 && this.setState({
      storecount: resp.data
    })
  }
  render() {
    return (
      <div>
        <Cards 
        employeecounts={this.state.employeecount}
        storecounts={this.state.storecount}
        incomes={this.state.income}
        outcomes={this.state.outcome}
        />
        <Chart />
      </div>
    );
  }
}

export default Dashboard;
