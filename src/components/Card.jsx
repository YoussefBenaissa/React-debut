import React from 'react';



const Card = (props) => {
    const country = props.country;
    const NumberFormat = (x) => {
        return  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") ;
      }
  
    return (
        <>  <li className="card">
            <img src={country.flag} alt="falg" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>pop : {NumberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
        </>
    );
}

export default Card;