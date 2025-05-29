import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import poster from '../assets/poster.webp';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';
import img5 from '../assets/img5.png';
import professional from '../assets/professional-industrial-welder-welding-metal-parts-metalworking-factory.jpg';

const images = [
  poster,
  poster1,
  poster2,
  img5,
  professional,
  poster,
  poster1,
  poster2,
  img5,
  professional,
  poster,
  poster1,
  null,
  null,
];

const Imgallery = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/')}
          sx={{
            bgcolor: 'black',
            color: 'white',
            px: 4,
            py: 1,
            fontWeight: 'bold',
            ':hover': {
              color: 'black',
              bgcolor: 'grey',
            },
          }}
        >
          Back to Home
        </Button>
      </Box>

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', color: 'green', mb: 4 }}
      >
        Gallery
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {images.map((img, index) =>
          img ? (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Gallery image ${index + 1}`}
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          ) : (
            <Box key={index} />
          )
        )}
      </Box>
    </Box>
  );
};

export default Imgallery;
