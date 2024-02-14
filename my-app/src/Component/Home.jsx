import React from 'react';
import Navbar from './Navbar';
import picture from './invincible-houseplants-blog-indoor-urban-jungle.jpg';
import blog from './how-to-create-a-plant-loving-home.jpg'
import blog1 from './fresh-herbs-scented-potted-plants-kitchen.jpg'
import blog2 from './new-leaf-new-growth-baby-fiddle-leaf-fig.jpg'
import blog3 from './productivity-bedroom-houseplant-filled-hotel-jungle-london.jpg'
import manpic from './invincible_house_plants_urban_jungle_blog_care (1).jpg'
import { Box, Grid, Typography,Card,CardActionArea,CardMedia,CardContent, Divider ,Link } from '@mui/material';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Grid container xs={12}>
      <Box sx={{ position: 'relative' }}>
        <img style={{ height: '90%', width: '100%', paddingTop: '20px' }} src={picture} alt='picture' />
        <Box sx={{ position: 'absolute', top: '10%', left: '33%',  textAlign: 'center'}}>
          <Typography variant='h6' sx={{ fontStyle: 'italic',fontSize: { xs: '14px', sm: '18px', md: '24px' } }}>Welcome to The Houseplant & Urban Jungle Blog</Typography>
          <br />
          <Typography variant='h3' sx={{color:'green',fontFamily:"Times New Roman",fontWeight: 'bold',fontSize: { xs: '24px', sm: '32px', md: '48px' } }}>HEALTHY PLANTS</Typography>
          <br />
          <Typography variant='h6' sx={{fontSize: { xs: '14px', sm: '18px', md: '24px' }}}>HAPPY HOMES</Typography>
        </Box>
      </Box>
      </Grid>
      <Box>
      <Typography variant='h5' sx={{color:'green',fontFamily:"Times New Roman",fontWeight: 'bold', marginLeft:'10%',marginTop:'3%'}}>Latest Blog Post</Typography>
      </Box>
      
      <Grid container spacing={3} sx={{paddingLeft:'10%',paddingRight:'10%',paddingTop:'5%', paddingBottom:'2%'}}>
      
        <Grid item md={6} lg={3}>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog}
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          How To Get New Leaves on Ficus Lyrata (Fiddle-leaf Fig plant)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            

        </Grid>
        <Grid item md={6} lg={3}>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog1}
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          How To Get New Leaves on Ficus Lyrata (Fiddle-leaf Fig plant)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            

        </Grid>
        <Grid item md={6} lg={3}>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog2}
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          How To Get New Leaves on Ficus Lyrata (Fiddle-leaf Fig plant)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            

        </Grid>
        <Grid item md={6} lg={3}>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog3}
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          How To Get New Leaves on Ficus Lyrata (Fiddle-leaf Fig plant)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            

        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ paddingTop: '1%' }}>
      
        <hr style={{ width: '80%', borderTop: '1px solid black' }} />
      
    </Grid>
      <Grid container sx={{justifyContent:'center', paddingTop:'3%'}} md={12}>
      <Box>
        <Typography variant='h3' sx={{fontFamily:'Times New Roman'}}>THE HOUSEPLANT & URBAN JUNGLE BLOG</Typography>
        <br />
        <Typography variant='h6' sx={{color:'green', paddingTop:'2%',paddingLeft:'20%'}}>HOUSEPLANTS SHOULD BE EASY, DON’T YOU AGREE?</Typography>
        <br />
        <Typography variant='h7' sx={{paddingLeft:'10%' ,fontFamily:'Times New Roman'}}>When I started my urban jungle, I wanted to find all the houseplant care tips in one place. That’s why I created this blog.</Typography>
        <br />
        </Box>
        </Grid>
        
    <Grid container spacing={0} sx={{justifyContent:'center', paddingTop:'3%' }}>
      
        <Grid item lg={4} md={12} xs={12}  sx={{paddingLeft:{md:'0px', lg:'250px'}}} >
            <img style={{height:'100%',width:'90%' ,alignItems:'center'}}src={manpic} alt="Manpic" />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
           <Box>
            <Typography>Hi, I’m Boris. </Typography>
            <br />
            <Typography>
            I've drowned a few Aloe Vera's, I confess (and almost 
            gave up on indoor plants). They're beautiful but need
            care, or so I thought. I’ve gathered here all the tips
            that make plant care easy - like a plant bible, if you
            will. Make sure we’re connected on social media
            before we start.
            </Typography>
           </Box>
        </Grid>
    </Grid>
    <Grid container justifyContent="center" sx={{ paddingTop: '1%' }}>
      
      <hr style={{ width: '80%', borderTop: '1px solid black' }} />
    
  </Grid>
              <Box sx={{textAlign:'center',paddingTop:'2%'}}>
                  <Typography variant='h5' sx={{color:'green'}}>FREE INDOOR PLANT CARE TIPS</Typography>
              </Box>
    <Grid container sx={{paddingLeft:'10%',paddingTop:'4%'}}>
              <Grid item md={6} sx={{flexGrow:'3'}}>
                <Box>
                    <Typography>
                    <span style={{fontWeight:'bold'}}>Here’s a tip for you:</span> avoid placing your plant next to heat sources (radiator) or in cold or windy spots. Brutal
                    variations in temperature and humidity can be detrimental. Stability is key. 
                    </Typography>
                    <br />
                    <Typography>
                    <span style={{fontWeight:'bold'}}>For many, plant maintenance is still a tricky discipline,</span> between a science and an art. Too much water - too
                    little water - direct or indirect sunlight, I know the confusion. On this blogsite, I cover everything you need to know to <span style={{fontWeight:'bold'}}>grow your favorite houseplants with confidence.</span> 
                    </Typography>
                    <br />
                    <Typography>
                    Thanks to that, I grow and maintain <span style={{fontWeight:'bold'}}>stunning houseplants all year round & at low cost.</span> And so will you!
                    </Typography>
                </Box>
              </Grid>
              <Grid item md={6} sx={{paddingLeft:'4%' ,flexGrow:'1'}}>
                <Box>
                  <Typography variant='h6' sx={{color:'green'}}>
                  TOP BLOG POSTS IN PLANT CARE:
                  </Typography>
                  <br />
                  <Box sx={{paddingLeft:'10px'}}>
                  <Link href="#" underline="hover" ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Ficus elastica plant care</Typography></Link><br /><br />
                  <Link href="#" underline="hover" ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Universal watering tips</Typography></Link><br /><br />
                  <Link href="#" underline="hover" ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Grow your own avocado plant</Typography></Link><br /><br />
                  <Link href="#" underline="hover" ><Typography variant='h7' sx={{color:'black', fontFamily:"Times New Roman"}}>Best plant-stagram accounts</Typography></Link>
                  </Box>
                </Box>
              </Grid>
    </Grid>
    <Footer></Footer>
    </>
  );
}

export default Home;
