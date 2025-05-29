import React, { useEffect } from 'react';
import poster from '../assets/poster.webp';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';
import { Box, Button, Typography } from '@mui/material';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        maxWidth: '1200px',    // limit max width for big screens
        mx: 'auto',            // center horizontally
        gap: 4,                // vertical spacing between children
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
            xs: 'repeat(1, 1fr)',   // 1 column on extra small screens
            sm: 'repeat(2, 1fr)',   // 2 columns on small screens
            md: 'repeat(5, 1fr)',   // 5 columns on medium and above
          },
          gridAutoRows: '180px',
          gap: 2,                  // a bit bigger gap between grid items
          width: { xs: '95%', md: '100%' }, // full width inside maxWidth container
        }}
      >
        <Box
          sx={{
            gridColumn: { xs: 'span 1', md: 'span 3' },
            gridRow: { xs: 'auto', md: 'span 5' },
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={poster}
            alt="Poster"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: { xs: 'span 1', md: 'span 1' },
            gridRow: { xs: 'auto', md: 'span 2' },
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={poster1}
            alt="Poster 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: { xs: 'span 1', md: 'span 1' },
            gridRow: { xs: 'auto', md: 'span 2' },
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={poster2}
            alt="Poster 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: { xs: 'span 1', md: 'span 1' },
            gridRow: { xs: 'auto', md: 'span 2' },
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={poster1}
            alt="Poster 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: { xs: 'span 1', md: 'span 1' },
            gridRow: { xs: 'auto', md: 'span 2' },
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={poster2}
            alt="Poster 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>
      </Box>

      <Button
        sx={{
          bgcolor: 'black',
          color: 'white',
          px: 4,
          py: 1,
          ':hover': {
            color: 'black',
            bgcolor: 'grey',
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
