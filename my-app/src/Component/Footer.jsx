import { Box, Grid, Typography,Link } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <>
        <Grid container xs={12} sx={{height:'500px',width:'100%', backgroundColor:'lightblue',justifyContent:'center'}}>
                <Box sx={{paddingTop:'6%'}}>
                    <Typography variant='h5' sx={{color:'darkgreen',fontFamily:'Times New Roman',fontWeight:'bold'}}>
                    © 2021 INVINCIBLE HOUSEPLANTS
                    </Typography>
                    <br />
                    <Typography variant='h6' sx={{fontFamily:'Times New Roman',paddingLeft:'15%'}}>
                        HAPPY & EASY HOUSEPLANTS
                        
                    </Typography>
                    <br />
                    
                    <Typography variant='h7' sx={{fontFamily:'Times New Roman',paddingLeft:'25%'}}>
                   
                        FOR YOUR URBAN JUNGLE
                    </Typography>
                    
                    <Typography>
                    <br />
        Care Tips • Self-Watering • Deco Ideas & Green Inspiration
                    </Typography>
                    <br />
                    <Box sx={{paddingLeft:'40%'}}>
                    <InstagramIcon style={{ marginRight: '15px' }} />
                    <PinterestIcon />
                    </Box>
                    <Box sx={{display:'flex',paddingLeft:'30%',paddingTop:'20%'}}>
                    <Link href="#" underline="hover" sx={{marginRight:'20px'}}><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Home</Typography></Link>
                    <Link href="#" underline="hover" sx={{marginRight:'20px'}} ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Blog</Typography></Link>
                    <Link href="#" underline="hover" ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>About</Typography></Link>
                    </Box>
                </Box>

                
                
                
        </Grid>
    
    </>
  )
}

export default Footer