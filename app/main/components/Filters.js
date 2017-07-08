import React, { Component } from 'react';

class Filters extends Component {
    constructor(){
        super();

    }

    
    render(){
        const buttonClasses = {
            
        }
        return(
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>Filters</h2>
                </div>
                <div className='panel-body text-center'>
                    <div className='row'>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>Open Now</button>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>Take Out</button>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>Mexican</button>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>Asian</button>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>American</button>
                        <button onClick={()=>{addClass('active')}} className='btn filter-btn btn-success'>Serves Alcohol</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;