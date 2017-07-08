import React, { Component } from 'react';

class Filters extends Component {
    constructor(){
        super();

    }

    renderResults() {
          return this.props.results.map(function(result) {
              return (
                <button className='btn filter-btn btn-success'>{result.categories[0].alias}</button>

              )
          })
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
                        {this.renderResults()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;
