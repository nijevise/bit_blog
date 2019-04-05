import React from 'react'

const AuthorsCompany = (props) => {
    return (
        <div className='authorCompany'>

            <h3>Company</h3>
            <div className="authorCompanyText">
                <p>name: {props.authorInfo.companyName}</p>
                <p>slogan: {props.authorInfo.slogan} </p>
            </div>

        </div>
    )
}

export default AuthorsCompany