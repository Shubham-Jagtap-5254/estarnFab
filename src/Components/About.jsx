import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/img5.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        mt: '20px',
        p: { xs: 2, md: 4 },
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '250px', sm: '300px', md: '80vh' },
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      />
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          pl: { xs: 0, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '28px', md: '34px' },
            transition: 'all 0.3s ease',
            '&:hover': { color: 'green' },
          }}
        >
          About Us
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '22px', md: '30px' }, color: 'black', mb: 2 }}>
          Design Specialists in High-Performance Machinery
        </Typography>
        <Typography sx={{ color: 'black', mb: 2, fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.6 }}>
          "We, ‘EasternFab Group’ fabricate structures, Pressure Vessel, Tanks, Air Pollution Equipment, Industrial Fans, Silos, Custom items, and Heavy as well as Light Equipment. Our well-organized infrastructure backs us in the fabrication of our exceptional range of products."
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            width: '40%',
            textTransform: 'none',
            bgcolor: 'white',
            color: 'black',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            borderRadius: 1.8,
            mt: { xs: '30px', sm: '40px', md: '50px' },
            ml: '30%',
            ':hover': { color: 'black', bgcolor: 'grey' },
          }}
        >
          Read More
        </Button> */}
      </Box>
    </Box>
  );
};

export default About;
