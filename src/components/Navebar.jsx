import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import {logo} from '../data'
const Navebar = () => {
  const [searchTerm,setSearchTerm] =useState('')
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault();

    if(searchTerm){
      navigate(`search/${searchTerm}`)
      // console.log(navigate);
      
      setSearchTerm('')
    }
  }
  return (
    <nav className="flex flex-row justify-between items-center p-5">
      <Link to={"/"}>
        <img className="w-10" src={logo} alt="logo" />
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-row items-center bg-white rounded-full p-3 w-200">
        <input
        onChange={(e)=>setSearchTerm(e.target.value)}
          type="text"
          placeholder="search..."
          className="text-black px-2 w-96 rounded-full border-none outline-none"
        />
        <button type="submit">
        <FaSearch className="text-red-600" />
        </button>
      </form>
    </nav>
  );
};

export default Navebar;
