import React, { useState } from 'react'
import classes from './search.module.css'
import { useNavigate, useParams } from 'react-router-dom';
export default function Search() {
    const [term, setterm] = useState('');
    const navigate=useNavigate();
    const {searchTerm}=useParams();
    const search =async()=>
    {
        term ? navigate('/search/' +term) :navigate('/');
    };
  return (
    <div className={classes.container}>
        <input type='text'
        placeholder='Search food mine!'
        onChange={e=>setterm(e.target.value)}
        onKeyUp={e=> e.key === "Enter" && search()}
        defaultValue={searchTerm}
        ></input>
        <button onClick={search}>Search</button>
    </div>
  )
}
