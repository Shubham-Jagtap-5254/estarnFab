import React from 'react'
import { Paper, Button, Typography, Box } from '@mui/material'

const Work = () => {
  const workItems = [
    {
      title: '',
      description:
        'We, ‘EasternFab Group’ fabricate structures, Pressure Vessels, Tanks, Air Pollution Equipment, Industrial Fans, Silos, Custom items as per client requirements. Both heavy and light equipment projects are handled.',
      imgSrc: '/src/assets/poster2.webp',
      imgAlt: 'Image 1',
    },
    {
      title: '',
      description:
        'EasternFab Group specializes in Air Pollution Control Equipment, Industrial Fans, and customized fabrication services tailored for client-specific needs. Additional text can be added here in front of the image as requested.',
      imgSrc: '/src/assets/poster2.webp',
      imgAlt: 'Image 1',
    },
    {
      title: '',
      description:
        'Our expert team handles complex fabrication work, Pressure Vessels, customized Silos, and industrial machinery fabrication, ensuring quality and durability.',
      imgSrc: '/src/assets/poster.webp',
      imgAlt: 'Image 2',
    },
    {
      title: '',
      description:
        'We are backed by a well-organized infrastructure that helps us in the fabrication of our exceptional range of products.',
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
        {workItems.map(({ title, description, imgSrc, imgAlt }, index) => (
          <Paper
            key={index}
            square={false}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 2, sm: 3 },
              backgroundColor: 'white',
              color: 'black',
              boxShadow: 3,
              height: '100%',
              minHeight: 500,
              borderRadius: 2,
            }}
          >
            {/* Image Section */}
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

            {/* Content Section */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '18px', sm: '22px' },
                    mb: 1,
                    textAlign: 'center',
                  }}
                >
                  {title || '\u00A0'}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    textAlign: 'center',
                    color: 'grey',
                    mb: 2,
                  }}
                >
                  {description || '\u00A0'}
                </Typography>
              </Box>

              {/* Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
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
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  )
}

export default Work
