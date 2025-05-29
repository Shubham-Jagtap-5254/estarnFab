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
      <Box py={4}>
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
            }}
          >
            Our Services
          </Typography>
        </motion.div>
      </Box>

      <Box
        sx={{
          width: '80%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 4,
          justifyContent: 'center',
          py: 4,
          px: 2,
          margin: '0 auto',
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
          >
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
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
              <Icon
                sx={{
                  fontSize: 40,
                  mb: 2,
                  color: 'green',
                  borderRadius: '50%',
                  backgroundColor: '#e0f2f1',
                  padding: 1,
                }}
              />
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: 'center', color: 'gray' }}
              >
                {description}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </>
  )
}

export default Services
