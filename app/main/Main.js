// Include React
import React, { Component } from "react";
import axios from 'axios';

import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import Filters from './components/Filters';
import APIData from '../utils/APIData'
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
        this.searchYelp = this.searchYelp.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    searchYelp(zipCode, searchRadius){

        //event.preventDefault();
        console.log('QUERY');
        // console.log(this.data-pub_date);
        // console.log(this.data-web_url);
        // console.log(this.data-headline);

        // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        //     url += '?' + $.param({
        //     'api-key': "3d5b23b0b3544196a159cca09bda093c",
        //     'q': "guns",
        //     'begin_date': "20150101",
        //     'end_date': "20161231",
        //     'sort': "newest"
        // });
        // axios.get(url).then((results) => {
        //     console.log(results);
        //     this.setState({
        //         data: results.data.response.docs
        //     })
        // })
        // update state to store data in results

        var formattedZip = zipCode;
        var formattedRadius = searchRadius;

        console.log(formattedZip);
        console.log(formattedRadius);
        
        const accessToken = (clientId, clientSecret) => {
            return axios({
                url: 'https://api.yelp.com/oauth2/token',
                method: 'post',
                header: '',
                urlencodedBody: {
                grant_type: 'client_credentials',
                client_id: APIData.client_Id,
                client_secret: APIData.client_Secret
                }
            });
            console.log(res);
        };

        const createClient = (token) => {
            return new YelpClient(token);
        };

        class YelpClient {
            constructor(token){
            this.token = token;
            }

            search(parameters){
            return axios({
                url: 'https://api.yelp.com/v3/businesses/search',
                query: {
                  location: formattedZip,
                  radius: formattedRadius
                },
                bearerToken: this.token
                });
            }
        };



        // yelp.accessToken(APIData.client_Id, APIData.client_Secret).then(response => {

        // const client = yelp.client(response.jsonBody.access_token);

        // client.search().then(response => {
        //   console.log(response.jsonBody.businesses[0].name);
        // });
        // }).catch(e => {
        //   console.log(e);
        // });
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
