import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, Setcountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => Setcountries(data))
    }, [])

    const [visitcountry, Setvisitcountry] = useState([])
    const handlevisitcountry = (country) => {
        const newvisitcountry = [...visitcountry, country];
        Setvisitcountry(newvisitcountry);
    }
    return (
        <div>
            <h3>Total Countries : {countries.length}</h3>
            <div>
                <h3>Total Visited Countries : {visitcountry.length}</h3>
                <h3>Visited Countries Name :
                    {
                        visitcountry.map((country, current_idx) => <li key={current_idx}>{country.name.common}</li>)
                    }
                    {
                        visitcountry.map((country, current_idx) => <img key={current_idx} src={country.flags.png} className="flag"></img>)
                    }
                </h3>
            </div>
            <div className="countriesStyle">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handlevisitcountry={handlevisitcountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;