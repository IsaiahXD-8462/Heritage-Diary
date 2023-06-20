import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    
    const [ profile, getprofile ] = useState ([]);
    
    async function searchallprofiles() {
        const response = await axios.get("http://127.0.0.1:8000/api/diaries/")
        try{
          getprofile(response.data)}
        catch(error){
          console.log(error)
        };
      }
    
    return (         
    <form onSubmit={searchallprofiles}>
        <label>Search</label> 
        <input placeholder="Type To Search..." type='text' onChange={(event) => getprofile(event.target.value)} />           
        <button type='submit'>search</button>
    </form>
    );
}
 
export default SearchBar;