import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import DataContext from './Context/DataContext';
import './Sldlist.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";
import { Link } from 'react-router-dom';


const columnConfig = {
    'All': ['S.No', 'RTO Name', 'Zone', 'ALHENA', 'GRL', 'TEDI', 'Zipcount', 'Mercydaz', 'MICRO', 'SSN', '3GB', 'Godawari', 'Total', 'Action'],
    'Alhena': ['S.No', 'RTO Name', 'Zone', 'ALHENA', 'Action'],
    'GRL': ['S.No', 'RTO Name', 'Zone', 'GRL', 'Action'],
    'TEDI': ['S.No', 'RTO Name', 'Zone', 'TEDI', 'Action'],
    'Zipcount': ['S.No', 'RTO Name', 'Zone', 'Zipcount', 'Action'],
    'Mercydaz': ['S.No', 'RTO Name', 'Zone', 'Mercydaz', 'Action'],
    'Micro': ['S.No', 'RTO Name', 'Zone', 'MICRO', 'Action'],
    'Ssn': ['S.No', 'RTO Name', 'Zone', 'SSN', 'Action'],
    '3GB': ['S.No', 'RTO Name', 'Zone', '3GB', 'Action'],
    'Godawari': ['S.No', 'RTO Name', 'Zone', 'Godawari', 'Action'],
};

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
            fromDate: fromDate,
            toDate: toDate,
            rtoName: rtoname,
            rtozone: rtoZone,
            manufactureName: manufacturerName
        };

        try {
            const response = await axios.post(`https://localhost:7141/api/SLDLocalsontroller/filterByReportList`, newPost);
            setFormData(response.data);
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
        setFormData(filteredResults);
    }, [search, setFormData]);

    const getColumnHeaders = () => {
        const columns = columnConfig[manufacturerName] || [];
        return columns.map((col, index) => <th key={index}>{col}</th>);
    };
 
    const getTableData = () => {
        return formDatas.map((FormData) => (
            <tr key={FormData.vechile_id}>
                {manufacturerName === 'All' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.alhena}</td>
                        <td>{FormData.grl}</td>
                        <td>{FormData.tedi}</td>
                        <td>{FormData.zipCourt}</td>
                        <td>{FormData.mercydaz}</td>
                        <td>{FormData.micro}</td>
                        <td>{FormData.ssn}</td>
                        <td>{FormData.gb}</td>
                        <td>{FormData.godawari}</td>
                        <td>{FormData.total}</td>
                    </>
                )}
                {manufacturerName === 'Alhena' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.alhena}</td>
                    </>
                )}
                {manufacturerName === 'GRL' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.grl}</td>
                    </>
                )}
                {manufacturerName === 'TEDI' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.tedi}</td>
                    </>
                )}
                {manufacturerName === 'Zipcount' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.zipCourt}</td>
                    </>
                )}
                {manufacturerName === 'Mercydaz' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.mercydaz}</td>
                    </>
                )}
                {manufacturerName === 'Micro' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.micro}</td>
                    </>
                )}
                {manufacturerName === 'Ssn' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.ssn}</td>
                    </>
                )}
                {manufacturerName === '3GB' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.gb}</td>
                    </>
                )}
                {manufacturerName === 'Godawari' && (
                    <>
                        <td>{FormData.vechile_id}</td>
                        <td>{FormData.rto_name}</td>
                        <td>{FormData.zone}</td>
                        <td>{FormData.godawari}</td>
                    </>
                )}
                <td>
                    <button className='delete-button' onClick={() => handleDelete(FormData.vechile_id)}>
                        <FaRegTrashAlt />
                    </button>
                    <Link to={`/edit-sld/${FormData.vechile_id}`}>
                        <button className='edit-button' style={{ padding: '10px' }}>
                            <MdOutlineSecurityUpdateWarning />
                        </button>
                    </Link>
                </td>
            </tr>
        ));
    };

    return (
        <div className="container">
            <div className="center-form">
                <form onSubmit={handleSubmitFilter}>
                    <div className="form-group">
                        <label htmlFor="fromDate">From Date</label>
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            value={fromDate}
                            onChange={(e) => setFormDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="toDate">To Date</label>
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            value={toDate}
                            onChange={(e) => setTodate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rtoName">RTO Name</label>
                        <select
                            id="rtoName"
                            name="rtoName"
                            value={rtoname}
                            onChange={(e) => setrtoName(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="TN 01 chennai">TN 01 chennai</option>
                            <option value="TN 02 chennai">TN 02 chennai</option>
                            <option value="TN 03 chennai">TN 03 chennai</option>
                            <option value="TN 04 chennai">TN 04 chennai</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rtozone">RTO Zone</label>
                        <select
                            id="rtozone"
                            name="rtozone"
                            value={rtoZone}
                            onChange={(e) => setRtoZone(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="North">North</option>
                            <option value="East">East</option>
                            <option value="South">South</option>
                            <option value="West">West</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="manufacturerName">Manufacturer Name</label>
                        <select
                            id="manufacturerName"
                            name="manufacturerName"
                            value={manufacturerName}
                            onChange={(e) => setManufactureNmae(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Alhena">Alhena</option>
                            <option value="GRL">GRL</option>
                            <option value="TEDI">TEDI</option>
                            <option value="Zipcount">Zipcount</option>
                            <option value="Mercydaz">Mercydaz</option>
                            <option value="Micro">Micro</option>
                            <option value="Ssn">Ssn</option>
                            <option value="3GB">3GB</option>
                            <option value="Godawari">Godawari</option>
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

              
            </div>
            <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                    {/* <label htmlFor="search" className='search'>search:</label>  */}
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                    />
                </form>
            <table>
                <thead>
                    <tr>{getColumnHeaders()}</tr>
                </thead>
                <tbody>{getTableData()}</tbody>
            </table>

            {/* <div className="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Next</button>
            </div> */}
        </div>
    );
};

export default SldList;
