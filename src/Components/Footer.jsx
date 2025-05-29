  import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import banner from '../assets/image.png';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Work Done', href: '#workdone' },
  { label: 'Our Team', href: '#ourteam' },
  { label: 'Contact Us', href: '#contact' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        background: '#000000',
        p: { xs: 4, md: 6 },        
        gap: { xs: 4, md: 6 },      
        flexWrap: 'wrap',
        color: 'white',
        boxShadow: '0 0 25px rgba(0,0,0,0.9)',
        borderRadius: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: '280px',
          borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
          pr: { md: 4 },             
          display: 'flex',
          flexDirection: 'column',
          gap: 3,                    
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: '900',
            letterSpacing: 3,
            textTransform: 'uppercase',
            userSelect: 'none',
            mb: 1,
            fontSize: 22,            
          }}
        >
          Contact Us
        </Typography>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CallIcon
              sx={{
                fontSize: 28,          
                mr: 2,
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                p: 0.7,
              }}
            />
            <Link
              href="tel:+919527769559"
              underline="none"
              sx={{
                fontSize: 16,           
                color: 'white',
                transition: 'color 0.3s',
                '&:hover': { color: '#00ffea' },
                userSelect: 'text',
              }}
            >
              +91 9527769559
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CallIcon
              sx={{
                fontSize: 28,
                mr: 2,
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                p: 0.7,
                visibility: 'hidden',
              }}
            />
            <Link
              href="tel:+918928755711"
              underline="none"
              sx={{
                fontSize: 16,
                color: 'white',
                transition: 'color 0.3s',
                '&:hover': { color: '#00ffea' },
                userSelect: 'text',
              }}
            >
              +91 8928755711
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CallIcon
              sx={{
                fontSize: 28,
                mr: 2,
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                p: 0.7,
                visibility: 'hidden',
              }}
            />
            <Link
              href="tel:+918830065600"
              underline="none"
              sx={{
                fontSize: 16,
                color: 'white',
                transition: 'color 0.3s',
                '&:hover': { color: '#00ffea' },
                userSelect: 'text',
              }}
            >
              +91 8830065600
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <MailIcon
            sx={{
              fontSize: 28,
              mr: 2,
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              p: 0.7,
            }}
          />
          <Link
            href="mailto:mail@mail.com"
            underline="none"
            sx={{
              fontSize: 16,
              color: 'white',
              transition: 'color 0.3s',
              '&:hover': { color: '#00ffea' },
              wordBreak: 'break-word',
              userSelect: 'text',
            }}
          >
            mail@mail.com
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1.8,
          maxWidth: '650px',
          pl: { md: 4 },               
          borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
          pr: { md: 4 },              
          display: 'flex',
          flexDirection: 'column',
          gap: 4,                     
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: '900',
              letterSpacing: 3,
              textTransform: 'uppercase',
              userSelect: 'none',
              mb: 2,
              fontSize: 22,            
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              fontSize: 16,           
              fontWeight: '600',
            }}
          >
            {quickLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                underline="hover"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  '&:hover': { color: '#00ffea' },
                }}
              >
                {label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FmdGoodIcon
            sx={{
              fontSize: 28,           
              mr: 2,
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              p: 0.7,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: '900',
              letterSpacing: 1.5,
              maxWidth: '90%',
              userSelect: 'none',
              fontSize: 18,          
            }}
          >
            Talawade Gaon, Talwade, Pimpri-Chinchwad, Maharashtra 411062
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          width: { xs: '100%', sm: '320px', md: '280px' }, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: 200, sm: 230, md: 200 },        
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,255,234,0.5)',
            border: '3px solid #00ffea',
            animation: 'pulse 6s infinite ease-in-out',
          }}
        />
        <Box sx={{ display: 'flex', gap: 2.5 }}>
          {[
            { icon: <FacebookIcon />, href: 'https://facebook.com' },
            { icon: <TwitterIcon />, href: 'https://twitter.com' },
            { icon: <InstagramIcon />, href: 'https://instagram.com' },
            { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
          ].map(({ icon, href }, i) => (
            <IconButton
              key={i}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                fontSize: 28,        
                '&:hover': { color: '#00ffea' },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
