import React, { useEffect } from 'react';
import poster from '../assets/poster.webp';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';
import { Box, Button, Typography } from '@mui/material';

const styles = {
  parent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gap: '8px',
    marginLeft: '10%',
    marginRight: '10%',
  },
  div1: {
    gridColumn: 'span 3 / span 3',
    gridRow: 'span 5 / span 5',
  },
  div2: {
    gridRow: 'span 2 / span 2',
    gridColumnStart: 4,
  },
  div3: {
    gridRow: 'span 2 / span 2',
    gridColumnStart: 4,
    gridRowStart: 3,
  },
  div4: {
    gridRow: 'span 2 / span 2',
    gridColumnStart: 5,
    gridRowStart: 1,
  },
  div5: {
    gridRow: 'span 2 / span 2',
    gridColumnStart: 5,
    gridRowStart: 3,
  },
};

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', color: 'green', mb: 4 }}
      >
        Gallery
      </Typography>

      <Box style={styles.parent}>
        <Box style={styles.div1}>
          <img src={poster} alt="Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box style={styles.div2}>
          <img src={poster1} alt="Poster 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box style={styles.div3}>
          <img src={poster2} alt="Poster 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box style={styles.div4}>
          <img src={poster1} alt="Poster 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box style={styles.div5}>
          <img src={poster2} alt="Poster 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>

      <Button
        sx={{
          ml:80,
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
