import React from 'react'
import {Grid,Typography,Link} from '@mui/material'
import image from './invincible-houseplants-logo-used.png'
function Navbar() {
  return (
    <>
    <img style={{height:'10%',width:'10%', marginLeft:'300px',}} src={image} alt='hello'/>
    <Grid container  spacing={10} sx={{ backgroundColor:'white', justifyContent:"center" }}>
    <Grid item> 
    <Link href="/" underline="hover" ><Typography variant='h6' sx={{color:'black', fontFamily:"Times New Roman"}}>Home</Typography></Link>
    </Grid>
    <Grid item>
    <Link href="#" underline="hover" ><Typography variant='h6' sx={{color:'black',fontFamily:"Times New Roman"}}>Blogs</Typography></Link>
    </Grid>
    <Grid item>
    <Link href="/about" underline="hover" ><Typography variant='h6' sx={{color:'black',fontFamily:"Times New Roman"}}>About</Typography></Link>
    </Grid>
    

    </Grid>

    
    </>
   
  )
}

export default Navbar