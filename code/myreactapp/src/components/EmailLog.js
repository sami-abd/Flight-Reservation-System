import { TextBox } from 'devextreme-react/text-box';
import React, { useState, useCallback } from 'react';
import 'devextreme/dist/css/dx.light.css';
const Email = () => {
    const [value, setValue] = useState("");
    const onValueChange = useCallback((v) => {
        setValue(v)
    }, []);
    const onEnterKey = useCallback(() => {
        console.log(value)
    }, [value]);
    const [textBox1Value, setTextBox1Value] = useState('');
    const handleTextBox1Change = (event) => {
        setTextBox1Value(event.target.value);
    };
    return (
        <div>
            <TextBox
                value={value}
                label='Email Address'
                mode="email"
                valueChangeEvent="input"
                onValueChange={onValueChange}
                onEnterKey={onEnterKey}
                showClearButton={true}
                maxLength={20}

            />

        </div>
    )
};


export default Email;