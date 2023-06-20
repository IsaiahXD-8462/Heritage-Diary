import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiaryProfileForm = (props) => {

    const [picture, setPicture] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [education, setEducation] = useState('');
    const [biography, setBiography] = useState('');
    
    //Axios call (url, data, headers)

    async function handleSubmit(event) {
        const response = await axios.post('http://127.0.0.1:8000/api/diaries/', newProfile)
        event.preventDefault();
        let newProfile = {
            picture: picture,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            hairColor: hairColor,
            eyeColor: eyeColor,
            height: height,
            weight: weight,
            diagnosis: diagnosis,
            placeOfBirth: placeOfBirth,
            education: education,
            biography: biography
        };
        console.log(response.data);
        props.addNewProfileProperty(response.data)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Picture</label>
            <input type='text' value={picture} onChange={(event) => setPicture(event.target.value)} />
            <label>First Name</label>
            <input type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <label>Middle Name</label>
            <input type='text' value={middleName} onChange={(event) => setMiddleName(event.target.value)} />
            <label>Last Name</label>
            <input type='text' value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <label>Date Of Birth</label>
            <input type='text' value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
            <label>Hair Color</label>
            <input type='text' value={hairColor} onChange={(event) => setHairColor(event.target.value)} />
            <label>Eye Color</label> 
            <input type='text' value={eyeColor} onChange={(event) => setEyeColor(event.target.value)} />
            <label>Height</label>
            <input type='text' value={height} onChange={(event) => setHeight(event.target.value)} />
            <label>Weight</label>
            <input type='text' value={weight} onChange={(event) => setWeight(event.target.value)} />
            <label>Diagnosis</label>
            <input type='text' value={diagnosis} onChange={(event) => setDiagnosis(event.target.value)} />
            <label>Place of Birth</label>
            <input type='text' value={placeOfBirth} onChange={(event) => setPlaceOfBirth(event.target.value)} />
            <label>Education</label>
            <input type='text' value={education} onChange={(event) => setEducation(event.target.value)} />
            <label>Biography</label>
            <input type='text' value={biography} onChange={(event) => setBiography(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
     );
}
export default DiaryProfileForm;