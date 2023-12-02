import DatePicker from "../components/DatePicker";
import Form from "../components/Form";
import RegionPicker from "../components/RegionPicker";
import './../styles.css';
const Home = () => {
    return <h1>
        <div>
            <div className="browsing">
                <input type="radio" name="fselect" value="Onew" id="Onew" />
                <label htmlFor="Onew">One Way</label>
                <input type="radio" name="fselect" value="RoundT" id="RoundT" />
                <label htmlFor="RoundT">Round Trip</label>
                <h3 className="DateTitle">Departure</h3>
                <DatePicker />
                <RegionPicker />
                <h3 className="DateTitle">Return</h3>
                <DatePicker />
                <RegionPicker />
            </div>
            <h2 className="DateTitle">Number of passengers</h2>
            <Form />
        </div>

    </h1>;
};

export default Home;