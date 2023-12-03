import React from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const SelectFlights = () => {
    const location = useLocation();
    const departure = location.state && location.state.dep;
    const arrival = location.state && location.state.arr;
    const startD = location.state && location.state.start;
    const formattedStartDate = startD && startD.toLocaleDateString();
    console.log(startD)
    const getflights = async () => {
        let reponse = await fetch("http://localhost:8081/api/getflights/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(departure, arrival, formattedStartDate)
        }).then((response) => {

            if (reponse.data === 'false') {
                throw new Error('No such flights');
            } else {
                // navigate('/User');
                return response.json()
            }
        })
            .then((data) => {
                console.log(data)
                sessionStorage.setItem("userId", data.names); // Add userId to sessionStorage, which is used for many purposes
                sessionStorage.setItem("firstName", data.name); // Storages name in sessionStorage for display in Header
                console.log(data)
                // window.location.reload();
            })
            .catch((error) => {
                alert(error)
            });
    }

    return (
        <div>
            <h1>Select Flights</h1>
            <p>Departure: {departure}</p>
            <p>Arrival: {arrival}</p>
            <p>Start Date: {formattedStartDate}</p>
        </div>
    );
};

export default SelectFlights;
