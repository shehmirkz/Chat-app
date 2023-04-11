import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from './SearchBar';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <Navbar />
      <SearchBar />
    
    </div>
  )
}

export default Sidebar