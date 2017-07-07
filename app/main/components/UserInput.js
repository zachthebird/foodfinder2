import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class UserInput extends Component {
    constructor(){
        super();

        this.state = {
            zipCode: '78704',
            searchRadius: 5,
        }
    }


    render(){
        return(
            // this.props.data.map()
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>UserInput</h2>
                </div>
                <div className='panel-body text-center'>
                     <div className='form-group'>
                        <label className='control-label col-sm-1' htmlFor='zipCode'>zipCode: </label>
                        <div className='col-sm-11'>
                            <input
                                className='form-control'
                                name='topic'
                                id='topic'
                                type='text'
                                value={this.state.zipCode}
                                onChange={
                                    (event) => {
                                        console.log(this.state);
                                        this.setState({
                                            zipCode: event.target.value
                                        })
                                    }
                                } />
                        </div>
                    </div>
                    <label style={{paddingLeft: '5px'}} className='control-label col-sm-1' htmlFor='searchRadius'>searchRadius: </label>
                    <div className='col-sm-11'>
                        <Slider
                            min={1}
                            max={25}
                            step={1}
                            value={this.state.searchRadius}
                            orientation="horizontal"
                            onChange={
                                (event) => {
                                    console.log(this.state);
                                    this.setState({
                                        searchRadius: event.target.value
                                    })
                                }
                            } />
                    </div>
                    <button type='submit' className='btn btn-success success' onClick={this.props.searchYelp(this.state.zipCode, this.state.searchRadius)}>Search</button>
                </div>
            </div>
        )
    }
}

export default UserInput;
