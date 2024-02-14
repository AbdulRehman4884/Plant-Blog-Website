// About.js
import { Box, Grid, Typography, TextField, Button} from '@mui/material'
import React, { useState } from 'react'
import Footer from './Footer';
import pic from './invincible_house_plants_urban_jungle_blog_care (1).jpg'
import Navbar from './Navbar';
import axios from 'axios'

function About() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message
    })
    .then(result => {
      console.log(result);
      // Optionally, you can clear the form fields here
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <Navbar />
      <Box sx={{ paddingLeft: '15%' }}>
        <Typography variant='h4' sx={{ color: 'green', fontFamily: 'Times New Roman' }}> 
          ABOUT THE BLOG
        </Typography>
      </Box>
      <Grid container  sx={{ paddingTop: '3%' }}>
        <Grid item md={8} lg={6} sm={12} sx={{ paddingLeft: '10%' }}>
          <img style={{ width: '500px', height: '400px' }} src={pic} alt='Picture' />
        </Grid>
        <Grid item md={4} lg={4} sm={12} sx={{ paddingLeft: '3%', paddingTop: '6%' }}>
          <Typography variant='h3' sx={{ fontFamily: 'Times New Roman', fontStyle: 'italic', fontWeight: 'bold' }}>
            "I WANTED TO SPEND LESS TIME LOOKING AFTER MY PLANTS...
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: 'Times New Roman' }}>
            ...but still have them everywhere in my flat!"
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ paddingTop: '1%' }}>
        <hr style={{ width: '80%', borderTop: '1px solid black' }} />
      </Grid>
      <Grid container sx={{ paddingLeft: '15%' }}>
        <Box component="form" onSubmit={handleSubmit} sx={{}}>
          <Box sx={{ display: 'flex',  width: '1000px' }}>
            <TextField fullWidth onChange={(e) => setFirstName(e.target.value)} name="firstname" id="firstname" label="firstname" variant="outlined" sx={{ m: 1, mb: 2 }} />
            <TextField fullWidth onChange={(e) => setLastName(e.target.value)} name="lastname" id="lastname" label="lastname" variant="outlined" sx={{ m: 1, mb: 2 }} />
          </Box>
          <TextField fullWidth onChange={(e) => setEmail(e.target.value)} name="email" id="email" label="email" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth onChange={(e) => setSubject(e.target.value)} name="subject" id="subject" label="subject" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth onChange={(e) => setMessage(e.target.value)} name="message" id="message" label="message" variant="outlined" sx={{ mb: 2 }} />
          <Button type="submit">Submit</Button>
        </Box>
      </Grid>
      <Footer />
    </>
  )
}

export default About;
