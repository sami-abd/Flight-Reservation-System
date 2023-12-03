import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DatePicker1 = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={"December, 10,2023"}
                dateFormat="yyyy/MM/dd"

            />
        </div>

    )
};
export default DatePicker1;
