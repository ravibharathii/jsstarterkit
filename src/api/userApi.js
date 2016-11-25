/**
 * Created by raviramamoorthy on 11/24/16.
 */

import 'whatwg-fetch';

import getBaseUrl from  "./baseUrl";

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users')
    
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function  OnSuccess(response) {
    return response.json();
}

function  OnError(error) {
    console.log(error);   //eslint-disable-line no-console
    
}