import { createContext, useState} from "react";






const DataContext = createContext({})

export const DataProvider = ({children}) =>{

    const [formDatas, setFormData] = useState([]);

    const [rtoName,setRtoName] = useState('')
    const [zone,setZone] = useState('')
    const [alhena,setAlhena] = useState('')
    const [grl,setGrl] = useState('')
    const [tedi,setTedi] = useState('')
    const [zipCourt,setZipCourt] = useState('')
    const [mercydaz,setMercydaz] = useState('')
    const [micro,setMicro] = useState('')
    const [ssn,setSsn] = useState('')
    const [gb,setGb] = useState('')
    const [godawari,setGodawari] = useState('')

    const[search,setSearch]= useState('')
    
    
    const [updateRtoName,setUpdateRtoName] = useState('')
    const [updateZone,setUpdateZone] = useState('')
    const [updateAlhena,setUpdateAlhena] = useState('')
    const [updateGrl,setUpdateGrl] = useState('')
    const [updatetedi,setUpdateTedi] = useState('')
    const [updatezipCourt,setUpdateZipCourt] = useState('')
    const [updatemercydaz,setUpdateMercydaz] = useState('')
    const [updatemicro,SetMicro] = useState('')
    const [updatessn,setUpdateSsn] = useState('')
    const [updategb,setUpdateGb] = useState('')
    const [updateGodawari,setUpdateGodawari] = useState('')

    const[fromDate,setFormDate]=useState('')
    const[toDate,setTodate]=useState('')
    const[rtoZone,setRtoZone]=useState('')
    const[rtoname,setrtoName]=useState('')
    const[manufacturerName,setManufactureNmae]=useState('')
    
  
   
      
             
    return(
        <DataContext.Provider value={{
            formDatas,setFormData,rtoName,setRtoName,zone,setZone,alhena,setAlhena,grl,setGrl,tedi,setTedi,
            zipCourt,setZipCourt,mercydaz,setMercydaz,micro,setMicro,ssn,setSsn,gb,setGb,godawari,setGodawari,search,setSearch,
            updateRtoName,setUpdateRtoName,updateZone,setUpdateZone,updateAlhena,setUpdateAlhena,updateGrl,setUpdateGrl,
            updatetedi,setUpdateTedi,updatezipCourt,setUpdateZipCourt,updatemercydaz,setUpdateMercydaz,updatemicro,SetMicro,updatessn,
            setUpdateSsn,updategb,setUpdateGb,updateGodawari,setUpdateGodawari,fromDate,setFormDate,toDate,setTodate,rtoZone,setRtoZone,
            rtoname,setrtoName,manufacturerName,setManufactureNmae    

        }}>
            {children}
        </DataContext.Provider>

     
    )
}
export default DataContext