import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataContext from './Context/DataContext';
import './AddSldLocals.css';

const AddSldLocals = () => {
    const { formDatas, setFormData, rtoName, setRtoName, zone, setZone, manufactureItems, setManufactureItems } = useContext(DataContext);
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
       
        const newPost = {
            rto_name: rtoName,
            zone: zone,
            [manufactureItems]: value 
        };

        try {
            const response = await axios.post('https://localhost:7141/api/SLDLocalsontroller/createSldlocals', newPost);
            const allPost = [...formDatas, response.data];
            setFormData(allPost);
            navigate('/sld-report');
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="form-container">
            
            <form onSubmit={handleSubmit} className="my-form">
                <div className="form-group">
                    <label htmlFor="rtoName">Rto Name:</label>
                    <select
                        id="rtoName"
                        value={rtoName}
                        onChange={(e) => setRtoName(e.target.value)}
                    >
                        <option value="TN 01 chennai">TN 01 chennai</option>
                        <option value="TN 02 chennai">TN 02 chennai</option>
                        <option value="TN 03 chennai">TN 03 chennai</option>
                        <option value="TN 04 chennai">TN 04 chennai</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="zone">Zone:</label>
                    <select
                        id="zone"
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                    >
                        <option value="North">North</option>
                        <option value="East">East</option>
                        <option value="South">South</option>
                        <option value="West">West</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="manufactureItems">Manufacture Items:</label>
                    <select
                        id="manufactureItems"
                        value={manufactureItems}
                        onChange={(e) => setManufactureItems(e.target.value)}
                    >
                        <option value="Alhena">Alhena</option>
                        <option value="Grl">Grl</option>
                        <option value="Tedi">Tedi</option>
                        <option value="ZipCourt">ZipCourt</option>
                        <option value="Mercydaz">Mercydaz</option>
                        <option value="Micro">Micro</option>
                        <option value="Ssn">Ssn</option>
                        <option value="Gb">Gb</option>
                        <option value="Godawari">Godawari</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="value">Value:</label>
                    <input
                        id="value"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AddSldLocals;
