import React from 'react'
import DataContext from './Context/DataContext'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import './UpdateSld.css'

const UpdateSldLocals = () => {   
     
    const { updateRtoName,setUpdateRtoName,updateZone,setUpdateZone,updateAlhena,setUpdateAlhena,updateGrl,setUpdateGrl,
     updatetedi,setUpdateTedi,updatezipCourt,setUpdateZipCourt,updatemercydaz,setUpdateMercydaz,updatemicro,SetMicro,updatessn,
     setUpdateSsn,updategb,setUpdateGb,updateGodawari,setUpdateGodawari,formDatas, setFormData} = useContext(DataContext)
          
     const {id}= useParams()
     console.log(id)
     const formData =formDatas.find(formData => formData.vechile_id == id)
    
     useEffect(()=>{
         if(formData){
          setUpdateRtoName(formData.rto_name)
          setUpdateZone(formData.zone)
          setUpdateAlhena(formData.alhena)
          setUpdateGrl(formData.grl)
          setUpdateTedi(formData.tedi)
          setUpdateZipCourt(formData.zipCourt)
          setUpdateMercydaz(formData.mercydaz)
          SetMicro(formData.micro)
          setUpdateSsn(formData.ssn)
          setUpdateGb(formData.gb)
          setUpdateGodawari(formData.godawari)

         }
     },[formData,setUpdateRtoName,setUpdateZone,setUpdateAlhena,setUpdateGrl,setUpdateTedi,setUpdateZipCourt,SetMicro,setUpdateMercydaz
         ,setUpdateSsn,setUpdateGb,setUpdateGodawari] )

         const navigate =useNavigate()
         const handleUpdate = async (formdataupdate) => {
  
             try {

                 const updateFormdata={vechile_id :formdataupdate.vechile_id,rto_name:updateRtoName,zone:updateZone,
                    alhena:updateAlhena,grl:updateGrl,
                    tedi:updatetedi,zipCourt:updatezipCourt,mercydaz:updatemercydaz,micro:updatemicro,ssn:updatessn,gb:updategb,
                    godawari:updateGodawari}
                 
                 const response= await axios.put(`https://localhost:7141/api/SLDLocalsontroller/updateSldlocals`,updateFormdata); 

                  setFormData(formDatas.map(formData => formData.vechile_id ===formdataupdate.employee_id? {...response.data}:formData))
                  navigate('/sld-report')
                 } catch (error)
                 {
                     console.log('Error:', error);
                 }
         }; 
       
  return (
    <div className='update-container'>
            
            <form className='update-form' onSubmit={(e)=>e.preventDefault()}>
                
                 <div className='update-form'>
                 <label>Rto name:</label>
                 <input
                    type='text'
                    id='rto_name'
                    required
                    value={updateRtoName} 
                    onChange={(e)=>setUpdateRtoName(e.target.value)}
                    placeholder='Rto name'
                   />
               <label>Zone:</label>
               <input
                    type='text' 
                    id='zone' 
                    required
                    value={updateZone} 
                    onChange={(e)=>setUpdateZone(e.target.value)}
                    placeholder='Zone'
                 />

                <label>Alhena:</label>
                <input 
                    type='number'
                    id='alhena'
                    required
                    value={updateAlhena} 
                    onChange={(e)=>setUpdateAlhena(e.target.value)}
                    placeholder='Alhena'
                     />
                
                <label>Grl:</label>
               <input 
                    type='number'
                    id='grl'
                    required
                    value={updateGrl} 
                    onChange={(e)=>setUpdateGrl(e.target.value)} 
                    placeholder='Grl'
                    />
                <label>Tedi:</label>
               <input 
                    type='number'
                    id='tedi'
                    required
                    value={updatetedi} 
                    onChange={(e)=>setUpdateTedi(e.target.value)} 
                    placeholder='Grl'
                    />
                <label>Zipcourt:</label>
                <input 
                    type='number'
                    id='zipCourt'
                    required
                    value={updatezipCourt} 
                    onChange={(e)=>setUpdateZipCourt(e.target.value)}
                    placeholder='ZipCourt' />
               <label>Mercydaz:</label>
               <input 
                    type='number'
                    id='mercydaz'
                    required
                    value={updatemercydaz} 
                    onChange={(e)=>setUpdateMercydaz(e.target.value)}
                    placeholder='Mercydaz' />

               <label>Micro:</label>
               <input 
                    type='number' 
                    id='micro'
                    value={updatemicro}   
                    onChange={(e)=>SetMicro(e.target.value)} 
                    placeholder='Micro'/>

                  <label >Ssn </label>
                        <input 
                    type='number' 
                    id='ssn'
                    value={updatessn}   
                    onChange={(e)=>setUpdateSsn(e.target.value)} 
                    placeholder='update date'/>

                  <label >gb </label>
                    <input 
                    type='number' 
                    id='gb'
                    value={updategb}   
                    onChange={(e)=>setUpdateGb(e.target.value)} 
                    placeholder='Gb'/>

           

               <label >Godawari </label>
                        <input 
                         type='number' 
                         id='godawari'
                         value={updateGodawari}   
                         onChange={(e)=>setUpdateGodawari(e.target.value)} 
                         placeholder='Godawari'/>     
                
                  <button className='save-button' type='submit' onClick={() => handleUpdate(formData)}>Save Changes</button>
                  
                 </div>
                
                
            </form>
        </div>
  )
}

export default UpdateSldLocals