import React, { Component } from 'react'
import StoreForm from '../../../../components/StoreForm/StoreForm'
import { categoryAll } from '../../../../services/api'
export default class Add extends Component {
    state = {
        categorys: []
    }
    UNSAFE_componentWillMount () {
        this.onGetCategory();
    }
    onGetCategory = async () => {
        const resp = await categoryAll();
        resp.code === 200 && this.setState({
            categorys: resp.data
        }, () => console.log('STATE :', this.state.categorys))
    }
    render() {
        return (
            <div>
                <StoreForm 
                category = {typeof this.state.categorys !== 'undefined' && this.state.categorys}
                />
            </div>
        )
    }
}
