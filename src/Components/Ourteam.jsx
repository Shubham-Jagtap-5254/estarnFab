import React from 'react'
import { Box, Typography } from '@mui/material'
import poster1 from '../assets/poster1.webp'

const reviewsData = [
  {
    id: 1,
    name: ' ',
    title: 'CEO',
    description: '',
    avatarUrl: poster1,
  },
  {
    id: 2,
    name: '',
    title: 'partner',
    description: '',
    avatarUrl: poster1,
  },
  {
    id: 3,
    name: '',
    title: 'partner',
    description: '',
    avatarUrl: poster1,
  },
  {
    id: 4,
    name: '',
    title: 'partner',
    description: '',
    avatarUrl: poster1,
  },
]

const Reviews = () => {
  return (
    <Box id="ourteam" p={2}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: 'black',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'green',
          },
        }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          padding: 2,
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          overflowX: { xs: 'visible', sm: 'auto' },
        }}
      >
        {reviewsData.map((review) => (
          <Box
            key={review.id}
            sx={{
              flex: {
                xs: '1 1 100%',
                sm: '1 1 calc(33.33% - 16px)',
              },
              border: '1px solid #ccc',
              borderRadius: 2,
              padding: { xs: 1, sm: 2 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 1,
              backgroundColor: '#fafafa',
            }}
          >
            {review.avatarUrl && (
              <Box
                component="img"
                src={review.avatarUrl}
                alt={review.name}
                sx={{
                  width: '100%',
                  height: { xs: 120, sm: 150, md: 180 },
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 1,
                }}
              />
            )}
            <Typography variant="body2" color="text.secondary">
              {review.description}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
              {review.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              - {review.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Reviews
