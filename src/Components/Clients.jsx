import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import clientImage1 from '../assets/image copy 2.png';
import clientImage2 from '../assets/image copy.png';
import clientImage3 from '../assets/image copy 3.png';
import clientImage4 from '../assets/image copy 4.png';
import clientImage5 from '../assets/image copy 5.png';

const images = [
  clientImage1,
  clientImage2,
  clientImage3,
  clientImage4,
  clientImage5,
];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ textAlign: 'center', px: 2, py: 4 }}>
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
        Our Esteemed Clients
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '12px', md: '18px' },
          color: 'grey',
          mb: 4,
        }}
      >
        Neon Solutions is honored to have partnered with leading organizations across various industries. Our dedication to delivering innovative, reliable, and efficient machinery solutions has made us a trusted name in the field.
      </Typography>

      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <img
                src={img}
                alt={`Client ${index + 1}`}
                style={{
                  width: '200%',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: 8,
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Clients;
