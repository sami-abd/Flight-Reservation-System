import { useState } from "react";
import Form from "../components/Form";
import RegionPicker from "../components/RegionPicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './../styles.css';
const Home = () => {
    const [startDate, setStartDate] = useState(new Date("2023/12/08"));
    const [endDate, setEndDate] = useState(new Date("2023/12/10"));
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
                    <select>
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
                    <select>
                        <option value="YYC">Calgary</option>
                        <option value="YEG">Edmonton</option>
                        <option value="YVR">Vancouver</option>
                        <option value="YYZ">Toronto</option>
                    </select>
                </div>
            </div>
            <h2 className="DateTitle">Number of passengers</h2>
            <Form />
        </div>

    </h1>;
};

export default Home;