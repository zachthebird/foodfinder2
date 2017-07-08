// Include React
import React, { Component } from "react";
import axios from 'axios';

import NavBar from './Header';
import Filters from './Filters';
import UserInput from './UserInput';
import yelpData from '../../utils/yelpData';

class Results extends Component {
    constructor(){
        super();
    }

    renderResults() {
        return this.props.results.map(function(result) {
            return (
                <h2>{result.name}<br/>
                    {result.location.address1} {result.location.address2}
                    {result.location.city}, {result.location.state} {result.location.zip_code}</h2>

            )
        })
    }
    render(){
        return(
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>Results</h2>
                </div>

                <div id="updateResults" className='panel-body text-center'>
                    {this.renderResults()}
                </div>
            </div>
        )
    }
}

export default Results;
