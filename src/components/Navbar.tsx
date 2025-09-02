import LanguageSwitcher from './LanguageSwitcher';
const profileImg = `${import.meta.env.BASE_URL}jonatas.jpg`;
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
const linkedinIcon = `${import.meta.env.BASE_URL}img/linkedin.png`;
const githubIcon = `${import.meta.env.BASE_URL}img/github.png`;
const twitterIcon = `${import.meta.env.BASE_URL}img/twitter.png`;
const blueskyIcon = `${import.meta.env.BASE_URL}img/bluesky.png`;
const instagramIcon = `${import.meta.env.BASE_URL}img/instagram.png`;

import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
  { path: '/about', label: 'navbar.about' },
  { path: '/blog', label: 'navbar.blog' },
  { path: '/books', label: 'navbar.books' },
  { path: '/personal', label: 'navbar.personal' }
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerNav = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
  <>
      <Box
  sx={{
    width: '100%',
    maxWidth: '1200px',
    mx: 'auto',
    px: 2,
    py: 2,
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  }}
>
  {/* SVG textura de ondas */}
  <Box sx={{
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  }}>
    <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, top: 0 }}>
      <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.08)" />
    </svg>
  </Box>
  <Grid container spacing={3} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            border: '3px solid #0d47a1',
          }}
        />
        <Box sx={{ ml: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, lineHeight: 1, color: '#fff' }}
          >
            Jonatas Alves
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}
          >
            Software Engineer
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, mb: 1, color: '#fff' }}
        >
          Let’s stay in touch:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/in/jonatasdev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.2s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            />
          </a>
          <a
            href="https://github.com/jonatadev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.2s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={githubIcon}
              alt="GitHub"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            />
          </a>
          <a
            href="https://x.com/jonatadev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.2s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            />
          </a>
          <a
            href="https://bsky.app/profile/jonatasdev.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.2s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={blueskyIcon}
              alt="Bluesky"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/jonatasdev/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.2s',
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            />
          </a>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>
      {/* Barra de navegação horizontal ou Drawer para mobile */}
      {isMobile ? (
        <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mt: 0, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(90deg, #1976d2 0%, #64b5f6 100%)', boxShadow: '0 2px 8px rgba(25,118,210,0.10)', px: 2, py: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box sx={{ width: 220, pt: 2 }}>
              {sections.map((section) => (
                <Typography
                  key={section.path}
                  variant="button"
                  sx={{
                    display: 'block',
                    cursor: 'pointer',
                    color: location.pathname.startsWith(section.path) ? '#1976d2' : '#333',
                    fontWeight: location.pathname.startsWith(section.path) ? 700 : 500,
                    borderLeft: location.pathname.startsWith(section.path) ? '4px solid #1976d2' : 'none',
                    px: 2,
                    py: 2,
                    minWidth: 180,
                    textAlign: 'left',
                    transition: 'color 0.2s, border-left 0.2s',
                    '&:hover': { background: 'rgba(25,118,210,0.08)', color: '#1976d2' }
                  }}
                  onClick={() => handleDrawerNav(section.path)}
                >
                  {t(section.label)}
                </Typography>
              ))}
              <Box sx={{ mt: 2, px: 2 }}>
                <LanguageSwitcher />
              </Box>
            </Box>
          </Drawer>
          <Box sx={{ flex: 1 }} />
          <LanguageSwitcher />
        </Box>
      ) : (
        <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mt: 0, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4, background: 'linear-gradient(90deg, #1976d2 0%, #64b5f6 100%)', boxShadow: '0 2px 8px rgba(25,118,210,0.10)', px: 2, py: 1 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section) => (
              <Typography
                key={section.path}
                variant="button"
                sx={{
                  cursor: 'pointer',
                  color: location.pathname.startsWith(section.path) ? '#fff' : '#e3f2fd',
                  fontWeight: location.pathname.startsWith(section.path) ? 700 : 500,
                  borderBottom: location.pathname.startsWith(section.path) ? '2px solid #fff' : 'none',
                  px: 2,
                  py: 1,
                  minWidth: 100,
                  textAlign: 'center',
                  transition: 'color 0.2s, border-bottom 0.2s',
                  '&:hover': { background: 'rgba(25,118,210,0.18)', color: '#fff' }
                }}
                onClick={() => navigate(section.path)}
              >
                {t(section.label)}
              </Typography>
            ))}
          </Box>
          <LanguageSwitcher />
        </Box>
      )}
    </>
  );
}

export default Navbar;
