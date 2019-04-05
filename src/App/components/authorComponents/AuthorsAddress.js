import React from 'react'

const AuthorsAddress = (props) => {
    return (
        <div className='authorAddress'>

            <h3>Address</h3>
            <div className="authorAddressText">
                <p>street: {props.authorInfo.street}</p>
                <p>city:{props.authorInfo.city} </p>
                <p>zipcode: {props.authorInfo.zipcode}</p>
            </div>
            <img src='https://via.placeholder.com/150/' />
        </div>
    )
}

export default AuthorsAddress