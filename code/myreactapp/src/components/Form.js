import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(`Form submitted, ${name}`);

    }

    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>Click to submit</button>
        </form>
    );

}

export default Form;