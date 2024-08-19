import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import DataContext from './Context/DataContext';
import './Sldlist.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";
import { Link } from 'react-router-dom';

const SldList = () => {
    const {
        formDatas,
        setFormData,
        search,
        setSearch,
        fromDate,
        setFormDate,
        toDate,
        setTodate,
        rtoname,
        setrtoName,
        rtoZone,
        setRtoZone,
        manufacturerName,
        setManufactureNmae
    } = useContext(DataContext);

    const handleSubmitFilter = async (e) => {
        e.preventDefault();
        const newPost = {
            fromDate,
            toDate,
            rtoName: rtoname,
            rtozone: rtoZone,
            manufactureName: manufacturerName
        };

        try {
            const response = await axios.post(`https://localhost:7141/api/SLDLocalsontroller/filterByReportList`, newPost);
            setFormData(response.data);
            console.log(setFormData)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete this id ${id}?`);
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7141/api/SLDLocalsontroller/deleteSldReportLis?Id=${id}`);
                const response = await axios.get(`https://localhost:7141/api/SLDLocalsontroller/getAllSldReportLis`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    useEffect(() => {
        const filteredResults = formDatas.filter((formdata) =>
            (formdata.rto_name ? formdata.rto_name.toLowerCase() : '').includes(search.toLowerCase()) ||
            (formdata.zone ? formdata.zone.toLowerCase() : '').includes(search.toLowerCase())
        );
        setFormData(filteredResults.reverse());
    }, [ search, setFormData]);

    return (
        <div className="container">
            <div className="center-form">
                <form onSubmit={handleSubmitFilter}>
                    <div className="form-group">
                        <label htmlFor="fromDate">From Date</label>
                        <input
                            type="date"
                            id="fromDate"
                            name="createDate"
                            value={fromDate}
                            onChange={(e) => setFormDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="toDate">To Date</label>
                        <input
                            type="date"
                            id="toDate"
                            name="updateDate"
                            value={toDate}
                            onChange={(e) => setTodate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rtoName">RTO Name</label>
                        <select
                            id="rtoName"
                            name="rto_name"
                            value={rtoname}
                            onChange={(e) => setrtoName(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="TN 02 chennai">TN 02 chennai</option>
                            <option value="tn04 chennai">tn04 chennai</option>
                            <option value="tn05 chennai">tn05 chennai</option>
                            <option value="Tn 06 chennai(central)">Tn 06 chennai(central)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rtozone">RTO Zone</label>
                        <select
                            id="rtozone"
                            name="zone"
                            value={rtoZone}
                            onChange={(e) => setRtoZone(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="south chennai">south chennai</option>
                            <option value="north">north</option>
                            <option value="north chennai">north chennai</option>
                            <option value="south ">south </option>
                            <option value="East chennai(central)">East chennai(central)</option>
                            {/* Add options here */}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="manufacturerName">Manufacturer Name</label>
                        <select
                            id="manufactureName"
                            name="manufacturerName"
                            value={manufacturerName}
                            onChange={(e) => setManufactureNmae(e.target.value)}
                        >
                            <option value="all">All</option>
                            {/* Add options here */}
                        </select>
                    </div>

                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
            <div className="button-group">
                <button>Copy</button>
                <button>CSV</button>
                <button>Excel</button>
                <button>To PDF</button>
                <button>Print</button>

                <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                    />
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>RTO Name</th>
                        <th>Zone</th>
                        <th>ALHENA</th>
                        <th>GRL</th>
                        <th>TEDI</th>
                        <th>Zipcount</th>
                        <th>Mercydaz</th>
                        <th>MICRO</th>
                        <th>SSN</th>
                        <th>3GB</th>
                        <th>Godawari</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {formDatas.map((FormData) => (
                        <tr key={FormData.vechile_id}>
                            <td>{FormData.vechile_id}</td>
                            <td>{FormData.rto_name}</td>
                            <td>{FormData.zone}</td>
                            <td>{FormData.alhena}</td>
                            <td>{FormData.grl}</td>
                            <td>{FormData.tedi}</td>
                            <td>{FormData.zipCourt}</td>
                            <td>{FormData.mercydaz}</td>
                            <td>{FormData.micro}</td>
                            <td>{FormData.micro}</td>
                            <td>{FormData.gb}</td>
                            <td>{FormData.godawari}</td>
                            <td>{FormData.total}</td>
                            <td>
                                <button className='delete-button' onClick={() => handleDelete(FormData.vechile_id)}>
                                    <FaRegTrashAlt />
                                </button>
                            </td>
                            <td>
                                <Link to={`/edit-sld/${FormData.vechile_id}`}>
                                    <button className='edit-button'>
                                        <MdOutlineSecurityUpdateWarning />
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default SldList;
