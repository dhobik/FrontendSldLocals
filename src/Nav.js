import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-header">
        <h5>WELCOME - ADMIN</h5>
    </div>
    <ul className="sidebar-menu">
        <li><h4>Manufacturer</h4></li>
        <li><h4>RTO</h4></li>
        <li><Link to={`/add-sld-report`}><h4>Vechile File Upload</h4></Link></li>
        <li><h4>RTOZone</h4></li>
        <li><h4>RTOMapping</h4></li>       
        <li><Link to={`/sld-report`}><h4>SLD Report</h4></Link></li>
        
        
    </ul>
</div>
  )
}

export default Nav