import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
            <h4> Name: {country.name.official}</h4>
        </div>
    );
};

export default Country;