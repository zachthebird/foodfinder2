import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();

        this.state = {
            topic: ' ',
            startYear: ' ',
            endYear: ' '
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const val = event.target.val;
        this.setState({
            [name]: val
        })
    }
    handleSubmit(searchAttributes){
        const fillervar = 'filler';
        const startYear = ' '+'0101';
        const endYear = ' '+'1231';
        const topic = ' ';
        this.setState({
            q: topic,
            beginDate: startYear,
            endDate: endYear
        });
        console.log('search atties: '+searchAttributes);
    }

    
    render(){
        return(
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>Search</h2>
                </div>
                <div className='panel-body text-center'>
                    <form className='form-horizontal'>
                        <div className='form-group'>
                            <label className='control-label col-sm-1' htmlFor='topic'>Topic: </label>
                            <div className='col-sm-11'>
                                <input className='form-control' name='topic' id='topic' type='text' value={this.state.topic} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label style={{paddingLeft: '5px'}} className='control-label col-sm-1' htmlFor='startYear'>Start Year: </label>
                            <div className='col-sm-11'>
                                <input className='form-control' name='startYear' id='startYear' type='text' value={this.state.startYear} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label className='control-label col-sm-1' htmlFor='endYear'>End Year: </label>
                            <div className='col-sm-11'>
                                <input className='form-control' name='endYear' id='endYear' type='text' value={this.state.endYear} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br></br>
                        <button type='submit' className='btn btn-success success' onClick={this.props.getArtis}>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;