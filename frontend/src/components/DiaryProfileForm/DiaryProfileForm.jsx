import React, { useState, useEffect } from 'react';

const DiaryProfileForm = (props) => {

    const [profile, setProfile] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newProfile = {
            profile: profile
        };
        console.log(newProfile);
        props.addNewProfileProperty(newProfile)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Comment</label>
            <input type='text' value={comment} onChange={(event) => setProfile(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
     );
}
export default DiaryProfileForm;