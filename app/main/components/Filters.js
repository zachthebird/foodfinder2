import React, { Component } from 'react';

class Filters extends Component {
    constructor(){
        super();

    }

    
    render(){
        return(
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>Filters</h2>
                </div>
                <div className='panel-body text-center'>
                    Clickable Filters belong here
                </div>
            </div>
        )
    }
}

export default Filters;