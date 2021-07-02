import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    // initializer dta à un tab vide
    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [sortedData, setSortedData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    useEffect(() => {
        if (playOnce) {
            axios
                .get(
                    "https://www.restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
                )
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });}
            const sortedCountry = () => {
                const countryObject = Object.keys(data).map((i) => data[i]);
                const sortedArray = countryObject.sort((a, b) => {
                    return b.population - a.population;
                });
                sortedArray.length = rangeValue;
                setSortedData(sortedArray);

            }; sortedCountry();

        
    }, [data, playOnce, rangeValue]);

    return (
        <><div className="sort-container">
            <input type="range" min="1" max="250" value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)} />
        </div>
            <div className="countries">


                <ul className="countries-list">
                    {sortedData.map((country) => (
                        <Card country={country} key={country.name} />


                    ))}


                </ul>
            </div>
        </>
    );
};
export default Countries;

