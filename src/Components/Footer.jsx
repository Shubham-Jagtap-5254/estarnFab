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

const socialLinks = [
  { icon: FacebookIcon, url: 'https://facebook.com' },
  { icon: TwitterIcon, url: 'https://twitter.com' },
  { icon: InstagramIcon, url: 'https://instagram.com' },
  { icon: LinkedInIcon, url: 'https://linkedin.com' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#000',
        color: 'white',
        boxShadow: '0 0 15px rgba(0,0,0,0.8)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: 13,
        pt: { xs: 4, sm: 5 },
        pb: { xs: 3, sm: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 3, md: 4 },
          flexWrap: 'wrap',
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Contact Us */}
        <Box
          sx={{
            flex: 1,
            flexBasis: { xs: '100%', md: '220px' },
            borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
            pr: { md: 2 },
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: '900', letterSpacing: 2, mb: 1, fontSize: { xs: 16, sm: 18 } }}>
            Contact Us
          </Typography>

          <Box>
            {['+91 9527769559', '+91 8928755711', '+91 8830065600'].map((number, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 0.5,
                }}
              >
                <CallIcon
                  sx={{
                    fontSize: 20,
                    mr: 1.5,
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    p: 0.5,
                    display: i === 0 ? 'block' : 'none',
                  }}
                />
                <Link
                  href={`tel:${number}`}
                  underline="none"
                  sx={{
                    fontSize: 13,
                    color: 'white',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#00ffea' },
                    userSelect: 'text',
                  }}
                >
                  {number}
                </Link>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <MailIcon
              sx={{
                fontSize: 20,
                mr: 1.5,
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                p: 0.5,
              }}
            />
            <Link
              href="mailto:mail@mail.com"
              underline="none"
              sx={{
                fontSize: 13,
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

        {/* Quick Links */}
        <Box
          sx={{
            flex: 2,
            flexBasis: { xs: '100%', md: 'auto' },
            maxWidth: 500,
            borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
            px: { md: 2 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: '900', letterSpacing: 2, mb: 1.5, fontSize: { xs: 16, sm: 18 } }}>
            Quick Links
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: { xs: 'center', md: 'flex-start' },
              fontSize: 13,
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

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <FmdGoodIcon
              sx={{
                fontSize: 20,
                mr: 1.5,
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                p: 0.5,
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: '600', fontSize: 13, maxWidth: '90%', userSelect: 'text' }}>
              Talawade Gaon, Talwade, Pimpri-Chinchwad, Maharashtra 411062
            </Typography>
          </Box>
        </Box>

        {/* Image & Social */}
        <Box
          sx={{
            flexShrink: 0,
            flexBasis: { xs: '100%', md: '220px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: 120, sm: 140, md: 130 },
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              boxShadow: '0 6px 15px rgba(0,255,234,0.5)',
              border: '2px solid #00ffea',
            }}
          />
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <IconButton
                key={i}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  fontSize: 20,
                  p: 0.5,
                  '&:hover': { color: '#00ffea' },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
