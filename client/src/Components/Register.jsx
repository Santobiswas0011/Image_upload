import React from 'react';

import { Box, Typography, TextField, styled, Button } from '@mui/material';
import { useState } from 'react';
import { addRegisterData } from '../service/api';
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
     display: flex;
     flex-direction: column;
     width:50%;
     margin:10px auto;
`
const TestStyle = styled(TextField)`
      margin-top:10px;
`

const Register = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({ uName: "", uEmail: "", password: "" });
  const { uName, uEmail, password } = data;

  const [file, setFile] = useState("");

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData({ ...data, [fieldName]: fieldValue });
  }
  const handleImage = (e) => {
    setFile(e.target.files[0])
  }

  const handleClick = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("uName", uName);
    formData.append("uEmail", uEmail);
    formData.append("password", password);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const res = await addRegisterData(formData, config);
    if (res.status === 201) {
      navigate("/", { replace: true })
    } else {
      navigate("/register", { replace: true })
    }
  }
  return (
    <>
      <Typography style={{ textAlign: 'center' }} variant='h4'>Register page</Typography>
      <Component>
        <TestStyle required value={uName} onChange={handleChange} name='uName' id="standard-basic" label="Inter your name" variant="standard" />
        <TestStyle required value={uEmail} onChange={handleChange} name='uEmail' id="standard-basic" label="Inter your email" variant="standard" />
        <TestStyle required value={password} onChange={handleChange} name='password' id="standard-basic" label="Inter password" variant="standard" />
        <TestStyle required onChange={handleImage} name='photo' type="file" id="standard-basic" variant="standard" />
        <Button onClick={handleClick} className='btnStyle' type='submit' variant="contained">Submit</Button>
      </Component>
    </>
  )
}

export default Register;
