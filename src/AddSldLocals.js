import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
import DataContext from './Context/DataContext'
import './AddSldLocals.css'
 
const AddSldLocals = () => {
    const { formDatas, setFormData, rtoName, setRtoName, zone, setZone, alhena, setAlhena, grl, setGrl, tedi, setTedi,
        zipCourt, setZipCourt, mercydaz, setMercydaz, micro, setMicro, ssn, setSsn, gb, setGb, godawari, setGodawari } = useContext(DataContext)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = {
                rto_name: rtoName, zone: zone, alhena: alhena, grl: grl, tedi: tedi, zipCourt: zipCourt, mercydaz: mercydaz,
                micro: micro, ssn: ssn, gb: gb, godawari: godawari
            }
 
            const response = await axios.post(`https://localhost:7141/api/SLDLocalsontroller/createSldlocals`, newPost);
            //console.log(response)
            const allPost = [...formDatas, response.data]
            setFormData(allPost)
 
            navigate('/sld-report')
        } catch (error) {
            console.log('Error :', error); 
        }
    };
 
    return (
       
<div className='add-sldlocals-container'>
<form className='add-sldlocals-form' onSubmit={handleSubmit}>
<div className='form-group'>
<label>Rto Name :</label>
<input
                        type='text'
                        id='rto_name'
                        value={rtoName}
                        onChange={(e) => setRtoName(e.target.value)}
                        required
                        placeholder='Rto name'
                    />
</div>
<div className='form-group'>
<label>Zone:</label>
<input
                        type='text'
                        id='zone'
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                        required
                        placeholder='Zone'
                    />
</div>
<div className='form-group'>
<label>Alhena:</label>
<input
                        type='number'
                        id='alhena'
                        value={alhena}
                        onChange={(e) => setAlhena(e.target.value)}
                        required
                        placeholder='Alhena'
                    />
</div>
<div className='form-group'>
<label>Grl:</label>
<input
                        type='number'
                        id='grl'
                        value={grl}
                        onChange={(e) => setGrl(e.target.value)}
                        required
                        placeholder='Grl'
                    />
</div>
<div className='form-group'>
<label>Tedi:</label>
<input
                        type='number'
                        id='tedi'
                        value={tedi}
                        onChange={(e) => setTedi(e.target.value)}
                        required
                        placeholder='Tedi'
                    />
</div>
<div className='form-group'>
<label>Zipcourt:</label>
<input
                        type='number'
                        id='zipCourt'
                        value={zipCourt}
                        onChange={(e) => setZipCourt(e.target.value)}
                        required
                        placeholder='Zip court '
                    />
</div>
<div className='form-group'>
<label>Mercydaz:</label>
<input
                        type='number'
                        id='mercydaz'
                        value={mercydaz}
                        onChange={(e) => setMercydaz(e.target.value)}
                        required
                        placeholder='Mercydaz'
                    />
</div>
<div className='form-group'>
<label>Micro:</label>
<input
                        type='number'
                        id='micro'
                        value={micro}
                        onChange={(e) => setMicro(e.target.value)}
                        required
                        placeholder='Micro'
                    />
</div>
<div className='form-group'>
<label>Ssn:</label>
<input
                        type='number'
                        id='ssn'
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        required
                        placeholder='Ssn'
                    />
</div>
<div className='form-group'>
<label>Gb:</label>
<input
                        type='number'
                        id='gb'
                        value={gb}
                        onChange={(e) => setGb(e.target.value)}
                        required
                        placeholder='Gb'
                    />
</div>
<div className='form-group'>
<label>Godawari:</label>
<input
                        type='number'
                        id='godawari'
                        value={godawari}
                        onChange={(e) => setGodawari(e.target.value)}
                        required
                        placeholder='Godawari'
                    />
</div>
<button type='submit' className='add-sld-button'>Add-Sld</button>
</form>
</div>
    )
}
 
export default AddSldLocals