import React from 'react'
import { Box, Typography } from '@mui/material'
import poster1 from '../assets/poster1.webp'

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    description: 'Leading our company to success with innovation and passion.',
    avatarUrl: poster1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Partner',
    description: 'Committed to delivering excellence in every project.',
    avatarUrl: poster1,
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'Partner',
    description: 'Focused on building strong relationships with clients.',
    avatarUrl: poster1,
  },
  {
    id: 4,
    name: 'Emily Johnson',
    title: 'Partner',
    description: 'Driving growth with strategic vision and teamwork.',
    avatarUrl: poster1,
  },
]

const Reviews = () => {
  return (
    <Box id="ourteam" p={{ xs: 2, sm: 4, md: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: 'black',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'green',
          },
          mb: { xs: 3, sm: 4 },
        }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'nowrap', sm: 'wrap' },
          overflowX: { xs: 'auto', sm: 'visible' },
          gap: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 2, sm: 0 },
        }}
      >
        {reviewsData.map((review) => (
          <Box
            key={review.id}
            sx={{
              flex: { xs: '0 0 80%', sm: '1 1 calc(50% - 24px)', md: '1 1 calc(25% - 32px)' },
              border: '1px solid #ccc',
              borderRadius: 2,
              padding: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 1,
              backgroundColor: '#fafafa',
              scrollSnapAlign: 'start',
              minWidth: { xs: '80%', sm: 'auto' },
            }}
          >
            {review.avatarUrl && (
              <Box
                component="img"
                src={review.avatarUrl}
                alt={review.name || 'Team Member'}
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: { xs: 140, sm: 160, md: 180 },
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
            )}
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 60 }}>
              {review.description || 'No description available.'}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              {review.title || 'Title'}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              - {review.name || 'Name'}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Reviews
