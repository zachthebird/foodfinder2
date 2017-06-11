// Include React
import React, { Component } from "react";
import axios from 'axios';

import NavBar from './NavBar';
import Results from './Results';
import Search from './Search';

class SavedArtis extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='panel panel-default col-lg-10 col-lg-offset-1'>
                <div className='panel-heading text-center'>
                    <h2>Saved Articles</h2>
                </div>
                <div className='panel-body text-center'>
                    <h2>Saved Articles Go Here!!!! </h2>
                </div>
            </div>
        )
    }
}

export default SavedArtis;