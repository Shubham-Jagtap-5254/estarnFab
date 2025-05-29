import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import banner1 from '../assets/image copy 6.png';
import banner2 from '../assets/image copy 7.png';
import banner3 from '../assets/image copy 8.png';

const WorkSection = ({ reverse, image, title, description, extraText }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: { xs: 2, md: 4 },
      width: '100%',
      px: { xs: 2, md: 0 },
    }}
  >
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        pr: reverse ? 0 : { xs: 0, md: 4 },
        pl: reverse ? { xs: 0, md: 4 } : 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '20px', sm: '24px', md: '30px' },
          color: 'black',
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'black',
          mb: 2,
          fontSize: { xs: '14px', sm: '15px', md: '16px' },
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          color: 'black',
          fontSize: { xs: '14px', sm: '15px', md: '16px' },
          lineHeight: 1.6,
        }}
      >
        {extraText}
      </Typography>
    </Box>

    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        height: { xs: 180, sm: 220, md: 300 },
        borderRadius: 2,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 3,
      }}
    />
  </Box>
);

const Workdone = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="workdone"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: { xs: 3, md: 5 },
        p: { xs: 2, md: 4 },
        gap: { xs: 4, md: 6 },
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 3, md: 4 },
          fontSize: { xs: '26px', sm: '30px', md: '34px' },
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'green',
          },
        }}
      >
        Work Done
      </Typography>

      <WorkSection
        reverse={false}
        image={banner1}
        title="Design Specialists in High-Performance Machinery"
        description="We, ‘EasternFab Group’ fabricate structures, Pressure Vessels, Tanks, Air Pollution Equipment, Industrial Fans, Silos, Custom items as per client requirements. Both heavy and light equipment projects are handled."
        extraText="We are backed by a well-organized infrastructure that helps us in the fabrication of our exceptional range of products."
      />

      <WorkSection
        reverse={true}
        image={banner2}
        title="Air Pollution Control & Fabrication Experts"
        description="EasternFab Group specializes in Air Pollution Control Equipment, Industrial Fans, and customized fabrication services tailored for client-specific needs."
        extraText="Additional text can be added here in front of the image as requested."
      />

      <WorkSection
        reverse={false}
        image={banner3}
        title="Comprehensive Fabrication Solutions"
        description="Our expert team handles complex fabrication work, Pressure Vessels, customized Silos, and industrial machinery fabrication, ensuring quality and durability."
        extraText="We leverage modern infrastructure and technical expertise to deliver premium fabrication services."
      />

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          mt: { xs: 3, md: 4 },
          mb: 2,
          px: { xs: 3, sm: 4 },
          py: { xs: 1.5, sm: 2 },
          bgcolor: 'black',
          color: 'white',
          alignSelf: 'center',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          '&:hover': {
            bgcolor: 'grey.800',
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Workdone;
