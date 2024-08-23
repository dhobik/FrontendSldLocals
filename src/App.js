
import './App.css';
import { DataProvider } from './Context/DataContext';
import Header from './Header';
import'./App.css'
import Nav from './Nav';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'; 
import SldList from './SldList';
import AddSldLocals from './AddSldLocals';
import UpdateSldLocals from './UpdateSldLocals';



function App() {
  
  return (
   
    <DataProvider>
      <Router>
      <div className='app-container'>

       <Header/>
        <Nav/>   
       <Routes>
       <Route path='/add-sld-report' element={<AddSldLocals/> } />
       <Route path='/sld-report' element={<SldList/> } /> 
       <Route path='/edit-sld/:id' element={<UpdateSldLocals/>} />  
           
       </Routes>
      
      </div>
      </Router>
       
    </DataProvider>
   
  );
}

export default App;
