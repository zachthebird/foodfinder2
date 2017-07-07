// Include React
import React, { Component } from "react";
import axios from 'axios';

import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import Filters from './components/Filters';
//import Search from './components/Search';
//import SavedArtis from './components/SavedArtis';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            results: [],
            data: []
        }
        this.searchYelp = this.searchYelp.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    searchYelp(event){
        
        event.preventDefault();
        // console.log(this.data-pub_date);
        // console.log(this.data-web_url);
        // console.log(this.data-headline);

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
            url += '?' + $.param({
            'api-key': "3d5b23b0b3544196a159cca09bda093c",
            'q': "guns",
            'begin_date': "20150101",
            'end_date': "20161231",
            'sort': "newest"
        });
        axios.get(url).then((results) => {
            console.log(results);
            this.setState({
                data: results.data.response.docs
            })
        })
        //update state to store data in results
    }

    handleSave(event){
        event.preventDefault();
        console.log(this.data-pub_date);
        console.log(this.data-web_url);
        console.log(this.data-headline);
    }

    render() {
        return(
            <div>
                <Header/>
                <UserInput searchYelp={this.searchYelp} />
                <Filters data={this.state.data} saveArti={this.saveArtis}/>
                <Results />
            </div>
        );
    };
}

export default Main;