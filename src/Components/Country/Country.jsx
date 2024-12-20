import './Country.css'
import { useState } from 'react';
import PropTypes from 'prop-types';

const Country = ({ country, handlevisitcountry }) => {
    const { name, cca3, independent, flags } = country;
    const [visited, Setvisited] = useState(false)
    const handlevisited = () => {
        Setvisited(!visited);
    }
    const [countryvisit, setcountryvisit] = useState(false)
    const setting = () => {
        setcountryvisit(!countryvisit)
    }
    const masterhandling = () => {
        handlevisitcountry(country);
        setting();
    }
    return (
        <div className="countryStyle" style={{ backgroundColor: (visited) ? 'burlywood' : 'white' }}>
            <h3 style={{ color: (visited) ? '#034f84' : 'black' }}>Name : {name?.common}</h3>
            <p className='size'>CCA3 : {cca3}</p>
            <p className='size'> Independent : {(independent) ? "True" : "False"}</p>
            <img style={{ width: "150px" }} src={flags?.png} />
            <div className='buttondiv'>
                <button onClick={handlevisited} className={(visited) ? 'visitedbutton' : 'goingbutton'}>{(visited) ? "VISITED" : "GOING"}</button>
                <button className={(countryvisit) ? 'visited' : 'setvisited'} onClick={masterhandling}>SET-VISITED</button>
            </div>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object.isRequired,
    handlevisitcountry: PropTypes.func.isRequired
}

export default Country;