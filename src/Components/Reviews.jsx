import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const reviewsData = [
  {
    id: 1,
    name: 'Ramsha Shaikh',
    title: 'Great Service',
    description: 'Best quality n quick service....',
    avatarUrl: '',
  },
  {
    id: 2,
    name: 'Shravan Wani',
    title: 'Amazing Quality',
    description:
      'One stop solutionStaff is skilled and co operativeRates are also competitive.',
  },
  {
    id: 3,
    name: 'Dinesh Gholap',
    title: 'Good Work',
    description:
      'Best CNG bracket manufacturers in puneBest in quality brackets.',
    avatarUrl: '',
  },
];

const googleReviewLinks = [
  'https://www.google.com/search?sca_esv=f80c30592a28dc32&rlz=1C1GCEU_enIN1161IN1161&biw=1280&bih=593&sxsrf=AE3TifMyFAU9M98yHtCT3pqQjnWBxDXY0w:1748439387446&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5AbRvsbD2ls2gmw_FsYI7SD0c5Ri1T14VFFsv-52JYvnUATRisdOQ2SFLrVSA2HerGLkqf2GDUDSn5iZZdQejk0TN2RyuoPPgbClioq6OranbNeqKioXvjF3wPtxrRWDmPdakdUwGvZk0qx4vLnCAeUiVZgTDgxuDI0dY2rLw1-AthWbw%3D%3D&q=%E0%A4%88%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%B0%E0%A5%8D%E0%A4%A8%E0%A4%AB%E0%A5%88%E0%A4%AC+%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A5%81%E0%A4%AA+%E0%A4%B8%E0%A4%AE%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%E0%A4%8F%E0%A4%82&sa=X&ved=2ahUKEwjfm-akpMaNAxWql68BHUpfBB4Q0bkNegQIHxAD&cshid=1748439444168387',
];

const Reviews = () => {
  const handleSeeMoreClick = () => {
    googleReviewLinks.forEach((link) => {
      window.open(link, '_blank');
    });
  };

  return (
    <Box id="reviews" p={{ xs: 2, sm: 4, md: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: 'black',
          transition: 'all 0.3s ease',
          '&:hover': { color: 'green' },
          fontSize: { xs: '1.8rem', sm: '2.25rem', md: '2.5rem' },
          mb: { xs: 3, sm: 4 },
        }}
      >
        Reviews
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 2, sm: 3, md: 4 },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {reviewsData.map((review) => (
          <Box
            key={review.id}
            sx={{
              flex: {
                xs: '1 1 100%',
                sm: '1 1 calc(50% - 16px)',
                md: '1 1 calc(33.33% - 24px)',
              },
              border: '1px solid #ccc',
              borderRadius: 2,
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 1,
              backgroundColor: '#fafafa',
            }}
          >
            <Avatar
              src={review.avatarUrl}
              sx={{ width: 56, height: 56, mb: 1, bgcolor: 'primary.main' }}
            >
              {review.name.charAt(0)}
            </Avatar>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
            >
              {review.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
            >
              {review.description}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mt: 1, fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}
            >
              - {review.name}
            </Typography>

            <Button
              variant="outlined"
              color="success"
              onClick={handleSeeMoreClick}
              startIcon={<OpenInNewIcon />}
              sx={{
                mt: 3,
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.85rem', sm: '1rem' },
                py: { xs: 1.2, sm: 1 },
                textTransform: 'none',
              }}
            >
              See More
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
