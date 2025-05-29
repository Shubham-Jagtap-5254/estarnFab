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
        mt: { xs: 3, md: 5 },
        p: { xs: 2, sm: 3, md: 4 },
        gap: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '250px', sm: '350px', md: '80vh' },
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
        }}
      />

      {/* Content Section */}
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
            mb: { xs: 1, sm: 2 },
            fontSize: { xs: '26px', sm: '30px', md: '36px' },
            transition: 'all 0.3s ease',
            '&:hover': { color: 'green' },
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '18px', sm: '22px', md: '28px' },
            color: 'black',
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Design Specialists in High-Performance Machinery
        </Typography>

        <Typography
          sx={{
            color: 'black',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            lineHeight: 1.7,
          }}
        >
          "We, ‘EasternFab Group’ fabricate structures, Pressure Vessel, Tanks, Air Pollution Equipment, Industrial Fans, Silos, Custom items, and Heavy as well as Light Equipment. Our well-organized infrastructure backs us in the fabrication of our exceptional range of products."
        </Typography>

        {/* <Button
          variant="contained"
          onClick={() => navigate('/about')}
          sx={{
            width: { xs: '60%', sm: '50%', md: '40%' },
            textTransform: 'none',
            bgcolor: 'white',
            color: 'black',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            borderRadius: 2,
            alignSelf: { xs: 'center', md: 'flex-start' },
            mt: { xs: 2, sm: 3 },
            ':hover': { color: 'black', bgcolor: 'grey.300' },
          }}
        >
          Read More
        </Button> */}
      </Box>
    </Box>
  );
};

export default About;
