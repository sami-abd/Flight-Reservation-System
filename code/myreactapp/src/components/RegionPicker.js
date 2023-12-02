import { useState } from "react";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function RegionalPicker() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    return (
        <div className="locationSelector">
            <div>
                <h6>Country</h6>
                <CountrySelect
                    onChange={(e) => {
                        setCountryid(e.id);
                    }}
                    placeHolder="Select Country"
                />
            </div>
            <div>
                <h6>State</h6>
                <StateSelect
                    countryid={countryid}
                    onChange={(e) => {
                        setstateid(e.id);
                    }}
                    placeHolder="Select State"
                />
            </div>
            <div>
                <h6>City</h6>
                <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e) => {
                        console.log(e);
                    }}
                    placeHolder="Select City"
                />
            </div>
        </div>
    );
}
export default RegionalPicker;