import { TextBox } from 'devextreme-react/text-box';
import React, { useState, useCallback } from 'react';
import 'devextreme/dist/css/dx.light.css';
import EmailLog from "../components/EmailLog";
import PasswordLog from "../components/PasswordLog";
import Form from '../components/Form';
const Admin = () => {
    const [value, setValue] = useState("");
    const onValueChange = useCallback((v) => {
        setValue(v)
    }, []);
    const onEnterKey = useCallback(() => {
        console.log(value)
    }, [value]);
    return (
        <div>
            < h1 > Admin Login</h1 >
            <EmailLog />
            <PasswordLog />
            <Form />

        </div>



    )

};

export default Admin;