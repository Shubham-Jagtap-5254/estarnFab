import React from 'react';
import { Container, Grid, Card, Typography, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EnergyIcon from '@mui/icons-material/EnergySavingsLeaf';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Heavy Machinery',
    description:
      'We provide high-precision roll grinding solutions designed to enhance the quality and efficiency of steel mills. Our advanced machinery ensures superior performance and product consistency for steel manufacturers.',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Automotive',
    description:
      'We specialise in roll grinders and modernisation services tailored for the paper industry. Our solutions help improve the performance and durability of paper manufacturing equipment, boosting productivity and quality.',
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Manufacturing',
    description:
      'We provide top-tier solutions for the heavy engineering industry, precision, and efficiency in large-scale machinery operations. High-quality services that meet the demanding requirements of the heavy engineering sector.',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Energy',
    description:
      'Our specialized machinery and equipment for the energy sector improve the efficiency and reliability of power generation facilities, ensuring uninterrupted power supply and reduced operational costs.',
    icon: <EnergyIcon sx={{ fontSize: 40 }} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'green', mb: { xs: 3, md: 4 } }}
      >
        Industries We Serve
      </Typography>
      
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: { xs: 3, md: 5 }, maxWidth: 800, mx: 'auto' }}
      >
        Neon Solutions supports customers throughout the process, helping them achieve their objectives
        in the steel, paper, and heavy engineering industries. Our expertise and comprehensive
        solutions ensure optimal performance and productivity for our clients.
      </Typography>

      {/* Grid container with spacing */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {industries.map(({ title, description, icon }) => (
          <Grid
            item
            key={title}
            xs={12}   // full width on xs screens (mobile)
            sm={6}    // half width on small screens (tablets)
            md={4}    // one-third width on medium+ screens (desktop)
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: { xs: 2.5, md: 3 },
                  bgcolor: '#f9fafb',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                  },
                }}
                elevation={0}
              >
                <Box sx={{ mb: 2, color: 'black' }}>{icon}</Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
