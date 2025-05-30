import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import BuildIcon from '@mui/icons-material/Build'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { motion } from 'framer-motion'

const Services = () => {
  const workItems = [
    {
      title: 'Special Purpose Machines (SPM)s',
      Icon: SettingsApplicationsIcon,
      description:
        'We design and deliver customized SPMs tailored to specific industrial needs. Our SPMs enhance productivity, reduce human error, and optimize operational efficiency.',
    },
    {
      title: 'Retrofitting and Machine Refurbishment',
      Icon: BuildIcon,
      description:
        'Upgrade your existing machines with our retrofitting and refurbishment services to extend lifespan and improve performance.',
    },
    {
      title: 'Plant Shifting',
      Icon: LocalShippingIcon,
      description:
        'Efficient and safe plant shifting services ensuring minimal downtime and smooth relocation of your industrial setup.',
    },
    {
      title: 'Custom Machine Design',
      Icon: DesignServicesIcon,
      description:
        'Tailor-made machine design services that meet your unique production requirements and enhance operational efficiency.',
    },
  ]

  return (
    <>
      <Box py={{ xs: 4, sm: 6, md: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            letterSpacing={1}
            align="center"
            variant="h3"
            sx={{
              color: 'black',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'green',
              },
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Our Services
          </Typography>
        </motion.div>
      </Box>

      <Box
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: { xs: 3, sm: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 3, sm: 5 },
        }}
      >
        {workItems.map(({ title, Icon, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            style={{ display: 'flex' }}
          >
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1, // make all cards flex-grow equally
                alignItems: 'center',
                justifyContent: 'space-between', // stretch inner content
                p: { xs: 3, sm: 4 },
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 6,
                  backgroundColor: '#f9f9f9',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <Icon
                  sx={{
                    fontSize: { xs: 36, sm: 40, md: 44 },
                    mb: 2,
                    color: 'green',
                    borderRadius: '50%',
                    backgroundColor: '#e0f2f1',
                    padding: 1.2,
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    fontWeight: '600',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    color: 'gray',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.4,
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </>
  )
}

export default Services
