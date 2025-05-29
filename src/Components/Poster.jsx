import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import poster from '../assets/poster.webp';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';

const AutoChangingBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [poster, poster1, poster2];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 📌 Add this scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="home" sx={{ mt: '40px', position: 'relative', height: { xs: 300, sm: 400, md: 700 }, overflow: 'hidden' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      <Box
        sx={{
          position: 'absolute',
          top: { xs: '20%', sm: '25%', md: '30%' },
          left: { xs: '5%', sm: '6%', md: '8%' },
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
          borderRadius: '8px',
          zIndex: 2,
          width: { xs: '90%', sm: 'auto' },
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '32px', sm: '48px', md: '60px' } }}>
          Welcome to our
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '32px', sm: '48px', md: '60px' } }}>
          website
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px', md: '20px' }, mt: 1 }}>
          Design. Refurbish. Maintain – Powering Industries with Precision and Excellence.
        </Typography>
        <Button 
          onClick={() => handleScroll('about')}
          variant="contained"
          sx={{
            textTransform: 'none',
            bgcolor: 'white',
            color: 'black',
            fontSize: { xs: 'small', sm: 'medium', md: 'large' },
            borderRadius: 1.8,
            mt: { xs: '30px', sm: '40px', md: '50px' },
            ':hover': { color: 'black', bgcolor: 'grey.400' },
          }}
        >
          Know More
        </Button>
      </Box>
    </Box>
  );
};

export default AutoChangingBackground;
