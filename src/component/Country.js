import React from 'react';

function Country(props){
    return (
        <li onClick = {props.deleteSmth}>Country name: {props.data.name}, 
        <img alt={props.data.name} src = {props.data.flag}></img> Capital: {props.data.capital}</li>

    );
}
export default Country;