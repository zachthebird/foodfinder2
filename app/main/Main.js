// Include React
import React, { Component } from "react";
import axios from 'axios';

import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import Filters from './components/Filters';
import yelpData from '../utils/yelpData';
//import Search from './components/Search';
//import SavedArtis from './components/SavedArtis';

const yelp = require('yelp-fusion');

class Main extends Component {
    constructor(){
        super();
        this.state = {
            results: [],
            data: []
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSave(event) {
        event.preventDefault();
        console.log(this.data-pub_date);
        console.log(this.data-web_url);
        console.log(this.data-headline);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("CLICKED");

        this.setState({
            results: [
            {
              "price": "$$",
              "phone": "+1512555555",
              "categories": [
                {
                  "alias": "Brazillian"
                }
              ],
              "name": "Boteco",
              "url": "https://www.yelp.com/biz/boteco-austin-3",
              "location": {
                "city": "Austin",
                "country": "US",
                "address2": "",
                "address3": "",
                "state": "TX",
                "address1": "1403 E 7th St",
                "zip_code": "78702"
              },
              "distance": 1604.23,
            },
            {
              "price": "$$",
              "phone": "+14152520800",
              "categories": [
                {
                  "alias": "barbeque"
                }
              ],
              "name": "Franklin Barbecue",
              "url": "https://www.yelp.com/biz/franklin-barbecue-austin",
              "location": {
                "city": "Austin",
                "country": "US",
                "address2": "",
                "address3": "",
                "state": "TX",
                "address1": "900 E 11th St",
                "zip_code": "78702"
              },
              "distance": 1604.23,
            },
            {
              "price": "$",
              "phone": "+14152520800",
              "categories": [
                {
                  "alias": "Halal"
                }
              ],
              "name": "Kismet Cafe",
              "url": "https://www.yelp.com/biz/kismet-cafe-austin-2",
              "location": {
                "city": "Austin",
                "country": "US",
                "address2": "Ste 200",
                "address3": "",
                "state": "TX",
                "address1": "1000 E 41st St",
                "zip_code": "78751"
              },
              "distance": 1604.23
            },
            {
              "price": "$",
              "phone": "+14152520800",
              "categories": [
                {
                  "alias": "American"
                }
              ],
              "name": "Salty Sow",
              "url": "https://www.yelp.com/biz/salty-sow-austin",
              "location": {
                "city": "Austin",
                "country": "US",
                "address2": "",
                "address3": "",
                "state": "TX",
                "address1": "1917 Manor Rd",
                "zip_code": "78722"
              },
              "distance": 1604.23
            }


          ]
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <UserInput handleSubmit={this.handleSubmit} searchYelp={this.searchYelp} />
                <Filters results={this.state.results} />
                <Results results={this.state.results} updateResults={this.updateResults} />
            </div>
        );
    };
}

export default Main;
