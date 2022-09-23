import React, { useEffect, useState } from 'react';

import { Box, Typography, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";


import { delete_user, get_user_data } from '../service/api';

const Wrapper = styled(Box)`
    margin:15px;
    display:flex;
    flex-wrap: wrap;
`
const CardStyle = styled(Card)`
     margin-right:10px;
     margin-top:15px;
`

const Home = () => {

  // const navigate=useNavigate();

  const [users, setUser] = useState("");

  // console.log(users);

  const getUserData = async () => {
    const res = await get_user_data();
    setUser(res.data);
  }

  useEffect(() => {
    getUserData();
  }, [])

  const deleteUser=async(id)=>{
     const res = await delete_user(id);
      if(res.status === 201){
        getUserData();
      }
  }

  return (
    <Box>
      <Typography className='textStyle' style={{ textAlign: "center", marginTop: "70px" }} variant='h5'>
        MERN STACK Image Upload Porject
      </Typography>
      <Wrapper>
        {
          users &&
          users.map((user) => {
            const {_id}=user;
            return (
              <CardStyle key={_id} sx={{ maxWidth: 345 }}>
                <img src={`/uploads/${user.imgPath}`} alt="" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     User Name : {user.uName}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                     User Email : {user.uEmail}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>deleteUser(_id)} style={{ textTransform: "none" }} variant="contained">Remove</Button>
                </CardActions>
              </CardStyle>
            )
          })
        }
      </Wrapper>
    </Box>
  )
}

export default Home;
