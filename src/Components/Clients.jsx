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
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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
          fontSize: { xs: '24px', sm: '28px', md: '34px' },
          transition: 'all 0.3s ease',
          '&:hover': { color: 'green' },
        }}
      >
        Our Esteemed Clients
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: '500',
          fontSize: { xs: '13px', sm: '14px', md: '18px' },
          color: 'grey',
          mb: 4,
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 1, sm: 3 },
        }}
      >
        Neon Solutions is honored to have partnered with leading organizations across various industries. Our dedication to delivering innovative, reliable, and efficient machinery solutions has made us a trusted name in the field.
      </Typography>

      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                px: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Client ${index + 1}`}
                sx={{
                  width: { xs: '80%', sm: '70%', md: '100%' },
                  height: { xs: '120px', sm: '150px', md: '200px' },
                  objectFit: 'contain',
                  borderRadius: 2,
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
