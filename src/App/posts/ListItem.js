import React from 'react';
import { Link } from 'react-router-dom'


const ListItem = (props) => {
    return (
        <>
            <li key={props.id}>
                <Link to={'/posts/' + props.id}><h2>{props.title} {props.id}</h2></Link>
                <p>{props.text}</p>
            </li>
        </>
    )

}
export default ListItem