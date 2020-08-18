import React, { Component } from 'react'

import './add-item.css';

export default class AddItem extends Component {
    render() {
        const { onAddItem } = this.props;
        return(
            <div className='add-item-form'>
                <button className='btn btn-outline-dark btn-sm float-right'
                        onClick={ () => onAddItem('gege') }>
                    <i className="fa fa-plus" />
                </button>
            </div>
        )
    }
}