import { useState } from "react";
import Form from "../components/Form";
import RegionPicker from "../components/RegionPicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './../styles.css';
import { createSearchParams, useNavigate } from "react-router-dom";
const Home = () => {
    const [startDate, setStartDate] = useState(new Date("2023/12/08"));
    const [endDate, setEndDate] = useState(new Date("2023/12/10"));
    const [departure, setdeparture] = useState();
    const [arrival, setarrival] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Form submitted");
        navigate('/selectFlights', { dep: departure });


    }


    return <h1>
        <div>
            <div className="browsing">
                <input type="radio" name="fselect" value="Onew" id="Onew" />
                <label htmlFor="Onew">One Way</label>
                <input type="radio" name="fselect" value="RoundT" id="RoundT" />
                <label htmlFor="RoundT">Round Trip</label>
                <h3 className="DateTitle">Departure</h3>
                <DatePicker
                    selected={startDate}
                    onChange={(startDate) => setStartDate(startDate)}
                    mindate={"2023/12/15"}
                />
                <div>
                    <select
                        onChange={(e) => {
                            setdeparture(e.target.value);
                            console.log(e.target.value);
                        }}>
                        <option value="YYC">Calgary</option>
                        <option value="YEG">Edmonton</option>
                        <option value="YVR">Vancouver</option>
                        <option value="YYZ">Toronto</option>
                    </select>
                </div>
                <h3 className="DateTitle">Return</h3>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                <div>
                    <select
                        onChange={(e) => {
                            setarrival(e.target.value);
                            console.log(e.target.value);
                        }}>
                        <option value="YYC">Calgary</option>
                        <option value="YEG">Edmonton</option>
                        <option value="YVR">Vancouver</option>
                        <option value="YYZ">Toronto</option>
                    </select>
                </div>
            </div>

        </div>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Click to submit</button>
        </form>

    </h1 >;
};

export default Home;