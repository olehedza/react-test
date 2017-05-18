/**
 * Created by olehedza on 18.05.17.
 */
import React, { Component } from 'react';

export default class New extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{backgroundColor: 'red'}}>
                <h3>New component</h3>
                <p>{this.props.text}</p>
                <h3>{this.props.value}</h3>
            </div>
        );
    }
}