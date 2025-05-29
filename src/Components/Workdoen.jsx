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
      gap: 3,
      width: '100%',
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
        textAlign: 'left',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '22px', md: '30px' },
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
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          color: 'black',
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: 1.6,
        }}
      >
        {extraText}
      </Typography>
    </Box>

    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        height: { xs: '150px', sm: '180px', md: '300px' },
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
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
        mt: '20px',
        p: { xs: 2, md: 4 },
        gap: 6,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '28px', md: '34px' },
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
          mb: 2,
          left: '50%',
          transform: 'translateX(-50%)',
          mt: 4,
          bgcolor: 'black',
          color: 'white',
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Workdone;
