import React from 'react'
import { Paper, Button, Typography, Box } from '@mui/material'

const Work = () => {
  const workItems = [
    {
      title: '',
      date: '',
      description: '.',
      imgSrc: '/src/assets/poster2.webp',
      imgAlt: 'Image 1',
    },
    {
      title: '',
      date: '',
      description: '',
      imgSrc: '/src/assets/poster2.webp',
      imgAlt: 'Image 1',
    },
    {
      title: '',
      date: '',
      description: '',
      imgSrc: '/src/assets/poster.webp',
      imgAlt: 'Image 2',
    },
    {
      title: '',
      date: '',
      description: '',
      imgSrc: '/src/assets/poster1.webp',
      imgAlt: 'Image 3',
    },
  ]

  return (
    <>
      <Box id="work" py={{ xs: 4, sm: 6 }}>
        <Typography
          letterSpacing={1}
          align="center"
          variant="h3"
          sx={{
            color: 'black',
            mb: 1,
            fontSize: { xs: '2rem', sm: '2.75rem', md: '3rem' },
            px: 2,
          }}
        >
          Work done
        </Typography>
        <Typography
          letterSpacing={1}
          align="center"
          variant="h6"
          fontStyle="italic"
          sx={{
            color: 'grey',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            px: 2,
          }}
        >
          Work Done By Our Team Members
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
            lg: 'repeat(4, 1fr)',
          },
          gap: { xs: 3, sm: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 3, sm: 5 },
        }}
      >
        {workItems.map(({ title, date, description, imgSrc, imgAlt }, index) => (
          <Paper
            key={index}
            square={false}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              p: { xs: 2, sm: 3 },
              backgroundColor: 'white',
              color: 'black',
              boxShadow: 3,
              height: '100%', // full height for consistent cards
              minHeight: 500,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: 200, sm: 250, md: 280 },
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '18px', sm: '22px' },
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                {title || '\u00A0' /* non-breaking space if empty */}
              </Typography>
              <Typography
                sx={{
                  fontStyle: 'italic',
                  fontSize: { xs: '14px', sm: '16px' },
                  mb: 1,
                  color: 'grey',
                  textAlign: 'center',
                }}
              >
                {date || '\u00A0'}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '16px' },
                  mb: 3,
                  textAlign: 'center',
                  minHeight: '3rem',
                }}
              >
                {description || '\u00A0'}
              </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => window.open('/Workdone', '_blank')}
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: 'grey' },
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                }}
              >
                See More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  )
}

export default Work
