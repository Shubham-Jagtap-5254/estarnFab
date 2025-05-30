import React, { useEffect } from 'react';
import poster from '../assets/poster.webp';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';
import { Box, Button, Typography } from '@mui/material';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  const images = [poster, poster1, poster2, poster1, poster2];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        maxWidth: '1200px',
        mx: 'auto',
        gap: 4,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', color: 'green' }}
      >
        Gallery
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 2,
          width: '100%',
        }}
      >
        {images.map((imgSrc, index) => (
          <Box
            key={index}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              aspectRatio: '1 / 1', // maintain square images
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              },
            }}
          >
            <img src={imgSrc} alt={`Poster ${index + 1}`} />
          </Box>
        ))}
      </Box>

      <Button
        sx={{
          bgcolor: 'black',
          color: 'white',
          px: 4,
          py: 1,
          mt: 2,
          ':hover': {
            color: 'black',
            bgcolor: 'grey.300',
          },
        }}
        onClick={() => window.open('/imgallery', '_blank')}
      >
        See More
      </Button>
    </Box>
  );
};

export default Gallery;
