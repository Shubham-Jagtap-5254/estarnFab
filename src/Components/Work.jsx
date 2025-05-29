import React from 'react'
import { Paper, Button, Typography } from '@mui/material'
import { Box } from '@mui/material'

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
      <Box id="work" py={4}>
        <Typography letterSpacing={1} align="center" variant="h3" sx={{ color: 'black', mb: 1 }}>
          Work done
        </Typography>
        <Typography letterSpacing={1} align="center" variant="h6" fontStyle={'italic'} sx={{ color: 'grey' }}>
          Work Done By Our Team Members
        </Typography>
      </Box>

      <Box
        sx={{
          width: '80%',
          display: 'grid',
          alignItems:'center',
          ml:'10%',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 4,
          justifyContent: 'center',
          py: 4,
          px: 2,
        }}
      >
        {workItems.map(({ title, date, description, imgSrc, imgAlt }, index) => (
          <Paper
            key={index}
            square={false}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '90%', sm: '100%' },
              height: 500,
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              backgroundColor: 'white',
              color: 'black',
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                width: '100',
                height: 300,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <img src={imgSrc} alt={imgAlt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '24px' }, mb: 1 }}>{title}</Typography>
              <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '18px' }, mb: 1, color: 'grey' }}>{date}</Typography>
              <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, mb: 3 }}>{description}</Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button
                 onClick={() => window.open('/Workdone', '_blank')}
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: 'grey' },
                  

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
