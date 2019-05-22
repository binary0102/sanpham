import React, { Fragment } from 'react';
import axios from 'axios';
import app from './helper/axiosConfig';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const local = "https://www.leflair.vn/api/v2/account"
const local1 = "https://www.leflair.vn/vn/account/addresses"
const vitims = "https://www.leflair.vn/api/v2/account/password"
const headers = {
    Cookie: "userId=s%3A123.cQNP7uVGtcFF7MHqLJaW6QsKm%2Bun7meTiSOzhJ9JGPY",
    withCredentials: true
};
const axiosConfig = {
    headers: {
        'content-Type': 'application/json',
        "Accept": "/",
        "Cache-Control": "no-cache",
    },
}
let config = {
    headers:{ Cookie:"token=123" },
    withCredentials:true
}

export default function Test() {
    function test() {
        app.get('/test1') .then(response => {
           // console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);

        })
            .then(contents => console.log(contents)).catch(err => {
               // console.log(err);
            });
    }
    function handle() {
        axios.get(local1).then(response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);

        })
            .then(contents => console.log(contents)).catch(err => {
                console.log(err);
            });
    }
    function handleGet() {
        axios.get('https://www.leflair.vn/api/v2/addresses/',
        ).then(response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);

        })
            .then(contents => console.log(contents)).catch(err => {
                console.log(err);
            });
    }
    return (
        <Fragment>
            <button onClick={handle}>
                Hello
        </button>
            <button onClick={handleGet}> GET </button>.
            <button onClick={test}> TeST </button>
          
        </Fragment>

    )
}