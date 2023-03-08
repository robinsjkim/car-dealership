import { React, useState } from 'react';

function ManufacturerForm() {

    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        console.log(data);

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newTech = await response.json();
            console.log(newTech)
            setName('');
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new manufacturer</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-floating mb-3'>
                        <input onChange={handleNameChange} value={name} placeholder='name' required type="text" name="name" id="name" className='form-control'/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <button className='btn btn-primary'>Create</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default ManufacturerForm;
