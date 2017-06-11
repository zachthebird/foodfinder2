// Include React
import React, { Component } from "react";
import axios from 'axios';

import NavBar from './components/NavBar';
import Results from './components/Results';
import Search from './components/Search';
import SavedArtis from './components/SavedArtis';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            results: [],
            data: []
        }
        this.getArtis = this.getArtis.bind(this);
        this.saveArti = this.saveArti.bind(this);
    };

    getArtis(event){
        event.preventDefault();
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931').then((results) => {
            console.log(results);
            this.setState({
                data: results.data.response.docs
            })
        })
        //update state to store data in results
    }

    saveArti(event){
        event.preventDefault();
        console.log(this.data-pub_date);
        console.log(this.data-web_url);
    }

    render() {
        return(
            <div>
                <NavBar />
                <Search getArtis={this.getArtis} />
                <Results data={this.state.data} saveArti={this.saveArtis}/>
                <SavedArtis />
            </div>
        );
    };
}

export default Main;